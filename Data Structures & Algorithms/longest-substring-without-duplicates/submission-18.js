class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map();
        let res = 0;
        let currLen = 0

        let start = 0;
        let end = 0;

        while(start <= end && end < s.length){
            if(!map.has(s[end]) || map.get(s[end]) < start){
                map.set(s[end], end);
                end++;
                currLen++;
                res = Math.max(res, currLen);
            }else{
                start = Math.max(start, map.get(s[end]) + 1);
                map.set(s[end], end);
                end++;
                currLen = end - start;
            }
        }

        return res;
    }
}
