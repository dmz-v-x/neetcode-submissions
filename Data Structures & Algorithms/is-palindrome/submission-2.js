class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        let start = 0;
        let end = cleaned.length - 1;

        while(start < end){
            if(cleaned[start] !== cleaned[end]){
                return false;
            }

            start++;
            end--;
        }

        return true;
    }
}
