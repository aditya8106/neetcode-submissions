class TreeNode{
      constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }
}
class PrefixTree {
    constructor() {
        this.root = new TreeNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root
        for(let ch of word){
            let index = ch.charCodeAt(0) - 97;
            if(curr.children[index] === null){
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
        let cur =this.root;
        for(let ch of word){
            let index = ch.charCodeAt(0) - 97;
            if(cur.children[index] == null){
                return false
            }
            cur = cur.children[index];
        }
        return cur.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr   = this.root
        for(let ch of prefix){
            let index = ch.charCodeAt(0) - 97;
            if(curr.children[index] == null){
                return false
            }
            curr = curr.children[index]
        }
        return true
    }
}
