class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let left = 0;left<matrix.length;left++){
            if(target >= matrix[left][0] && target <= matrix[left][matrix[left].length -1]){
            for(let r = 0;r<matrix[left].length ; r++){
                if(matrix[left][r] == target){
                    return true
                }
            }
        }
      }
        return false
    }
}
