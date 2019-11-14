var circulation;

function preload() {
  circulation = loadJSON("https://data.brla.gov/resource/m33w-s9q6.json");
}

function setup() {

  createCanvas(800, 600);
  background(100);

  noStroke();
  print(circulation);
  print(circulation[0].year);
  print(circulation[0].month);
  print(circulation[0].circulation_total);
  print(Object.keys(circulation).length);

  var i = 0;

  for (var x = 20; x < width; x = x + 100) {
    for (var y = 20; y < height; y = y + 100) {
      fill(random(255), random(255), random(255));
      circle(x, y, circulation[i].circulation_total / 5000);
      i++;
    }
  }

}

function draw() {


}