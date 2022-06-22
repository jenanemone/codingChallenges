/* PROBLEM STATEMENT::: (Andre Assignment #1) Reverse an Array
Swap out an array
*/

// SOLUTION:::

function reversArray(arr) {
    /* 
    take in an array arr
    return an array in reverse order
    eg ['first', 'second', 'third', 'fourth'] => ['fourth','third','second','first']
    eg [1,2,3,4,5] => [5,4,3,2,1]

    iterate through half the array and assign a temp variable, then swap out the two
    */
   let temp;
   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[arr.length - 1 - i] // temp is last one that hasn't been swapped
    arr[arr.length - 1 - i] = arr[i] // assign first to last position
    arr[i] = temp // assign first to temp
   }
   return arr
}
  
/* SAMPLE TESTS:::
 
*/

console.log(reversArray([1,2,3,4,5]));
console.log(reversArray(['six','five','four','three','two','one']));