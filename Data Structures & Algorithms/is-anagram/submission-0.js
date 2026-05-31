class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let sMap = new Map();
        let tMap = new Map();

        for(let i = 0; i<s.length; i++){
            sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
        }

        for(let i = 0; i<t.length; i++){
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
        }

        for(let i = 0; i<s.length; i++){
            if(sMap.get(s[i]) !== tMap.get(s[i])){
                return false;
            }else{
                sMap.delete(s[i]);
                tMap.delete(s[i]);
            }
        }

        return sMap.size === tMap.size;
    }
}
