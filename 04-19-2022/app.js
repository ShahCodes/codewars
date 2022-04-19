// Link To Kata: 8ku https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Question:

/* 
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// Solution: 


function solution(str){
    let reversed = str.split("").reverse().join("")
    return reversed
}

solution('world')