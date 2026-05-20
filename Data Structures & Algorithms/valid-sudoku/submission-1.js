class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i =0 ;i<9;i++){
            let rowSet = new Set();
            for(let j =0 ;j<9;j++){
                let val = board[i][j]
                if (val ==".") continue;
                if(rowSet.has(val)){
                    return false
                }
                rowSet.add(val)
            } 
        }
        for(let i =0 ;i<9;i++){
            let colSet = new Set();
            for(let j =0 ;j<9;j++){
                let val = board[j][i]
                if (val ==".") continue;
                if(colSet.has(val)){
                    return false
                }
                colSet.add(val)
            } 
        } 

        for(let row =0;row<9;row+=3){
            for(let colm =0;colm<9;colm+=3){
                let set = new Set()
                for(let i = row;i<row+3;i++){
                    for(let j =colm;j<colm+3;j++){
                        let val = board[i][j]
                        if (val =='.') continue;
                        if(set.has(val)) return false;
                        set.add(val)
                    }
                }
            }
        }   
        return true;
        
    }
}
