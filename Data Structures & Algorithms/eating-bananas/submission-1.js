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
            let i = 0;
            let totalHours = 0;

            while(i < piles.length){
                totalHours +=Math.ceil(piles[i]/mid)
                i++;
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
