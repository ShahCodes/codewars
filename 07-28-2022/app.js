// Link To Kata: 7ku https://www.codewars.com/kata/5b180e9fedaa564a7000009a

// Question:

/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowercase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/


function solve(s){
  let upper = s.split('').filter(l => l.match(/[A-Z]/)).length
  let lower = s.split('').filter(l => l.match(/[a-z]/)).length
  return lower >= upper ? s.toLowerCase() : s.toUpperCase()
}

solve("CoDE")
