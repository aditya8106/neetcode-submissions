class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let left = 0;left<matrix.length;left++){
            if(target >= matrix[left][0] && target <= matrix[left][matrix[left].length -1]){
            let left1 =0
            let right = matrix[left].length -1
                while(left1 <= right){
                    let mid = Math.floor((left1+right)/2)
                    if(matrix[left][mid] == target ){
                        return true
                    }
                    if(matrix[left][mid] < target ){
                        left1 = mid + 1
                    }else{
                        right = mid -1
                    }

                }
            
            }
      }
        return false
    }
}
