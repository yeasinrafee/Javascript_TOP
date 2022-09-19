"use strict";

//Function Constructor:
// function Person(firstName, lastName) {
//   let code = 44535;

//   this.firstName = firstName;
//   this.lastName = lastName;

//   this.hasJob = true;

//   this.fullName = () => console.log(`${this.firstName} ${this.lastName}`);

//   this.setFirstName = (firstName) => (this.firstName = firstName);

//   this.setLastName = (lastName) => (this.lastName = lastName);

//   this.getCode = () => console.log(code);
// }

// const rafee = new Person("Yeasin", "Rafee");

// console.log(rafee);

// Class Constructor:
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.code = 34563;
//   }

//   getFirstName(firstName) {
//     this.firstName = firstName;
//   }
//   getLastName(lastName) {
//     this.lastName = lastName;
//   }
//   fullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }
//   getCode() {
//     console.log(this.code);
//   }
// }

// const rafee = new Person("Yeasin", "Rafee");

// Static Method:
class Person {
  static species() {
    console.log("Homo sapiens");
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.code = 34563;
  }

  getFirstName(firstName) {
    this.firstName = firstName;
  }
  getLastName(lastName) {
    this.lastName = lastName;
  }
  fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
  getCode() {
    console.log(this.code);
  }
}

const rafee = new Person("Yeasin", "Rafee");

// Extends and Super keyword:
class Employee extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);

    this.code = 1007;
  }
}

const emp1 = new Employee("rafee", "yeasin");

emp1.fullName();
emp1.getCode();
