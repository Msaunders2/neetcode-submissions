class TrieNode{
    constructor(){
        this.child = new Map();
        this.endStatus = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for(let i = 0; i < word.length; i++){
            if(curr.child.has(word[i])){
                curr = curr.child.get(word[i])
            }else{
                curr.child.set(word[i], new TrieNode());
                curr = curr.child.get(word[i]);
            }
        }

        curr.endStatus = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(this.root, 0, word);
    }

    dfs(node, i, word){
        if (i === word.length) {
            return node.endStatus;
        }

        let char = word[i];

        if(char === "."){
            for(let [key, child] of node.child){
                if(this.dfs(child, i+1, word)){
                    return true;
                }
            }

            return false;
        }else{
            if(node.child.has(word[i])){
                return this.dfs(node.child.get(char), i+1, word)
            }else{
                return false;
            }

        }

    }
}
