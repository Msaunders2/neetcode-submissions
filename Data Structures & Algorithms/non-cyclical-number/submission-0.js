class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seen = new Set();

        let digits = n.toString().split('').map(Number);
        let tot = 0;

        while(tot !== 1){
            tot = 0;

            for(let digit of digits){
                tot += digit**2;
            }

            if(seen.has(tot)){
                return false;
            }

            seen.add(tot);
            digits = tot.toString().split('').map(Number);
        }

        return true;
       
    }
}
