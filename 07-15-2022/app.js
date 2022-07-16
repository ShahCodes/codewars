// Link To Kata: 7ku https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Question:

/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

// Solution: 

function findShort(s){
  let check = s.split(' ').reduce((word, currentWord) => {
    return currentWord.length < word.length ? currentWord : word
  })
  return check.length
}

findShort("Let's travel abroad shall we")