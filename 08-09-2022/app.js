// Link To Kata: 7ku https://www.codewars.com/kata/514a6336889283a3d2000001

// Question:

/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/


function getEvenNumbers(numbersArray){
  return numbersArray.filter(num => num % 2 === 0)
}

getEvenNumbers([1,2,3,6,8,10])
