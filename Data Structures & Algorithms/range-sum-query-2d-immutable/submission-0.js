class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
         if (!matrix || matrix.length === 0) {
            this.prefix = [];
            return;
        }
        let rows = matrix.length
        let cols = matrix[0].length
        this.prefix = Array(rows).fill(0).map(()=>Array(cols).fill(0))
        for(let r =0 ;r<rows;r++){
            for(let c=0;c<cols;c++){
                let top = r>0?this.prefix[r-1][c]:0;
                let left = c>0?this.prefix[r][c-1]:0;
                let topleft = r>0&&c>0 ?this.prefix[r-1][c-1]:0
                this.prefix[r][c] = matrix[r][c] + top+left-topleft

            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let total = this.prefix[row2][col2];
        let top = row1>0 ? this.prefix[row1-1][col2] :0;

        let left = col1>0?this.prefix[row2][col1-1]:0;
        let lefttop = row1>0 && col1>0 ?  this.prefix[row1-1][col1-1]:0
        return total-top-left+lefttop
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
