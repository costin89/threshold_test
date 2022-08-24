let capture;
let tSlider;
let frame = 0;
let img;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  noStroke();
  frameRate(30);
  tSlider = createSlider(11, 99, 1);
  tSlider.position(10, capture.height + 10);
}

function draw() {
  background(0);
  const t = ("0." + tSlider.value());
  image(capture, 0, 0, 640, 480);
  filter(THRESHOLD,t);
  img = capture.get();
  img.filter(THRESHOLD,t);
}

function keyTyped() {
  if (key === 's') {
    img.save(('photo_'+ frame), 'png');
    frame += 1;
  }
}