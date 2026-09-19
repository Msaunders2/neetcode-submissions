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
            for(let i = 0; i < searchRes.length; i++){
                if(searchRes[i][1] <= timestamp){
                    res = searchRes[i][0];
                }
            }

        }

        return res;
    }
}
