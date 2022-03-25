// Link To Kata: 8ku https://www.codewars.com/kata/57a429e253ba3381850000fb

// Question:

/* 
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" 
*/

// Solution: 


function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2)
  if(bmi < 18.5) {
    return 'Underweight'
  }else if(bmi < 25.0) {
    return 'Normal'
  }else if(bmi < 30.0) {
    return 'Overweight'
  }else {
    return 'Obese'
  }
}

console.log(bmi(150, 2.57))

