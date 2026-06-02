class MyHashSet {
    constructor() {
        this.array = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let hasKey = false;
        for(let i = 0; i<this.array.length; i++){
            if(this.array[i] === key){
                hasKey = true;
            }
        }
        if(!hasKey) this.array.push(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let hasKey = false;
        let index = 0;
        for(let i = 0; i<this.array.length; i++){
            if(this.array[i] === key){
                index = i;
                hasKey = true;
            }
        }
        if(hasKey){
            for(let i = index+1; i<this.array.length; i++){
                this.array[i-1] = this.array[i];
            }
            this.array.pop();
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let hasKey = false;
        for(let i = 0; i<this.array.length; i++){
            if(this.array[i] === key){
                hasKey = true;
            }
        }
        return hasKey;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
