class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let array = new Array(26).fill(0);

        for(let i = 0; i<s.length; i++){
            array[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        for(let i = 0; i<t.length; i++){
            array[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        for(let i = 0; i<array.length; i++){
            if(array[i] !== 0){
                return false;
            }
        }

        return true;
    }
}
