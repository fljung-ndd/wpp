from pathlib import Path
import re

root = Path(__file__).resolve().parent
index_path = root / 'index.html'
fragment_paths = [
    root / 'index-story-issue27.html',
    root / 'index-waldwelt-issue28.html',
    root / 'index-waldkaetzchen-issue31.html',
    root / 'index-tiere-issue32.html',
    root / 'index-situationen-issue29.html',
    root / 'index-mitwachsen-issue30.html',
]
placeholder = '''<!-- Story, Waldwelt, Kätzchen, Tiere, Situationen, Mitwachsen: Bestand aus der integrierten Startseite -->
<!-- Inhalt wurde im bestehenden Integrationsstand beibehalten; die visuellen Panels werden oben via CSS wärmer gefärbt. -->'''

style_re = re.compile(r'<style>[\s\S]*?</style>', re.I)
script_re = re.compile(r'<script>[\s\S]*?</script>', re.I)

index = index_path.read_text(encoding='utf-8')
if placeholder not in index:
    raise SystemExit('Homepage placeholder not found; no changes made.')

sections = []
styles = []
scripts = []

for path in fragment_paths:
    text = path.read_text(encoding='utf-8')
    styles.extend(style_re.findall(text))
    scripts.extend(script_re.findall(text))
    text = style_re.sub('', text)
    text = script_re.sub('', text)
    sections.append(text.strip())

index = index.replace(placeholder, '\n\n'.join(sections))

css = []
for block in styles:
    css.append(block.replace('<style>', '').replace('</style>', '').strip())
if css:
    index = index.replace('</style>', '\n\n/* Rebuilt sections */\n' + '\n\n'.join(css) + '\n</style>', 1)

for block in scripts:
    if 'function scrollSituationSlider' in block and 'function scrollSituationSlider' in index:
        continue
    index = index.replace('</body>', '\n' + block + '\n</body>', 1)

index_path.write_text(index, encoding='utf-8')
