class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
            let left = 0
            let right = matrix[0].length * matrix.length - 1

                while(left <= right){
                    let mid = Math.floor((left+right)/2)
                    let l = Math.floor(mid/matrix[0].length)
                    let r = mid % matrix[0].length
                    if(matrix[l][r] == target ){
                        return true
                    }
                    if(matrix[l][r] < target ){
                        left = mid + 1
                    }else{
                        right = mid -1
                    }

                }
            
            
      
        return false
    }
}
