class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        let asciiArray = new Array(256).fill(0);

        for(let i = 0; i<s.length; i++){
            asciiArray[s.charCodeAt(i)]++;
        }

        for(let i = 0; i<t.length; i++){
            asciiArray[t.charCodeAt(i)]--;
        }

        for(let i = 0; i<asciiArray.length; i++){
            if(asciiArray[i] !== 0){
                return false;
            }
        }

        return true;
    }
}
