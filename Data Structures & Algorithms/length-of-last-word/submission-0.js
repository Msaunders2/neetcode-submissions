class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let words = s.split(" ");
        console.log(words);

        let i = words.length - 1;
        while(words[i].length === 0){
            i--;
        }

        return words[i].length;
    }
}
