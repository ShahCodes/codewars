// Link To Kata: 8ku https://www.codewars.com/kata/57a37f3cbb99449513000cd8

// Question:

/* 
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/

// Solution: 


function getNumberFromString(s) {
    return Number(s.match(/\d/g).join(''))
}

getNumberFromString('hell999')