class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let minSpeed = Infinity;

        while(left <= right){
            let mid = Math.floor((left + right)/2);
            let totalHours = 0;

            for(let pile of piles){
                totalHours += Math.ceil(pile/mid)
            }

            if(totalHours > h){
                left = mid + 1;
            }else if(totalHours <= h){
                minSpeed = Math.min(minSpeed, mid)
                right = mid - 1;
            }
            
        }

        return minSpeed;

    }
}
