// const arr = [1, 2, 3];

// function logVal(value) {
//   console.log(value);
// }

// // arr.forEach(logVal);

// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }

// arr.forEach(console.log);
// console.log('-----------');
// forEach(arr, console.log);

// ------ Map ------
function addBy2(x) {
  return x + 2;
}

function doesNothing(x) {
  return x;
}

function collectElAndIdx(el, i) {
  return [el, i];
}


// const arr = [1, 2, 3];
// const res = arr.map(addBy2);
// const res2 = arr.map(doesNothing);

// console.log(res); // [3, 4, 5]
// console.log(res2); // [1, 2, 3]
// console.log(arr === res2); // false

function map(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const newEl = callback(arr[i], i, arr);
    newArr.push(newEl);
  }
  return newArr;
}

const arr = [1, 2, 3];
const res = map(arr, addBy2);
const res2 = map(arr, doesNothing);
const res3 = map(arr, collectElAndIdx);

console.log(res); // [3, 4, 5]
console.log(res2); // [1, 2, 3]
console.log(res3); // [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ] ]
console.log(arr === res2); // false
