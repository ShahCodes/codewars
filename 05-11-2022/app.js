// Link To Kata: 8ku https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// Question:

/* 
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// Solution: 


function find_average(array) {
  let findAvg = array.reduce((acc, c)=> acc + c, 0)
  let avg = findAvg / array.length 
  if(array == '') {
    return 0
  }else {
    return avg
  }
}

console.log(find_average([5,9,8,6]))