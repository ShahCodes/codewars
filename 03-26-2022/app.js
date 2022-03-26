// Link To Kata: 8ku https://www.codewars.com/kata/53369039d7ab3ac506000467

// Question:

/* 
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

// Solution: 


function boolToWord(bool){
  const true1 = 'Yes'
  const false1 = 'No'
  
  if(bool === true) {
    return true1
  }else if(bool === false) {
    return false1
  }
}

boolToWord(true)
