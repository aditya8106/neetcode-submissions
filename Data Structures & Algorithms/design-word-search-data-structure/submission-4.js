class TreeNode {
    constructor(){
        this.children = new Array(26).fill(null)
        this.isEnd = false
    }
}
class WordDictionary {
    constructor() {
        this.root = new TreeNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root
        for(let ch of word){
            let index = ch.charCodeAt(0) - 97;
            if(curr.children[index] == null){
                curr.children[index] = new TreeNode()
            }
            curr = curr.children[index]
        }
        curr.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
       function dfs(node , word , i ){
        if(i == word.length) return node.isEnd;
        let currChar = word[i]
        if(currChar == '.'){
            for(let j = 0;j<26;j++){
                if(node.children[j] !== null){
                    if(dfs(node.children[j] , word , i+1)){
                        return true
                    }
                }
            }
            return false
        } 
        else {
            let index  = word[i].charCodeAt(0) - 97;
            if(node.children[index] == null){
                return false
            }
            return dfs(node.children[index] , word , i+1)
        }
       }
       return dfs(this.root, word, 0);
    }
}
