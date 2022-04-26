// Link To Kata: 8ku https://www.codewars.com/kata/57a5015d72292ddeb8000b31

// Question:

/* 
Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false
*/

// Solution: 


function isPalindrome(str) {
    let string = str.toString()

    if(string === string.split('').reverse().join('')) {
    return true
    }else {
    return false
    }
}

isPalindrome(12321)