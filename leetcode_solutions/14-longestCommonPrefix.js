/* PROBLEM STATEMENT::: LeetCode Easy: 14: Longest Common Prefix

https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

// SOLUTION:::

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let sLengths = strs.map(str => str.length)
    let maxLength = Math.max(...sLengths);
    
    while (maxLength >= 0) {
        let s = strs[0].slice(0,maxLength);
        let arr = strs.filter(word => {
            return word.slice(0,maxLength) == s ? word : null
        });
        if ( arr.length === strs.length ) {
            return s;
        } else {
            maxLength--;      
        };
    };
    return "";
};

// someone else's faster code
var longestCommonPrefix = function (strs) {
    let possible = strs[0];
  
    for (i = 1; i < strs.length; i++) {
  
      while (strs[i].indexOf(possible) !== 0) {
        possible = possible.slice(0, -1);
      }
    }
    return possible;
  };