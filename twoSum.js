/* PROBLEM STATEMENT::: (Andre Assignment #2) Two Sum (as described on LeetCode)
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

// SOLUTION:::

function twoSum(arr,target) {
    /* 
    Takes in an array and a target integer.
    Returns an array containing the indices of the two that sum up to the target
    e.g. [-3,6,-2,14] target 3 returns [0,1] 

    create an object to contain index paired with element
    if difference between target and element exists in the map, return the index
    of that element, plus the current target

    */
    let map = {}
    let answer
    arr.forEach((num,i) => {
        let diff = target - num
        if (map.hasOwnProperty(diff)) {
            answer = [map[diff],i]
        }
        else {
            map[num] = i
        }
    })
    return answer

}
  
/* SAMPLE TESTS:::
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] 
*/
console.log(twoSum([2,7,11,15],9));
