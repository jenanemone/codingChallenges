#!/usr/bin/env python3

"""From leetcode: Valid Parentheses determines if parentheses, braces and brackets
have been properly closed in a given string."""

"""RESULTS: Runtime: 52 ms, faster than 15.40% of Python3 online submissions for Valid Parentheses.
Memory Usage: 14.5 MB, less than 7.59% of Python3 online submissions for Valid Parentheses."""

def isValid(s: str):
    """isValid function checks the proper placement and closure of ()[]{}
    by adding and removing from a list and checking that the list is empty.
    It further validates that closing does not precede opening."""
    opposites = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    chars = [] # example: ["(",")"]
    ends = []
    try:
        for char in s:
            # Exclude irrelevant characters...
            # does the character appear in the keys of opposites?
            if char in opposites.keys():
                # what will its ending be?
                ending = opposites.get(char)
                # append beginning char to list
                chars.append(char)
                # append ending to ends list for later comparison
                ends.append(ending)
                print(chars)
                print(ends)
            # if it's an ending
            elif char in opposites.values() and char in ends:
                print(ends[-1])
                if ends[-1] == char:
                    chars.pop()
                    ends.pop()
                print(chars)
                print(ends)
            else:
                return False
        if len(chars) < 1 and len(ends) < 1:
            return True
        else:
            return False
            
    except:
        return False

            

str_to_check = input("input a string to check for valid parentheses\n>>>")
print(isValid(str_to_check))
