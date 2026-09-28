class TrieNode{
    constructor(){
        this.child = new Map();
        this.endStatus = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for(let char of word){
            if(!curr.child.has(char)){
                curr.child.set(char, new TrieNode());
            }
            curr = curr.child.get(char);   // move forward
        }

        curr.endStatus = true;     
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        for(let i = 0; i < word.length; i++){
            if(curr.child.has(word[i])){
                curr = curr.child.get(word[i]);

                if(i === word.length - 1){
                    if(curr.endStatus){
                        return true;
                    }else{
                        return false;
                    }
                }
            }else{
                return false;
            }
        }

        return true;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for(let i = 0; i < prefix.length; i++){
            if(curr.child.has(prefix[i])){
                curr = curr.child.get(prefix[i]);
            }else{
                return false;
            }
        }

        return true;

    }
}
