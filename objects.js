const calculator = {
  operand1: 2,
  operand2: 1,
  add: function () {
    this.result = this.operand1 + this.operand2;
    return this.result;
  },
};
// console.log(calculator.add());

const o = {
  m: function () {
    const self = this;
    console.log(this === o);
    console.log(this === self);
    function f() {
      console.log(this === o);
      console.log(self === o);
    }
    console.log(this);
    f();
  },
};
// o.m();
function doSomething() {
  console.log(this, 'from the outer function');
}
// new doSomething();
// doSomething();
// new o.m();
// o.m();
// call() and apply() are methods of functions and they invoke the function indirectly
// they allow you to specify the this value for the invocation
function add(a, b) {
  console.log(arguments[0]);
  console.log(arguments);
  return a + b;
}
// add(23, 4, 5);
function max(...argList) {
  let m = 0;
  for (let i = 0; i <= argList.length; i++) {
    if (argList[i] > m) {
      m = argList[i];
    }
  }
  return m;
}
// console.log(max(200, 400, 100, 1000));
function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function operate(operation, arg1, arg2) {
  return operation(arg1, arg2);
}

// console.log(operate(sub, 2, 6));
// deining and invoking a function immediately
(function tellMeSomething() {
  console.log('hello there baeutifull');
})();

// Clossures
const scope = 'global scope';
function checkScope() {
  const scope = 'local scope';
  return function f() {
    return scope;
  };
}
console.log(checkScope()());
