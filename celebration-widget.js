const celebration = await new Request("https://celebration.pival.fr/api/celebration").loadJSON()

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

// Add a semi-transparent dark overlay
let gradient = new LinearGradient()
gradient.colors = [new Color("#000000", 0.3), new Color("#000000", 0.3)]
gradient.locations = [0.0, 1.0]
w.backgroundGradient = gradient

w.addSpacer(8)

let staticText = w.addText(date)
staticText.textColor = Color.white()
staticText.font = Font.boldSystemFont(24)
staticText.centerAlignText()

w.addSpacer(15)

let amountTxt = w.addText(name)
amountTxt.textColor = Color.white()
amountTxt.font = Font.systemFont(24)
amountTxt.centerAlignText()

Script.setWidget(w)
Script.complete()

w.presentMedium()