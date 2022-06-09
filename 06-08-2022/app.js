// Link To Kata: 8ku https://www.codewars.com/kata/57f780909f7e8e3183000078

// Question:

/* 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

// Solution: 

function grow(x){
  return x.reduce((a,b)=> a * b, 1)
}

grow([1, 2, 3, 4])