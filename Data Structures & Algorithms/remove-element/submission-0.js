class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let array = [];
        for(let i = 0; i<nums.length; i++){
            if(nums[i] !== val){
                array.push(nums[i]);
            }
        }

        for(let i = 0; i<array.length; i++){
            nums[i] = array[i];
        }

        return array.length;
    }
}
