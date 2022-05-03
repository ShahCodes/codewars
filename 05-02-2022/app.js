// Link To Kata: 8ku https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

// Question:

/* 
Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

sumOfDifferences([2, 1, 10])
Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
*/

// Solution: 


function sumOfDifferences(arr) {
  // #100Devs!!
  arr.sort((a, b)=> b - a)
  let sum = 0
  for(let i = 0; i < arr.length - 1; ++i) {
    sum += arr[i] - arr[i + 1]
  }
  return sum
}

sumOfDifferences([2, 1, 10])
sumOfDifferences([-3, -2, -1])