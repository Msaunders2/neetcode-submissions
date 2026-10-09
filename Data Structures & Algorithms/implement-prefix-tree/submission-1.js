class Trie{
    constructor(){
        this.child = new Map();
        this.endStatus = false;
    }
}
class PrefixTree {
    constructor() {
        this.root = new Trie();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for(let i = 0; i < word.length; i++){
            if(!curr.child.has(word[i])){
                curr.child.set(word[i], new Trie());
            }
            curr = curr.child.get(word[i]);
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
                if(i === word.length - 1 && curr.endStatus === true){
                    return true;
                }
            }else{
                return false;
            }
        }

        return false;
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
                if(i === prefix.length - 1){
                    return true;
                }
            }else{
                return false;
            }
        }

        return false;

    }
}
