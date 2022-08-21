#!/usr/bin/env python 3

"""
LeetCode Easy: 14: Longest Common Prefix

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
"""

# SOLUTION:::
def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ""
        else:
            s1, s2 = max(strs), min(strs)
            i, j = 0, 0
            while i < len(s1) and i < len(s2) and s1[i] == s2[i]:
                i, j = i + 1, j + 1
            return s1[0:j]