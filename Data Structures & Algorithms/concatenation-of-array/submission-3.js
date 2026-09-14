class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let arr = new Array(2 * nums.length);

        for(let i = 0; i<arr.length; i++){
            arr[i] = nums[i % nums.length];
        }
        return arr;
    }
}
