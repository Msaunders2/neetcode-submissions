class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let res = [];
        let curr = [];

        if(digits.length === 0){
            return res;
        }

        let map = new Map();
        map.set(2,["a","b","c"]);
        map.set(3,["d","e","f"]);
        map.set(4,["g","h","i"]);
        map.set(5,["j","k","l"]);
        map.set(6,["m","n","o"]);
        map.set(7,["p","q","r","s"]);
        map.set(8,["t","u","v"]);
        map.set(9,["w","x","y","z"]);

        backtrack(0);

        function backtrack(start){
            //sucess case
            if(start === digits.length){
                res.push([...curr].join(''));
                return;
            }

            let letters = map.get(Number(digits[start]));
            
            //loop through each possible number association
            for(let j = 0; j < letters.length; j++){
                curr.push(letters[j]);
                backtrack(start + 1);
                curr.pop();
            }
        }

        return res;
    }
}
