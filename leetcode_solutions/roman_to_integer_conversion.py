#!/usr/bin/env python3

"""From Leetcode, Roman to Integer: change a Roman numeral into an integer.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
"""

import re

# Base Roman numerals
roman_numerals = {"i" : 1, "v" : 5, "x" : 10, "l" : 50, "c" : 100, "d" : 500, "m" : 1000}

# Take a user's input
num_str = input("Enter your Roman numeral and be amazed!\n>>>")
print("You entered \"{}\"".format(num_str))

""" The roman_convert function takes a user-provided string containing a whole number in Roman numeral format and returns it integer format."""
def roman_convert(roman):
    # Ensure case matches dictionary assignments
    roman = roman.lower()
    # Order of appearance dictates whether to add or subtract
    # If i is on the tail, it's additive. If i immediately precedes a larger
    # numeral, then it's subtractive. So.... look backwards a step.
    total = 0
    # Check for a base case
    if len(roman) == 1:
        num = roman_numerals[roman]
        return num
    # Check if preceding value is greater or lesser
    i = 0
    while i < len(roman):
        char1 = roman[i]
        if i < len(roman)-1:
            char2 = roman[i+1]
        else:
            char2 = char1
        val_char1 = roman_numerals[char1]
        val_char2 = roman_numerals[char2]
        if val_char2 > val_char1:
            total -= roman_numerals[char1]
            total += roman_numerals[char2]
            if i < len(roman)-1:
                i += 2
        else:
            total += roman_numerals[char1]
            if i < len(roman):
                i += 1
            else:
                total += roman_numerals[char2]

        
    return total


print(roman_convert(num_str))
