class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
        this.word = null;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            let index = char.charCodeAt(0) - 97;

            if (node.children[index] === null) {
                node.children[index] = new TrieNode();
            }

            node = node.children[index];
        }

        node.isEnd = true;
        node.word = word;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {

        let trie = new Trie();

        for (let word of words) {
            trie.insert(word);
        }

        let res = [];

        const rows = board.length;
        const cols = board[0].length;

        function dfs(row, col, node) {

            if (
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols
            ) {
                return;
            }
            let char = board[row][col];
            if (char === '#') {
                return;
            }
            let index = char.charCodeAt(0) - 97;
            if (node.children[index] === null) {
                return;
            }
            node = node.children[index];
            if (node.isEnd === true) {
                res.push(node.word);
                node.isEnd = false;
                node.word = null;
            }
            board[row][col] = '#';
            dfs(row + 1, col, node);

            
            dfs(row - 1, col, node);

            dfs(row, col + 1, node);

            dfs(row, col - 1, node);

            board[row][col] = char;
        }

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                dfs(row, col, trie.root);
            }
        }

        return res;
    }
}