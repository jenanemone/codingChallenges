#!/usr/bin/env python3

"""From Leetcode.com: Number Complement.
Given an integer num, return its complement.
The complement requires that an integer is 
turned into binary representation, then each 1 and 0 is flipped to the opposite, and that sequence is then returned as an integer.

Result Accepted: Runtime: 50 ms, faster than 5.83% of Python3 online submissions for Number Complement.
Memory Usage: 14.2 MB, less than 69.50% of Python3 online submissions for Number Complement."""

"""Step 1: turn an integer into a binary string with modulo and division by 2. Store each digit in a list."""

def calc_complement(i):
    bin_array = []
    # generate an array of binary digits in backwards order
    while i >= 0:
        rem = int(i % 2) 
        bin_array.append(rem)
        i = int(i/2)
        if i == 0:
            break
    """Step 2: swap out the zeroes and ones in the list.
    Step 3: step through the swapped list and add up the values of each 1 or 0 multiplied by 2 raised to the power of the index itself."""
    # the new list is the binary complement
    bin_comp = []
    for index,digit in enumerate(bin_array):
        if digit == 0:
            bin_comp.append(1)
        elif digit == 1:
            bin_comp.append(0)
        else:
            print("Not a binary digit")
    # change that binary into integer
    final_integer = 0
    for index,digit in enumerate(bin_comp):
        value = digit * (2**index)
        final_integer += value
    return final_integer

print(calc_complement(int(400)))