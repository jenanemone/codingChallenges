#!/usr/bin/env python3

"""From leetcode.com, find the power (max number of consecutive, repeated letters) of a string of all lower-case English letters."""

import re

# Test cases
test1 = "leetcode"
test2 = "aabbccdddeeeeefa"
test3 = "tourist"
test4 = "bacacccbba" 


def maxPower(s):
    temp = ""
    count = 1
    highest = 1
    for char in s:
        if char == temp:
            count += 1
            if count > highest:
                highest = count
        else: 
            print("No match")
            count = 1            
        temp = char
    return highest


print(maxPower(test4))
