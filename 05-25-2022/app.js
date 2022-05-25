// Link To Kata: 8ku https://www.codewars.com/kata/53af2b8861023f1d88000832

// Question:

/* 
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

// Solution: 

function areYouPlayingBanjo(name) {
  let nameCheck = name.charAt(0)
  if(nameCheck === 'r' || nameCheck === 'R') {
    return `${name} plays banjo`
  }else {
    return `${name} does not play banjo`
  }
}

areYouPlayingBanjo('Ringo')