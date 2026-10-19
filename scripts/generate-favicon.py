"""Convert the existing portrait into browser and Apple touch icons."""

from pathlib import Path
from PIL import Image, ImageDraw, ImageOps

root = Path(__file__).resolve().parents[1]
portrait = ImageOps.exif_transpose(Image.open(root / "public/photos/isaiah-hero.png"))
# Focus on the face so it remains recognisable at browser-tab sizes.
portrait = portrait.crop((400, 650, 2400, 2650)).convert("RGBA")
portrait = portrait.resize((512, 512), Image.Resampling.LANCZOS)
mask = Image.new("L", (512, 512))
ImageDraw.Draw(mask).ellipse((1, 1, 510, 510), fill=255)
portrait.putalpha(mask)
portrait.save(root / "app/icon.png")
portrait.save(root / "app/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
# Apple supplies its own corner mask; use an opaque square for touch icons.
apple = Image.new("RGB", (512, 512), "#F3EFE7")
apple.paste(portrait, mask=portrait.getchannel("A"))
apple.resize((180, 180), Image.Resampling.LANCZOS).save(root / "app/apple-icon.png")
