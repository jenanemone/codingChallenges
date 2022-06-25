#!/usr/bin/env python3

"""Leetcode Palindrome Number: given an integer, determine if the number is a palindrome without converting it to a string."""

# Test cases
from typing import final


test1 = 404
test2 = 3456601
test3 = -909
test4 = 156156161651616546516516515614514515616516516516512352454524156416654154655142655142565142565142565145265142565145651345615453651435651435651435651435651435651435651435514355613456514563153561564356514255142565143565143556142551534155341655341634551345514351655436145235153415453661354615356416354651345661345651453661345661435661435661435661435661345661345661356461435661435661435661543616435661354616453616354661453661345616435661534661345661354616345661365461356461345661435661345616356165463164356164356614356614356614356614356614356614356164356613456341656134656134566143566143566143566143561435614365634153646153461345345156435513546515341545315534155435145315453154351545354535154315345154531564531543515
test5 = 66400466
test6 = 20000

# The function will cut the integer into groups by floor dividing by 10.

def isPalindrome(n):
    print("*****************************")
    # Negative numbers are excluded
    if n < 0:
        return "Not a palindrome"
    digits = [] # Store digits in a list to examine order
    
    # Split the integer into its component digits to count nth 
    c = 0
    num = n
    if 0 <= n < 10:
        return "Palindrome from return"
    else:
        while n > 0:
            n = n // 10
            c += 1
        print("count of digits is " + str(c))
    comp_steps = c // 2
    print("Number of minimum comparision steps needed is " + str(comp_steps))
    
    # Build the list of digits - removed!
    # Optimization: Build and review simultaneously
    #try:
    #    while num > 0:
    #        digit = num % 10
    #        digits.insert(0,digit)
     #       num = num // 10
            #print(digits)
    #except:
     #   print("building digits issue")
    
    # Testing principle of list slicing
    # New logic
    
    try:
        while num > 0 and comp_steps >= 0:
            last_digit = num % 10
            print("last digit is " + str(last_digit))
            first_digit = num // 10**(c-1)
            print("first digit is " + str(first_digit))
            if first_digit != last_digit:
                print("Not a palindrome - inside new while loop")
                return "Not a palindrome!!"
            else:
                print("Examining further")
                divisor = first_digit*(10**(c-1))
                print("divisor is " + str(divisor))
                num = num % 10**(c-1)
                num //= 10
                print("term is " + str(num))
                comp_steps -= 1
                c -= 2
        return "Palindrome"
    except:
        print("issue with new style first and last examination")
    
    #comp_steps = len(digits) // 2
    #print("Steps of comparison " + str(comp_steps))
    #final_index = len(digits) - 1
    #print("final index is " + str(final_index))
    
    # And now for something not-at-all completely different!

    #try:
     #   for i in range(0,comp_steps):
    #        if not digits[i] == digits[final_index]:
     #           return "Not a palindrome"
            #elif digits[i] == digits[final_index]:
            #    return "Found a palindrome"
    #        else:
     #           final_index -= 1
    #        return "Found a palindrome"
    #except:
     #   print("final examination failed")
        


#print("Checking if " + str(test1) + " is a palindrome...")
#print(isPalindrome(test1))
print("Checking if " + str(test2) + " is a palindrome...")
print(isPalindrome(test2))
print("Checking if " + str(test3) + " is a palindrome...")
print(isPalindrome(test3))
print("Checking if " + str(test4) + " is a palindrome...")
print(isPalindrome(test4))
print("Checking if " + str(test5) + " is a palindrome...")
print(isPalindrome(test5))
print("Checking if " + str(test6) + " is a palindrome...")
print(isPalindrome(test6))
