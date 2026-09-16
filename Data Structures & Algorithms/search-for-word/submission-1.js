class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        function dfs(row,col,i){
            if(row<0||row>=board.length||col<0||col>=board[0].lenth){
                return false
            }
            let char = board[row][col]
            if(char == '#' || char !== word[i]){
                return false
            }
             if (i === word.length - 1) {
            return true;
            }
            board[row][col] = '#'
            let find = dfs(row + 1, col, i + 1) ||
            dfs(row - 1, col, i + 1) ||
            dfs(row, col + 1, i + 1) ||
            dfs(row, col - 1, i + 1);
            board[row][col] = char
            return find
        }
        for(let row =0;row<board.length;row++){
            for(let col  =0;col<board[0].length;col++){
                if(board[row][col] == word[0]){
                    if(dfs(row,col,0)){
                        return true
                    }
                }
            }
        }
        return false
    }
}
