class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = [];
        let cur = []

        if(s.length === 0){
            return res;
        }

        backtrack(0);

        function backtrack(start){
            //success case
            if(start === s.length){
                res.push([...cur]);
            }


            //to check every partion/starting point
            for(let partition = start; partition < s.length; partition++){
                let currPart = s.slice(start, partition + 1);
                if(checkPalindrome(currPart)){
                    cur.push(currPart);
                    backtrack(partition + 1);
                    cur.pop();
                }
            }
        }

        return res;

        //assume works for now
        function checkPalindrome(str){
            let s2 = str.split('').reverse().join('');

            if(s2 === str){
                return true;
            }else{
                return false;
            }

          
        }

    }
}
