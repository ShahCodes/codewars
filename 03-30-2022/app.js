// Link To Kata: 8ku https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

// Question:

/* 
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

// Solution: 


function invert(array) {
  return array.map(num => {
    return num * -1
  })
}

invert([-1,2,-3,4,-5,6,7,-8])