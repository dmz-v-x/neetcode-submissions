class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let array = new Array(2 * nums.length);

        for(let i = 0; i<2*n; i++){
            array[i] = nums[i % n];
        }

        return array;
    }
}
