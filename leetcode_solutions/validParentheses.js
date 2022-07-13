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
    if (s.length % 2 !== 0) return false
    let pairs = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    let sequence = []
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        let opp = pairs[char]
        let last = sequence[sequence.length - 1]
        console.log(`char is ${char}, last is ${last}`)
        if (!opp) {
            
            if (pairs[last] == char) {
                sequence.pop()
            }
            else {
                return false
            }
            console.log(`last: ${last}`)
            console.log(sequence)
        }
        if (char in pairs) {
            sequence.push(char)
            console.log(`entered if. char ${char} in pairs: ${sequence}`)
        }
    }
    console.log(s,sequence)
    return !sequence.length
};

console.log(isValid("({)}")) //f
console.log(isValid("({})")) //t
console.log(isValid(")")) //f
console.log(isValid(")(){}")) //f
console.log(isValid("(})}")) //f

