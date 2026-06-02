class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let arr = s.split('');
        let start = 0;
        let end = arr.length-1;

        function isNotAlphaNumeric(s){
            return /[^a-zA-Z0-9]/i.test(s);
        }

        while(start < end){

            while(start < end && isNotAlphaNumeric(arr[start])){
                start++;
            }

            while(start < end && isNotAlphaNumeric(arr[end])){
                end--;
            }

            if(arr[start].toLowerCase() !== arr[end].toLowerCase()){
                return false;
            }

            start++;
            end--;
        }
        return true;
    }
}
