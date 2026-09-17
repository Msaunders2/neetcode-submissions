class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let targetMap = new Map();
        let window = new Map();

        for(let char of s1){
            if(!targetMap.has(char)){
                targetMap.set(char, 1);
            }else{
                targetMap.set(char, (targetMap.get(char) + 1));
            }
        }

        let start = 0;

        for(let end = 0; end < s2.length; end++){
            if(!window.has(s2[end])){
                window.set(s2[end], 1);
            }else{
                window.set(s2[end], (window.get(s2[end]) + 1));
            }

            if(end - start + 1 > s1.length){
                window.set(s2[start], window.get(s2[start]) - 1);
                start++;
            }

            if(end - start + 1 === s1.length){
                let match = true;

                for(let [key,val] of targetMap){
                    if(window.get(key) !== val){
                        match = false;
                    }
                }

                if(match){
                    return true;
                }
            }

        }

        return false;

    }
}
