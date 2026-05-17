from __future__ import annotations

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent

INDEX = ROOT / "index.html"
STORY = ROOT / "index-story-issue27.html"
WORLD = ROOT / "index-waldwelt-issue28.html"
CATS = ROOT / "index-waldkaetzchen-issue31.html"
ANIMALS = ROOT / "index-tiere-issue32.html"
SITUATIONS = ROOT / "index-situationen-issue29.html"
GROW = ROOT / "index-mitwachsen-issue30.html"


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def split_fragment(fragment: str) -> tuple[str, str, str]:
    styles = "\n".join(re.findall(r"<style>[\s\S]*?</style>", fragment, flags=re.IGNORECASE))
    scripts = "\n".join(re.findall(r"<script>[\s\S]*?</script>", fragment, flags=re.IGNORECASE))
    section = re.sub(r"<style>[\s\S]*?</style>", "", fragment, flags=re.IGNORECASE)
    section = re.sub(r"<script>[\s\S]*?</script>", "", section, flags=re.IGNORECASE).strip()
    return section, styles, scripts


def replace_between(text: str, start_marker: str, end_marker: str, replacement: str) -> str:
    pattern = re.compile(re.escape(start_marker) + r"[\s\S]*?" + re.escape(end_marker), re.MULTILINE)
    updated, count = pattern.subn(replacement.rstrip() + "\n\n" + end_marker, text, count=1)
    if count != 1:
        raise RuntimeError(f"Could not replace block starting with {start_marker!r}")
    return updated


def insert_before(text: str, marker: str, fragment: str) -> str:
    if marker not in text:
        raise RuntimeError(f"Marker not found: {marker!r}")
    return text.replace(marker, fragment.rstrip() + "\n\n" + marker, 1)


def append_before_body_end(text: str, fragment: str) -> str:
    marker = "</body>"
    if marker not in text:
        raise RuntimeError("Closing body tag not found")
    return text.replace(marker, fragment.rstrip() + "\n" + marker, 1)


def main() -> None:
    index = read(INDEX)

    story_section, story_css, story_js = split_fragment(read(STORY))
    world_section, world_css, world_js = split_fragment(read(WORLD))
    cats_section, cats_css, cats_js = split_fragment(read(CATS))
    animals_section, animals_css, animals_js = split_fragment(read(ANIMALS))
    situations_section, situations_css, situations_js = split_fragment(read(SITUATIONS))
    grow_section, grow_css, grow_js = split_fragment(read(GROW))

    # 1) Add story directly after "Kennst du das Gefühl?"
    index = insert_before(index, "<!-- ═══ DIE WALDORTE", story_section)

    # 2) Replace old Waldorte + Echos with new Waldwelt
    index = replace_between(
        index,
        "<!-- ═══ DIE WALDORTE",
        "<!-- ═══ DIE FIGUREN",
        world_section + "\n\n<!-- ═══ DIE FIGUREN",
    )
    index = index.replace("<!-- ═══ DIE FIGUREN\n\n<!-- ═══ DIE FIGUREN", "<!-- ═══ DIE FIGUREN", 1)

    # 3) Replace old Figuren + old Waldkätzchen with new Katzen + Tiere + Situationen + Mitwachsen
    index = replace_between(
        index,
        "<!-- ═══ DIE FIGUREN",
        "<!-- FÜR WEN -->",
        cats_section + "\n\n" + animals_section + "\n\n" + situations_section + "\n\n" + grow_section + "\n\n<!-- FÜR WEN -->",
    )
    index = index.replace("<!-- FÜR WEN -->\n\n<!-- FÜR WEN -->", "<!-- FÜR WEN -->", 1)

    # 4) Move section CSS into the existing head style block.
    extra_css = "\n\n/* ── NEUE STARTSEITEN-SEKTIONEN / ISSUES 27, 28, 29, 30, 31, 32 ── */\n"
    extra_css += "\n".join([story_css, world_css, cats_css, animals_css, situations_css, grow_css])
    extra_css = extra_css.replace("<style>", "").replace("</style>", "").strip()
    index = index.replace("</style>", "\n\n" + extra_css + "\n</style>", 1)

    # 5) Add any section JS before the closing body tag.
    extra_js = "\n".join([story_js, world_js, cats_js, animals_js, situations_js, grow_js]).strip()
    if extra_js:
        index = append_before_body_end(index, extra_js)

    # 6) Remove now-unused JS calls for removed old dynamic grids/echos.
    index = index.replace("buildFigurCards('tier-grid', 4);\n", "")
    index = index.replace("buildWaldkatzenWerkzeuge('katzen-werkzeuge-grid');\n", "")
    index = index.replace("buildEchos('echos-grid');\n", "")

    INDEX.write_text(index, encoding="utf-8")


if __name__ == "__main__":
    main()
