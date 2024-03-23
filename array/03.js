/**
 * ?@Title: Traverse Array Element
 */

const myArray = [
  { id: 1, name: "John", firstName: "John", lastName: "Smith", age: 12 },
  { id: 2, name: "Jane", firstName: "Jane", lastName: "Brown", age: 14 },
  { id: 3, name: "Martin", firstName: "Martin", lastName: "Johnson", age: 13 },
  { id: 4, name: "Katie", firstName: "Katie", lastName: "Miller", age: 17 },
  { id: 5, name: "Louis", firstName: "Louis", lastName: "Wilson", age: 11 },
];

// !6 different ways to Traverse / Loop through an array
/**
 * ?1. for Loop
 */
for (let i = 0; i < myArray.length; i++) {
  /* console.log(i + 1);
  console.log(myArray[i].name); */
}
/**
 * ?2. for/of Loop
 */
for (const iterator of myArray) {
  //   console.log(iterator.name);
}
/**
 * ?3. forEach()
 */
myArray.forEach((cur, index, arr) => {
  /* console.log(index + 1);
    console.log(cur.name);
  console.log(arr[index].name); */
});
/**
 * ?4. while Loop
 */
/**
 * ?5. do/while Loop
 */
/**
 * ?6. map()
 * @description: map() method is in fact very similar to forEach() method as it will also execute the provided callback function once for each array element. The only major difference is that map() method will create and return a new set of arrays based on the result of the callback function.
 */
const fullName = myArray.map(
  (item, index, arr) => item.firstName + " " + item.lastName
);
fullName.map((name) => console.log(name));
// !Array Sum & Avg
const arr1 = [1, 2, 3, 4, 5];
let sum = 0;
arr1.forEach((cur, index, arr1) => (sum += cur));
const avg = sum / arr1.length;
// console.log(sum, avg);
// !Find Large Number
const arr2 = [49, 82, 54, 87, 65, 99, 10, 43, 23, 54, 43, 23, 76];
/**
 * !3 COMMON WAYS TO FIND JAVASCRIPT ARRAY MAX
    1.For loop
    2.Math.max() with the spread operator
    3.Reduce method
*/
// !For Loop
let max1 = arr2[0]; // initialize to the first value
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > max1) {
    max1 = arr2[i];
  }
}
// console.log("Max:", max);
// !Math.max()
let max2 = Math.max(...arr2);
// console.log("Max2:", max2);
// !Reduce method
const max3 = arr2.reduce((acc, cur) => Math.max(acc, cur), arr2[0]);
console.log("Max3:", max3);

// !Find Small Number
let min1 = arr2[0];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < min1) {
    min1 = arr2[i];
  }
}
// console.log("Min1:", min1);
const min2 = Math.min(...arr2);
// console.log("Min2:", min2);
const min3 = arr2.reduce((acc, cur) => Math.min(acc, cur), arr2[0]);
console.log("Min3:", min3);
