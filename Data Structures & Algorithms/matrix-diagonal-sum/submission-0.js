class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    diagonalSum(mat) {
        let sum =0
        let n = mat.length;
        let primary = 0
        let secondary =0
        for(let i=0;i<n;i++){
            primary+=mat[i][i]
            if ((n-1-i) == i ) continue;
            secondary+=mat[i][n-1-i]
        }
        return Math.abs(primary+secondary)
    }
}
