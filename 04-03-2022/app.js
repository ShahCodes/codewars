// Link To Kata: 8ku https://www.codewars.com/kata/5715eaedb436cf5606000381

// Question:

/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

// Solution: 


function positiveSum(arr) {
  let sum  = 0
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      sum += arr[i]
    }
  }
  return sum
}

positiveSum([1,-4,7,12, -45, -2, 43, 6])