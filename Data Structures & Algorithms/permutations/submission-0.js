class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        //first use 1st el and try everyother element combination with that
        //do the same for the next element
        //so on

        //recursive approach/backtracking 
        //res[]
        //currPath[]
        //for loop
            //combo(i);

        //backtrack function
            //base case
            //if i >= nums.length
                //res.push(currPath)
                //return
            
            //currPath.push(nums[i]);
            //combo(i+1) 

        let res = [];
        let currPath = [];
        let visited = [];

        // for(let i = 0; i < nums.length; i++){
            combo(0);
        // }

        function combo(index){
            if(currPath.length === nums.length){
                res.push([...currPath]);
                    return;
            }

            for(let i = 0; i < nums.length; i++){
                if(!currPath.includes(nums[i])){
                    currPath.push(nums[i]);
                    combo(i+1);
                    currPath.pop();
                }

            }
            return;
        }
        return res;
    }
}
