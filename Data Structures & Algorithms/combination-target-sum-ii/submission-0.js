class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = [];
        let curr = [];
        candidates = candidates.sort((a,b) => a-b);
        //base case
        if(candidates.length === 0 || target === 0){
            return res;
        }

        backtrack(0,0);

        function backtrack(start, currSum){
            //base case/ good case
            if(currSum === target){
                res.push([...curr]);
            }

            //for choice in choices
            for(let i = start; i < candidates.length; i++){

                //violating case
                if(currSum > target){
                    return;
                }


                if(i > start && candidates[i] === candidates[i-1]){
                    continue;
                }

                //make choice
                curr.push(candidates[i]);
                currSum += candidates[i];

                //backtrack
                backtrack(i + 1, currSum);

                //undo choice
                curr.pop();
                currSum -= candidates[i];
            }

        }

        return res;
    }
}
