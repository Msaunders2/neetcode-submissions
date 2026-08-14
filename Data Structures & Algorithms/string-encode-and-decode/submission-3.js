class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = [];

        for(let str of strs){
            res.push(str + "`");
        }

        res = res.join('');
        return res;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];

        let left = 0;

        for(let i = 0; i < str.length; i++){
            if(str[i] === "`"){
                res.push(str.substring(left,i));
                left = i + 1;
            }
        }

        return res;

    }
}
