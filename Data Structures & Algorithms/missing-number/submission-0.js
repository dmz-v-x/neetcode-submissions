class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let result = n;

        for(let i = 0; i<n; i++){
            result ^= i ^ nums[i];
        }

        return result;
    }
}
