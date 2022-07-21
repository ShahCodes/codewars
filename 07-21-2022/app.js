// Link To Kata: 7ku https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

// Question:

/* 
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// Solution: 

function solution(str, ending){
  const strLength = str.length
  const endingLength = ending.length
  const subString = str.substring(strLength - endingLength)
  return subString === ending
}

solution('hey', 'ey')