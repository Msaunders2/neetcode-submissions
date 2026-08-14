class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let anagramMap = new Map();

        for(let char of s){
            anagramMap.set(char,(anagramMap.get(char)|| 0) + 1);
        }

        for(let char of t){
            if(anagramMap.has(char)){
                anagramMap.set(char,anagramMap.get(char)- 1);
            }else{
                return false;
            }
        }

        for(let vals of anagramMap.values()){
            if(vals !== 0){
                return false;
            }
        }

        return true;
    }
}
