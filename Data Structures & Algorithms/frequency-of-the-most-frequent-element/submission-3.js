class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
           nums = nums.sort((a, b) => a - b);

        let res = 1;
        let diff = [];

        for (let i = 0; i < nums.length - 1; i++) {
            diff.push([nums[i + 1] - nums[i], i]);
        }

        let left = 0;
        let cost = 0;

        for (let right = 0; right < nums.length; right++) {
            while (
                nums[right] * (right - left + 1) -
                nums.slice(left, right + 1).reduce((a, b) => a + b, 0) > k
            ) {
                left++;
            }

            res = Math.max(res, right - left + 1);
        }

        return res;
    }
}
