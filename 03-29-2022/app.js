// Link To Kata: 8ku https://www.codewars.com/kata/568dcc3c7f12767a62000038

// Question:

/* 
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/

// Solution: 


function setAlarm(employed, vacation){
  
  if(employed === true && vacation === true) {
    return false
  }else if(employed === false && vacation === false) {
    return false
  }else if(employed === true){
    return true
  }else if(vacation === true) {
    return false
  }
}

setAlarm(true, false)