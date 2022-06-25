#!/usr/bin/env python3

"""Leetcode problem "Two Sum" : Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

From Youtube solution using HashMap. This one is accepted by Leetcode but is not particularly speedy... perhaps creating an array or tuples and then sorting, doing binary search will be faster."""

test1 = [2,7,11,15]
targ1 = 9

test2 = [3,2,4]
targ2 = 6

test3 = [3,3]
targ3 = 6

test4 = [3,2,3]
targ4 = 6

test5 = [-1,3,5,8,30]
targ5 = 7

test6 = [-1,3,5,8,30]
targ6 = 8

def two_sum(target,nums):
    mapped = {}

    for i,n in enumerate(nums):
        diff = target - n
        print("diff is " + str(diff) + ", target is " + str(target) + " and n is " + str(n))
        if diff in mapped:
            return [mapped[diff],i]
        mapped[n] = i
        print("mapped is " + str(n) + " and its index is " + str(i))

print("Evaluating test1, target is " + str(targ1) + " and list is " + str(test1))     
print(two_sum(9,test1))
print("Evaluating test2, target is " + str(targ2) + " and list is " + str(test2)) 
print(two_sum(6,test2))
print("Evaluating test3, target is " + str(targ3) + " and list is " + str(test3)) 
print(two_sum(6,test3))
print("Evaluating test4, target is " + str(targ4) + " and list is " + str(test4)) 
print(two_sum(6,test4))
print("Evaluating test5, target is " + str(targ5) + " and list is " + str(test5)) 
print(two_sum(targ5,test5))
print("Evaluating test6, target is " + str(targ6) + " and list is " + str(test6)) 
print(two_sum(targ6,test6))