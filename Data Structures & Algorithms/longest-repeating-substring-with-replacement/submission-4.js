class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let res = 0; 
        let start = 0;
        let maxFreq = 0;

        for(let end = 0; end < s.length; end++){
            let char = s[end];
            if(map.has(char)){
                map.set(char,map.get(char) + 1);
            }else{
                map.set(char,1);
            }

            maxFreq = Math.max(maxFreq, map.get(char));

            while((end - start + 1) - maxFreq > k ){
                map.set(s[start],map.get(s[start]) - 1);
                start++;
                
            }

            res = Math.max(res, (end - start) + 1);
        }

        return res;

    }
}
