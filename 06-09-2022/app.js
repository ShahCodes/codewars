// Link To Kata: 8ku https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// Question:

/* 
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

// Solution: 

function removeEveryOther(arr){
  let newArr = arr.filter((item, idx)=> ((idx + 1) % 2 !== 0))
  return newArr
}

removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])