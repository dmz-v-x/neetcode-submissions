class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(!strs.length) return "";
        strs.sort();
        let start = strs[0];
        let end = strs[strs.length - 1];

        let i = 0;
        let count = 0;


        while((i < start.length) && (i < end.length) && start[i] === end[i]){
            count++;
            i++;
        }

        return start.slice(0, count);
    }
}
