class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t){
        let needMap = new Map();
     
        // Count required characters
        for (let char of t) {
            needMap.set(char, (needMap.get(char) || 0) + 1);
        }

        let windowMap = new Map();

        let start = 0;
        let have = 0;
        let need = needMap.size;

        let minLen = Infinity;
        let result = "";

        for (let end = 0; end < s.length; end++) {
            // Add character to window
            let char = s[end];
            windowMap.set(char, (windowMap.get(char) || 0) + 1);

            // If this character requirement is now satisfied
            if (needMap.has(char) && windowMap.get(char) === needMap.get(char)) {
                have++;
            }

            // Shrink while window is valid
            while (have === need) {

                // Update minimum window
                if (end - start + 1 < minLen) {
                    minLen = end - start + 1;
                    result = s.substring(start, end + 1);
                }

                // Remove left character
                let leftChar = s[start];
                windowMap.set(leftChar, windowMap.get(leftChar) - 1);

                // If removing breaks a requirement
                if (needMap.has(leftChar) && windowMap.get(leftChar) < needMap.get(leftChar)) {
                    have--;
                }

                start++;
            }
            
        }
        return result;
    }
}

