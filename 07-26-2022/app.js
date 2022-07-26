// Link To Kata: 7ku https://www.codewars.com/kata/5901f361927288d961000013

// Question:

/*
Calculate the product of all elements in an array.

If the array is null or is empty, the function should return null.

* Returns product of all numbers in a numeric array.
* Returns null if param is null or array is empty.
* @param {Array} values - The array containing the items.
*/


function product(values) {
  if(values === undefined || values === null || values.length < 1) {
    return null
  }else {
    return values.reduce((acc, c) => acc * c, 1)
  }
}

product([5, 4, 1, 3, 9]) // 540

