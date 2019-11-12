var parks;
var pNum = 0;
var sNum = 0;

function preload() {
  parks = loadTable("BREC_Parks.csv");
}

function setup() {
  createCanvas(800, 600);
  background(100);
  // print("number of parks", parks.getRowCount());
  // print("park attributes", parks.getColumnCount());

  for (var i = 1; i < parks.getRowCount(); i++) {
    if (parks.get(i, 12) != "") {
      sNum = int(parks.get(i, 12)) + sNum;
    }

    if (parks.get(i, 10) != "") {
      pNum = int(parks.get(i, 10)) + pNum;
    }
  }

  print(pNum);
  print(sNum);

  //playgrouds
  circle(200, height / 2, pNum * 2);

  //swimming pools
  circle(550, height / 2, sNum * 2);

}

function draw() {


}