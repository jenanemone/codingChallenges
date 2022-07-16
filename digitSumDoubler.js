/* PROBLEM STATEMENT::: (From Poornima PK)
Given a number(N=14), find the number whose sum of digits is equal to double the sum of digits of N.
For Eg: if N = 14, result is 19, explanation: 1+4 = 5, 5 * 2 = 10, 1+9 = 10. 
*/

/* PREP:::
params: pos int < 500
return: int whose digits sum up to twice the given number
eg. 14 => 19
*/

// SOLUTION:::

const digitSum = (n) => {
    // quick n dirty to turn into string and split
    let s = n.toString() 
    let a = s.split("").map(x => +x)
     // add em all up
    let sum = a.reduce((curr,total) => curr + total,0)
    let doubleSum = 2 * sum 
    // smallest number whose digits equals double sum will have 9 as the final digit(s), and a smaller number in the front
    return (doubleSum % 9 + 1) * Math.pow(10, parseInt(doubleSum / 9, 10)) - 1
}
  
/* SAMPLE TESTS:::

*/

console.log(digitSum(14))
console.log(digitSum(408))
