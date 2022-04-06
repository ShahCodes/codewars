// Link To Kata: 8ku https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// Question:

/* 
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

// Solution: 


function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, c)=> acc + c)
}

arrayPlusArray([5, 7, 9], [4,53,34])