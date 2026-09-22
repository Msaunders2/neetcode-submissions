class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.cap = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)){
            return -1;
        }

        const val = this.map.get(key);
        this.map.delete(key);  
        this.map.set(key, val);
        return val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            this.map.delete(key);
        }
        this.map.set(key,value);

        if(this.map.size > this.cap){
            let oldelement = this.map.keys().next().value;
            this.map.delete(oldelement);
        }

    }
}
