//characters from The Inheritance Cycle by Christopher Paolini
let fantasy = [{
  name: "Eragon",
  species: "a Magic Human-Elf Hybrid",
  age: "17",
  occupation: "a Dragon Rider"
}, {
  name: "Saphira",
  species: "a Dragon",
  age: "4",
  occupation: "the Head Dragon"
}, {
  name: "Arya",
  species: "an Elf",
  age: "150+",
  occupation: "the Ruler of the Elves"
}, {
  name: "Nasuada",
  species: "a Human",
  age: "20",
  occupation: "the Ruler of the Empire"
}, {
  name: "Orik",
  species: "a Dwarf",
  age: "100+",
  occupation: "the Ruler of the Dwarven Kingdom"
}];

let nameIndex;
let speciesIndex;
let ageIndex;
let occupationIndex;

function setup() {
  createCanvas(600, 600);
  textSize(20);
}

function draw() {
}

function mousePressed() {
  background(220);
  //randomIndex = int(random(fantasy.length));
  nameIndex = int(random(fantasy.length));
  speciesIndex = int(random(fantasy.length));
  ageIndex = int(random(fantasy.length));
  occupationIndex = int(random(fantasy.length));

  text("Your name is " + fantasy[nameIndex].name + ".", 50, 100);
  text("You are " + fantasy[speciesIndex].species, 50, 135);
  text("and you are " + fantasy[ageIndex].age + " years old.", 50, 170);
  text("You are " + fantasy[occupationIndex].occupation + ".", 50, 205);

}
