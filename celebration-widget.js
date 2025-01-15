const {celebration} = await new Request("https://celebration.pival.fr/api/celebration").loadJSON()

const {
  date,
  name,
  description,
  origin,
  image,
  image_site,
  full_description,
  good_to_know,
  action
} = celebration

const w = new ListWidget()
w.url = "https://celebration.pival.fr"
w.backgroundColor = new Color("#222222")
w.backgroundImage = await new Request(image).loadImage()


w.addSpacer(8)

let staticText = w.addText(date)
staticText.textColor = Color.white()
staticText.font = Font.boldSystemFont(12)
staticText.centerAlignText()

w.addSpacer(8)

let amountTxt = w.addText(name)
amountTxt.textColor = Color.orange()
amountTxt.font = Font.systemFont(16)
amountTxt.centerAlignText()

Script.setWidget(w)
Script.complete()

w.presentMedium()