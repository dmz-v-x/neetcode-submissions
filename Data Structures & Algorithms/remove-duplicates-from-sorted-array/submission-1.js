class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let index = 1;
        for(let i = 1; i<nums.length; i++){
            if(nums[i] !== nums[index - 1]){
                nums[index] = nums[i];
                index++;
            }
        }
        return index;
    }
}
