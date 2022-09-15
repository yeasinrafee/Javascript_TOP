const myObject = {
  property: "value",
  otherProperty: 88,
  "another property": function () {
    console.log("hello world");
  },
};

// myObject[variable]; It'll not work
// console.log(myObject);

// console.log(myObject.property);
// console.log(myObject["another property"]);

const playerOne = {
  name: "tim",
  marker: "x",
};
const playerTwo = {
  name: "jen",
  marker: "O",
};

function printName(player) {
  console.log(player.name);
}

// printName(playerOne);
// printName(playerTwo);

function Players(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name, " ", marker);
  };
}

const player1 = new Players("Rafee", "X");
// console.log(player1.name);
// console.log(player1.marker);
// player1.sayName();

// Exercise:
function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "finished reading" : "not read yet"
    }`;
  };
}
const theHobbit = new Books("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info());

function Student(name, grade) {}

Student.prototype.sayName = function () {
  console.log(this.name);
};
Student.prototype.goToProm = function () {
  console.log("Eh...going to prom?");
};

function EightGrader(name) {
  this.name = name;
  this.grade = 8;
}

EightGrader.prototype = Object.create(Student.prototype);

const carl = new EightGrader("carl");

carl.sayName();
carl.goToProm();

// console.log(Student);
