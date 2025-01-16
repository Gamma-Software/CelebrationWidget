const w = new ListWidget();
const apiUrl = "https://celebration.pival.fr/api/celebration";

if (config.runsInWidget) {
  const celebration = await getCelebrationData();
  createWidget(celebration);
  Script.setWidget(w);
  Script.complete();
}
else if (config.runsInApp) {
    if (fm.fileExists(cachePath)) {
        fm.remove(cachePath)
    }
}
else{
  const celebration = await getCelebrationData();
  createWidget(celebration);
  w.presentMedium();
}

async function getCelebrationData() {
  const celebration = await new Request(apiUrl).loadJSON();
  return celebration;
}

async function createWidget(celebration) {
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
  } = celebration;

  // Add a semi-transparent dark overlay
  let gradient = new LinearGradient();
  gradient.colors = [new Color("#000000", 0.3), new Color("#000000", 0.3)];
  gradient.locations = [0.0, 1.0];
  w.backgroundGradient = gradient;

  w.addSpacer(8);

  let staticText = w.addText(date);
  staticText.textColor = Color.white();
  staticText.font = Font.boldSystemFont(24);
  staticText.centerAlignText();

  w.addSpacer(15);

  let amountTxt = w.addText(name);
  amountTxt.textColor = Color.white();
  amountTxt.font = Font.systemFont(24);
  amountTxt.centerAlignText();

  w.url = "https://celebration.pival.fr";
  w.backgroundColor = new Color("#222222");
  let dayImage = await loadImage(image)
  w.backgroundImage = dayImage;
}

// download an image from a given url
async function loadImage(imgUrl) {
  console.log(imgUrl)
  let req = new Request(imgUrl)
  req.allowInsecureRequest = true
  let image = await req.loadImage()
  return image
}