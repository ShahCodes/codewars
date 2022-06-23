// Link To Kata: 8ku https://www.codewars.com/kata/5732b0351eb838d03300101d

// Question:

/* 
Task
Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"
If arr contains elements 5 and 13, function should return:

"It's a black array"
If arr contains neither 5 nor 13, function should return:

"It's a white array"
Examples
blackAndWhite(5,13) should return "It's a fake array"
blackAndWhite([5,13]) should return "It's a black array"
blackAndWhite([5,12]) should return "It's a white array" 
Using string template and ternary operator can make your work easier.
*/

// Solution: 

function blackAndWhite(arr){
  let arrayType = ''
  
  if(!Array.isArray(arr)) {
    arrayType = 'fake'
  }else if(arr.includes(5) && arr.includes(13)) {
    arrayType = 'black'
  }else if(!(arr.includes(5) && arr.includes(13))){
    arrayType = 'white'
  }
  
  return `It's a ${arrayType} array`
  
}
blackAndWhite([5,13])