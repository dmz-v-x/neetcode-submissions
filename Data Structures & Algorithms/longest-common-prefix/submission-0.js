class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(!strs.length) return "";

        let maxLen = Infinity;
        let str = strs[0];

        for(let i = 1; i<strs.length; i++){
            let count = 0;
            for(let j = 0; j<Math.min(str.length, strs[i].length); j++){
                if(str[j] === strs[i][j]){
                    count++;
                }else{
                    break;
                }
            }

            maxLen = Math.min(count, maxLen);
        }

        return str.slice(0, maxLen)
    }
}
