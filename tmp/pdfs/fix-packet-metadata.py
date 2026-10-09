from pathlib import Path
import io
from pypdf import PdfReader, PdfWriter
import pypdfium2 as pdfium
p = Path('public/packets/RG27_SponsorPacket.pdf')
original = p.read_bytes()
r = PdfReader(io.BytesIO(original))
w = PdfWriter(clone_from=r)
# Keep one canonical title; omit the redundant multilingual XMP title.
xmp = w.xmp_metadata
if xmp:
    xmp.dc_title = {}
w.add_metadata({'/Title': 'RG27_SponsorPacket'})
buf = io.BytesIO()
w.write(buf)
updated = buf.getvalue()
check = PdfReader(io.BytesIO(updated))
assert check.metadata.title == 'RG27_SponsorPacket'
assert not check.xmp_metadata.dc_title
before, after = pdfium.PdfDocument(original), pdfium.PdfDocument(updated)
assert len(before) == len(after)
for i in range(len(before)):
    a = before[i].render(scale=1).to_pil()
    b = after[i].render(scale=1).to_pil()
    assert a.size == b.size and a.tobytes() == b.tobytes(), f'Page {i+1} changed'
    if i == 0:
        b.save('tmp/pdfs/packet-preview.png')
p.write_bytes(updated)
print(f'Fixed title metadata; all {len(after)} pages render identically.')
