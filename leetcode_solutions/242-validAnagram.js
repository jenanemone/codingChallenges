/* PROBLEM STATEMENT::: LeetCode 242: Valid Anagram

https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/

// SOLUTION:::
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    return s.split("").sort().join("") == t.split("").sort().join("")
};

var isAnagram = function(s, t) {
    const map = {};
    s.split('').forEach(char => {
      map[char] = map[char] ? map[char] + 1 : 1;
    });
    
    t.split('').forEach(char => { 
      map[char] = map[char] ? map[char] - 1 : 1;
    });
    
    const result = Object.values(map).reduce((acc, iter) => acc + iter);
    
    return !result;
  };