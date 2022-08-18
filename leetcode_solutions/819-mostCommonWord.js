/* PROBLEM STATEMENT::: LeetCode Easy 819. Most Common Word

https://leetcode.com/problems/most-common-word/

Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

 

Example 1:

Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
Example 2:

Input: paragraph = "a.", banned = []
Output: "a"
 

Constraints:

1 <= paragraph.length <= 1000
paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
0 <= banned.length <= 100
1 <= banned[i].length <= 10
banned[i] consists of only lowercase English letters.
*/

// SOLUTION:::

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    let dict = {}
    let common = ["",0]
    let words = paragraph.toLowerCase().split(/[ !?',;.]/g).filter(word => word != "").forEach(word => dict[word] ? dict[word]++ : dict[word] = 1);
    for (let prop of Object.keys(dict) ) {
        if (dict[prop] > common[1] && !banned.includes(prop)) {
            common[0] = prop
            common[1] = dict[prop]
        } 
    }
    return common[0]
};
  
/* SAMPLE TESTS:::
  
*/