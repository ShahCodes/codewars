// Link To Kata: 8ku https://www.codewars.com/kata/57cc975ed542d3148f00015b

// Question:

/* 
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

// Solution: 

function check(a, x) {
  return a.includes(x) ? true : false
}

console.log(check([999, 10], 999))
