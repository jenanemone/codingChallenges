/* PROBLEM STATEMENT::: 71929. Concatenation of Array
Easy

1281

218

Add to List

Share
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

 

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
 

Constraints:

n == nums.length
1 <= n <= 1000
1 <= nums[i] <= 1000
*/

// SOLUTION:::

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    return nums.concat(nums)
};
  
/* SAMPLE TESTS:::
const assert = require("chai").assert;

describe("Fixed tests", function() {
  it("Testing for test", () => assert.strictEqual(firstNonRepeated("test"), 'e'));
  it("Testing for teeter", () => assert.strictEqual(firstNonRepeated("teeter"), 'r'));
  it("Testing for 1122321235121222", () => assert.strictEqual(firstNonRepeated("1122321235121222"), '5'));
  it("Testing for rend", () => assert.strictEqual(firstNonRepeated("rend"), 'r'));
});  
*/