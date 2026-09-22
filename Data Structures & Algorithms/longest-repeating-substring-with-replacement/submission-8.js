class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        //(key: char, val: freqCount
        let maxFreq = 0;
        let res = 0;
        let start = 0;

        for(let end = 0; end < s.length; end++){
            if(!map.has(s[end])){
                map.set(s[end], 1);
            }else{
                map.set(s[end], map.get(s[end]) + 1);
            }

            maxFreq = Math.max(maxFreq, map.get(s[end]));
            let windowLen = end - start + 1

            //window invalid case
            while(windowLen - maxFreq > k){
                map.set(s[start], map.get(s[start]) - 1);
                start++;
                windowLen = end - start + 1;
            }

            res = Math.max(windowLen,res);
        }

        return res;
    }
}
