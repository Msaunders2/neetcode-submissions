class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let anaMap = new Map();

        for(let char of s){
            if(anaMap.has(char)){
                anaMap.set(char, anaMap.get(char) + 1);
            }else{
                anaMap.set(char, 1)
            }
        }

        for(let char of t){
            if(anaMap.has(char)){
                anaMap.set(char, anaMap.get(char) - 1);
                if(anaMap.get(char) === 0){
                    anaMap.delete(char);
                }
            }else{
                return false;
            }
        }

        if(anaMap.size !== 0){
            return false;
        }else{
            return true;
        }
    }
}
