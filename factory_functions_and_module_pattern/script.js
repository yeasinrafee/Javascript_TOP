// factory function
const personFactory = (name, age) => {
  const sayHello = () => console.log("hello");
  return { name, age, sayHello };
};
const rafee = personFactory("Rafee", 22);

console.log(rafee);
console.log(rafee.name);
rafee.sayHello();
