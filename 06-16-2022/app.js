// Link To Kata: 7ku https://www.codewars.com/kata/62a611067274990047f431a8

// Question:

/* 
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!
*/

// Solution: 

function alternate(n, firstValue, secondValue){
  let arr = [];
  for (i = 0; i < n; i++) {
    if (!(i % 2)) {
      arr.push(firstValue)
    } else {
      arr.push(secondValue)
    }
  } 
  return arr;
}

alternate(5, true, false)