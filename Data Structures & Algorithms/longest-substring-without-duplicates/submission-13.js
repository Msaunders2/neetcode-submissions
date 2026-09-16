class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let max = 0;
        let charMap = new Map();

        for(let right = 0; right < s.length; right++){
            let currChar = s[right];

            if(charMap.has(currChar)){
                left = Math.max(left,charMap.get(currChar) + 1);
            }

            charMap.set(currChar,right);
            let currMax = right - left + 1;
            max = Math.max(max, currMax);



        }

        return max;

    }
}
