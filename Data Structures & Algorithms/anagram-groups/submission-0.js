class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let strg of strs){
            let strg2 = strg.split('').sort().join('');
            if(map.has(strg2)){
                map.get(strg2).push(strg);
            }else{
                map.set(strg2,[]);
                map.get(strg2).push(strg);
            }

        }

        return [...map.values()];
    }
}
