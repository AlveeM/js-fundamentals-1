// let x = 5;
// let y = 5;
// console.log(x === y); // true

// let str1 = 'hello';
// let str2 = 'hello';
// console.log(str1 === str2); // true

// let a = {};
// let b = {};
// console.log(a === b); // false

// let x = 5;
// let y = x;
// console.log(x === y); // true

// let a = {};
// let b = a;
// console.log(a === b); // true

let logHi = function() {
  return 'hi';
}

let logHi2 = function() {
  return 'hi';
}

console.log(logHi === logHi2); // false
console.log(logHi() === logHi2()); // true
