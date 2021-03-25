const sayHelloToConsole = function (name) {
  console.log("Hello, " + name + "!");
}

const returnSayHello = function (name) {
  return "Hello, " + name + "!";
}

sayHelloToConsole("Frank");
sayHelloToConsole("Miranda");
sayHelloToConsole("Ferdinand");
const greeting = returnSayHello("John");
console.log(greeting);