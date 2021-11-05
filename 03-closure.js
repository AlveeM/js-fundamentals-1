// let value = 3;

// function second() {
//   let value = 4;
//   first();
// }

// function first() {
//   console.log(value);
// }

// second(); // 3;

function createPrivateValueManager(defaultValue = 0) {
  let value = defaultValue;

  function get() {
    return value;
  }
  
  function add(x) {
    value += x;
  }

  function reset() {
    value = defaultValue;
  }

  // return function() {
    
  // }

  return {
    get,
    add,
    reset
  }
}

// const privateManager = createPrivateValueManager(1);
// console.log(privateManager.get());

// privateManager.add(2);
// privateManager.add(5);
// console.log(privateManager.get());

// privateManager.reset();
// console.log(privateManager.get());

// Exercise 1
function createPrintFunc(input) {
  return function() {
    console.log(input);
  }
}

// const func1 = createPrintFunc('hello');
// func1(); // should log 'hello'
// const func2 = createPrintFunc('hi');
// func2(); // should log 'hi'

// Exercise 2
function once(callback) {
  let isCalled = false;
  let callbackOutput;

  return function(...args) {
    if (!isCalled) {
      callbackOutput = callback(...args);
      isCalled = true;
      return callbackOutput;
    } else {
      return callbackOutput;
    }
  }
}

const addOnce = once(function(a, b) {
	return a + b;
})

const mulBy2Once = once(function(x) {
  return x * 2;
})

console.log(addOnce(1, 2)) // 3
console.log(addOnce(5, 3)) // 3
console.log(addOnce(4, 1)) // 3

console.log(mulBy2Once(2)) // 4
console.log(mulBy2Once(5)) // 4
console.log(mulBy2Once(6)) // 4