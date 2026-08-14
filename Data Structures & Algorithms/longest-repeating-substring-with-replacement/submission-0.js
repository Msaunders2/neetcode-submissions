class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let maxFreq = 0;

        let start = 0;
        let end = 0;
        let res = 0;

        for(let i = 0; i < s.length; i++){
            map.set(s[i], (map.get(s[i]) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(s[i]));
            end++;

            while ((end - start) - maxFreq > k) {
                map.set(s[start], map.get(s[start]) - 1);
                start++;
            }

            res = Math.max(res, end - start);
        }
        return res;
    }

}
