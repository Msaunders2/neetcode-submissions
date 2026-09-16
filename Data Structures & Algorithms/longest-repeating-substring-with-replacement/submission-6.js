class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let map = new Map();
        let maxFreq = 0;
        let res = 0;

        for(let right = 0; right < s.length; right++){
            let currChar = s[right];

            if(map.has(currChar)){
                map.set(currChar, map.get(currChar) + 1);
            }else{
                map.set(currChar, 1);
            }

            // maxFreq = Math.max(maxFreq,map.get(currChar));
            maxFreq = Math.max(...map.values());

            while(right - left + 1 - maxFreq > k){
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }

            res = Math.max(res, right - left + 1);
        }

        return res;
    }
}
