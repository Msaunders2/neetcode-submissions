class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    addSpaces(s, spaces) {
        let res = [];
        let spaceSet = new Set();
        
        for(let spaceInd of spaces){
            spaceSet.add(spaceInd);
        }

        let space = " ";

        s = s.split("");

        for(let i = 0; i < s.length; i++){
            if(spaceSet.has(i)){
                res.push(space);
            }

            res.push(s[i]);
        }

        return res.join("");
    }
}
