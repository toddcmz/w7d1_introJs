/*
Question #1
Write a function that takes a string (sentence) and an array of strings (in this example dog_names) and check if one of the list members (dog names) is in the string (sentence). Return an array of the dog names found in the array
hint: filter, includes
for information on includes see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
*/
var dogNames = ["Max","Fido","Gizmo","Nala"];

//Test Cases
let testString1 = "Hello, my dog is Max, and they have purple eyes!";
//Expect ['Max']

let testString2 = "My Dog is fast, her name is Tippi";
//Expect []

let testString3 = "Come here Fido and Gizmo come here";
//Expect['Fido','Gizmo']
console.log(testString1.includes("Max"));

// um, why did that work. I don't understand
// my own code. 
function isDogName(thisSentence,theseNames){
    return theseNames.filter(dog => thisSentence.includes(dog));
};

console.log(isDogName(testString1, dogNames));
console.log(isDogName(testString2, dogNames));
console.log(isDogName(testString3, dogNames));

/*
Question #2
Write a Function using map to convert an array of number from inches to feet
1 foot = 12 inches
*/
const heightsInInches = [66, 64, 60, 52, 72, 80, 51];
// Expect
// [
//   5.5,
//   5.333333333333333,
//   5,
//   4.333333333333333,
//   6,
//   6.666666666666667,
//   4.25
// ]

function returnFeet(heights){
    return heights.map(height => height/12);
};

console.log(returnFeet(heightsInInches))

/*
Question #3
Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name.
*/
const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"];
// expect
// [
//   'Leonardo is eating pizza',
//   'Michelangelo is eating pizza',
//   'Donatello is eating pizza',
//   'Raphael is being rude'
// ]

const answerArray = tmnt.map(name => name.endsWith("o") ? name+" is eating pizza":name+" is being rude" );
console.log(answerArray);

/*
Question #4
Write an arrow function to find the max number in a list. Do not use the Math.max Function.
The List will be all positive numbers
*/

let findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49];
//Expect
// 234125

// try reduce with ternary, then?
console.log(findAMax.reduce((acc,num) => {
    return acc < num ? num : acc;
}));

/*
Question #5
At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell
*/

var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
    ognib+=(bingo[i])
    //define state from this line on the third iteration
}
console.log(bingo.length)
//bingo value is "B-I-N-G-O"

//ognib value is "O-G"

// i value is 6. three iterations of i have been 8, then 7, then 6. 6 has just run, it's about to be 5.

/* Question 6

1: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/javascript
2: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/javascript
3: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/javascript

*/
