class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        s1 = s1.split('').sort().join('');

        let start = 0;
        let end = s1.length;

        while(end <= s2.length){
            if(s1 === s2.substring(start,end).split('').sort().join('')){
                return true;
            }
            start++;
            end++;
        }
        return false;
    }

}
