class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seq = new Set();
        let res = 0;

        let start = 0;
        let end = 0;

        for(let i = 0; i < s.length; i++){
            
            while(seq.has(s[i])){
                seq.delete(s[start]);
                start++;
            }
            
            seq.add(s[i]);
            end++;
            res = Math.max(res, end - start);
        }

        return res;
    }
}
