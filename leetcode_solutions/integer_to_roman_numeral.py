#!/usr/bin/env python3

"""From Leetcode: take an integer and return a Roman numeral.
Solution is not optimized, only faster than 40% of Python solutions."""



# Base Roman numerals
roman_numerals = {1: "I", 5: "V", 10 : "X", 50 :  "L", 100 : "C", 500 : "D", 1000 : "M", 900 : "CM", 90 : "XC", 9 : "IX", 400 : "CD", 40 : "XL", 4 : "IV"}
# Corresponding important values
values = [1000,900,500,400,100,90,50,40,10,9,5,4,1]

"""make_roman transforms an integer into a Roman numeral string"""
def make_roman(n):
    my_roman = ""
    if n < 1 or n > 3999:
        return "Not a valid Roman numeral"
    digits_rev = [d for d in str(n)]
    digits = digits_rev[::-1]   
    digits = [int(dig) for dig in digits]
    print(digits)

    # Check if it's a value in the dictionary
    if n in values:
        my_roman = roman_numerals[n]
        return my_roman
    
    if len(digits) == 1:
        ones = digits[0]
        print("ones is " + str(ones))
        if 5 <= ones < 9:
            my_roman = roman_numerals[5]
            print("my_roman ge 5 " + my_roman)
            more_ones = ones - 5
            print("more_ones is " + str(more_ones))
            my_roman = my_roman + roman_numerals[1]*more_ones
            print("my_roman add to the 5 " + my_roman)
        elif 1 <= ones < 4:
            my_roman = roman_numerals[1]*ones
    elif len(digits) == 2:
        ones = digits[0]
        tens = digits[1]
        print("ones is " + str(ones) + " and tens is " + str(tens))
        if tens == 9:
            my_roman = roman_numerals[90]
            print("my_roman is at least 90: " + str(my_roman))
        if 5 <= tens < 9:
            more_tens = tens - 5
            print('more_tens is ' + str(more_tens))
            my_roman = roman_numerals[50] + more_tens*roman_numerals[10]
        elif 4 == tens:
            my_roman = roman_numerals[40]
        elif 1 <= tens < 4:
            my_roman = roman_numerals[10]*tens
        # Still gotta do the ones place!
        if 5 <= ones < 9:
            my_roman = my_roman + roman_numerals[5]
            more_ones = ones - 5
            my_roman = my_roman + roman_numerals[1]*more_ones
        elif 4 == ones:
            my_roman = my_roman + roman_numerals[4]
        elif 1 <= ones < 4:
            my_roman = my_roman + roman_numerals[1]*ones
        elif ones == 9:
            my_roman = my_roman + roman_numerals[9]
    elif len(digits) == 3:
        hunds = digits[2]
        tens = digits[1]
        ones = digits[0]
        if hunds == 9:
            my_roman = roman_numerals[900]
        elif 5 <= hunds < 9:
            my_roman = roman_numerals[500]
            more_hunds = hunds - 5
            my_roman = my_roman + more_hunds*roman_numerals[100]
        elif hunds == 4:
            my_roman = roman_numerals[400]
        elif 1 <= hunds < 4:
            my_roman = roman_numerals[100]*hunds
        # And now tens
        if tens == 9:
            my_roman = my_roman + roman_numerals[90]
        elif 5 <= tens < 9:
            my_roman = my_roman + roman_numerals[50]
            more_tens = tens - 5
            my_roman = my_roman + more_tens*roman_numerals[10]
        elif tens == 4:
            my_roman = my_roman + roman_numerals[40]
        elif 1 <= tens < 4:
            my_roman = my_roman + roman_numerals[10]*tens
        #And ones
        if ones == 9:
            my_roman = my_roman + roman_numerals[9]
        elif 5 <= ones < 9:
            my_roman = my_roman + roman_numerals[5]
            more_ones = ones - 5
            my_roman = my_roman + roman_numerals[1]*more_ones
        elif ones == 4:
            my_roman = my_roman + roman_numerals[4]
        elif 1 <= ones < 4:
            my_roman = my_roman + roman_numerals[1]*ones
    elif len(digits) == 4:
        thous = digits[3]
        hunds = digits[2]
        tens = digits[1]
        ones = digits[0]
        if thous > 3:
            return "Not a valid Roman numeral"
        else:
            my_roman = roman_numerals[1000]*thous
        # Do hundreds
        if hunds == 9:
            my_roman = my_roman + roman_numerals[900]
        elif 5 <= hunds < 9:
            my_roman = my_roman + roman_numerals[500]
            more_hunds = hunds - 5
            my_roman = my_roman + more_hunds*roman_numerals[100]
        elif hunds == 4:
            my_roman = my_roman + roman_numerals[400]
        elif 1 <= hunds < 4:
            my_roman = my_roman + roman_numerals[100]*hunds
        # And now tens
        if tens == 9:
            my_roman = my_roman + roman_numerals[90]
        elif 5 <= tens < 9:
            my_roman = my_roman + roman_numerals[50]
            more_tens = tens - 5
            my_roman = my_roman + more_tens*roman_numerals[10]
        elif tens == 4:
            my_roman = my_roman + roman_numerals[40]
        elif 1 <= tens < 4:
            my_roman = my_roman + roman_numerals[10]*tens
        #And ones
        if ones == 9:
            my_roman = my_roman + roman_numerals[9]
        elif 5 <= ones < 9:
            my_roman = my_roman + roman_numerals[5]
            more_ones = ones - 5
            my_roman = my_roman + roman_numerals[1]*more_ones
        elif ones == 4:
            my_roman = my_roman + roman_numerals[4]
        elif 1 <= ones < 4:
            my_roman = my_roman + roman_numerals[1]*ones  

        


    return my_roman

print("Enter an integer and get a Roman numeral!")
nt = int(input())
print(make_roman(nt))