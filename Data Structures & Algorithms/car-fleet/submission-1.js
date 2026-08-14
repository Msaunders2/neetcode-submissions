class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let curPos = [];
        let arrivals = [];
        
        for(let i = 0; i < position.length; i++){
            curPos.push([position[i], speed[i]]);
        }

        curPos.sort((a, b) => a[0] - b[0]);
          
        for(let i = 0; i < curPos.length; i++){
            let arrivalTime = (target - curPos[i][0]) / curPos[i][1];
            arrivals.push(arrivalTime);
        }

        let fleetTime = arrivals[arrivals.length - 1];
        let fleetCt = 1;

        for(let i = arrivals.length - 2; i >= 0; i--){
            if(arrivals[i] > fleetTime){
                fleetCt++;
                fleetTime = arrivals[i];
            }
        }
        return fleetCt;
    }
}
