class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let uniSet = new Set();
        let res = 0;
        let left = 0;

        for(let right = 0; right < s.length; right++){
            while(uniSet.has(s[right])){
                uniSet.delete(s[left]);
                left++;
        
            }

            uniSet.add(s[right]);
            res = Math.max(res,uniSet.size);
        }
        return res; 
    }
}
