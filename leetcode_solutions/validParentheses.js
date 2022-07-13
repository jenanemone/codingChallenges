/* PROBLEM STATEMENT::: LeetCode 20. Valid Parentheses
Easy

14115

657

Add to List

Share
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

// SOLUTION:::

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // check for obvious falses
    //if (s.length % 2 !== 0) return false
    let pairs = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    //create a sequence to push and pop
    let sequence = []
    // iterate the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (!Object.keys(pairs).includes(char) && !Object.values(pairs).includes(char)) {
            console.log(`not either: ${pairs[char]}`)
            continue
        }
        else {
            let opp = pairs[char] // see if there's an opposite (meaning a value in the pairs dictionary)
            let last = sequence[sequence.length - 1] // ultimate in the sequence
            // if opp is undefined, that means it's an ending (won't work for real strings with other chars)
            if (!opp) {
                // if the last element of the sequence is an opener and it has its matching closer, pop
                if (pairs[last] == char) {
                    sequence.pop()
                }
                // if there's an opposite but last isn't the opener, it's not valid
                else {
                    return false
                }
                console.log(`last: ${last}`)
                console.log(sequence)
            }
            // if the character is in the pairs properties, add to sequence
            if (char in pairs) {
                sequence.push(char)
                console.log(`entered if. char ${char} in pairs: ${sequence}`)
            }
        }
    }
    console.log(s, sequence)
    return !sequence.length
};
console.log(isValid("(hello)")) //t
console.log(isValid("({)}")) //f
console.log(isValid("({})")) //t
console.log(isValid(")")) //f
console.log(isValid(")(){}")) //f
console.log(isValid("(})}")) //f


/* CREDIT TO DAVID BUCHAN:::

var isValid = function(s) { 

//init obj with closing values keyed to their closing counterpart
 
const closures = {'(' : ')', '{' : '}', '[' : ']'} 

//init array for holding current element value in array when it does not match value from k/v pair in object 

let current = [] 

//split string argument into array and loop through each element

 s.split('').forEach(e => { 

//check each element against the last element in the 'current' temp array 

e ===closures[current[current.length - 1]] ?

 //if current element matches the value for the key of the last element in the current array, pop the last element off the current array

 current.pop() : 

//push the current element into the current array if it does not match

 current.push(e) }) 

//return boolean of whether the current array is empty. if it is then the values in s are in the right order, if not then there was a mismatched pair 

return current.length === 0}

*/