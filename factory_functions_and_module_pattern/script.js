// factory function
const personFactory = (name, age) => {
  const sayHello = () => console.log("hello");
  return { name, age, sayHello };
};
const rafee = personFactory("Rafee", 22);

// console.log(rafee);
// console.log(rafee.name);
// rafee.sayHello();

//Private variables and function:
const FactoryFunction = (string) => {
  const capital = () => string.toUpperCase();
  const print = () => console.log(capital());
  return { print };
};

const rafi = FactoryFunction("rafi");
// print();
// capital();
// rafi.capital();
rafi.print();

const funCounter = () => {
  let count = 1;
  return () => {
    console.log(count);
    count++;
  };
};

const counter = funCounter();
// counter();
// counter();
// counter();

// Inheritance with factories:
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName };
};

const Nerd = (name) => {
  const { sayName } = Person(name);

  const doSomethingNerdy = () => console.log("nerd stuff");
  return { sayName, doSomethingNerdy };
};

const raf = Nerd("Rafee");

// raf.sayName();
// raf.doSomethingNerdy();

const takeName = (name) => {
  const sayMyName = () => console.log(`My name is ${name}`);
  return { sayMyName };
};

const rafeee = takeName("Rafee");
rafeee.sayMyName();
