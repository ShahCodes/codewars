// Link To Kata: 8ku https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// Question:

/* 
Write a function to split a string and convert it into an array of words.

Examples (Input -> Output):
* "Robin Singh" ==> ["Robin", "Singh"]

* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// Solution: 


function stringToArray(string){
    return string.split(' ')
}

stringToArray('This Is Some Text')