// Link To Kata: 8ku https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// Question:

/* 
Write a function called repeatStr which repeats the given string string exactly n times.
Examples:
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

// Solution: 


function repeatStr (n, s) {
  return s.repeat(n)
}

repeatStr (10, 'Hey')
