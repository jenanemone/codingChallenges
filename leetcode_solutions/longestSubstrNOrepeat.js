/* PROBLEM STATEMENT::: Leetcode 3. Longest Substring Without Repeating Characters
Medium

26989

1170

Add to List

Share
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

// SOLUTION:::

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let sub = "";
    for (let i = 0; i < s.length; i++) {
        let index = sub.indexOf(s[i]) 
            if (index > -1) {
                sub = sub.substring(index + 1) + s[i]
            }
            else {
                sub += s[i]
            }
            max = Math.max(sub.length, max)
        }
    return max
    }
    
  
/* SAMPLE TESTS:::

*/