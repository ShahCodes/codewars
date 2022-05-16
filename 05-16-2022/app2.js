// Link To Kata: 8ku https://www.codewars.com/kata/55225023e1be1ec8bc000390

// Question:

/* 
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

// Solution: 


function greet(name){
  let msg = "Hello, " + name + "!"
  let msgLove = "Hello, my love!"
  if(name === "Johnny") {
    return msgLove
  }else {
    return msg 
  }
}

greet("Johnny")