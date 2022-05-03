// Link To Kata: 8ku https://www.codewars.com/kata/55a5befdf16499bffb00007b

// Question:

/* 
Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b
*/

// Solution: 


function add(a,b){
  return a + b
}

add(998,1)

function divide(a,b){
  return a / b
}
divide(999,1)

function multiply(a,b){
  return a * b
}
multiply(999,1)

function mod(a,b){
  return a % b
}
mod(999, 1)

function exponent(a,b){
  return Math.pow(a,b)
}
exponent(22,2)
  
function subt(a,b){
  return a - b
}
subt(1000,1)