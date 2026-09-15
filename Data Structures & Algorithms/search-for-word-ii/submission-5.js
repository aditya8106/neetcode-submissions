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

        // Create Trie
        let trie = new Trie();

        // Insert all words
        for (let word of words) {
            trie.insert(word);
        }

        let res = [];

        const rows = board.length;
        const cols = board[0].length;

        function dfs(row, col, node) {

            // STEP 1: Boundary check
            if (
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols
            ) {
                return;
            }

            // STEP 2: Get current character
            let char = board[row][col];

            // STEP 3: Already visited?
            if (char === '#') {
                return;
            }

            // STEP 4: Convert character to index
            let index = char.charCodeAt(0) - 97;

            // STEP 5: Character doesn't exist in Trie
            if (node.children[index] === null) {
                return;
            }

            // STEP 6: Move to next Trie node
            node = node.children[index];

            // STEP 7: Complete word found
            if (node.isEnd === true) {
                res.push(node.word);

                // Prevent duplicate result
                node.isEnd = false;
                node.word = null;
            }

            // STEP 8: Mark current cell as visited
            board[row][col] = '#';

            // STEP 9: Explore four directions

            // Down
            dfs(row + 1, col, node);

            // Up
            dfs(row - 1, col, node);

            // Right
            dfs(row, col + 1, node);

            // Left
            dfs(row, col - 1, node);

            // STEP 10: Restore original character
            board[row][col] = char;
        }

        // Start DFS from every cell
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                dfs(row, col, trie.root);
            }
        }

        return res;
    }
}