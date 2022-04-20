// Link To Kata: 8ku https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// Question:

/* 
Simple, remove the spaces from the string, then return the resultant string.
*/

// Solution: 


function noSpace(x){
    // #100Devs!!
    return x.replace(/\s+/g, '')
}

noSpace('this is some text!')