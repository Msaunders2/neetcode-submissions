class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)){
            this.keyStore.get(key).push([value,timestamp]);
        }else{
            this.keyStore.set(key,[]);
            this.keyStore.get(key).push([value,timestamp]);
        }

    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let res = "";
        let searchRes = this.keyStore.get(key);

        if(searchRes){

            let left = 0;
            let right = searchRes.length - 1;

            while(left <= right){
                let mid = Math.floor((left + right)/2);

                if(timestamp === searchRes[mid][1]){
                    return searchRes[mid][0];
                }else if(timestamp > searchRes[mid][1]){
                    res = searchRes[mid][0];
                    left = mid + 1;
                }else{
                    right = mid - 1;
                }
            }

        }

        return res;
    }
}
