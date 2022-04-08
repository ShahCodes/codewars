// Link To Kata: 8ku https://www.codewars.com/kata/563e320cee5dddcf77000158

// Question:

/* 
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

// Solution: 


function getAverage(grades){
  let sum = 0
  
  for(let i = 0; i < grades.length; i++) {
    sum = sum + grades[i]
  }
  return Math.floor(sum / grades.length)
}

getAverage([77, 83, 101, 93, 87, 70, 99,])