class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let set = new Set(nums);
        let i = 0;
        for(const key of set){
            nums[i] = key;
            i++;
        }
        return i;
    }
}
