// Link To Kata: 8ku https://www.codewars.com/kata/56b1f01c247c01db92000076

// Question:

/* 
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!
*/

// Solution: 

function doubleChar(str) {
  return str.split("").map(x => x + x).join("")
}

doubleChar("999")