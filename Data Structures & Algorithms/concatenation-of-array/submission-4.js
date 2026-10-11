class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let index = 0;
        let ans = [];
        for(let i = 0; i<nums.length; i++){
            ans[index] = nums[i];
            index++;
        }
        for(let i = 0; i<nums.length; i++){
            ans[index] = nums[i];
            index++;
        }

        return ans;
    }
}
