class Solution {
    /**
     * @param {number} num
     * @return {boolean}
     */
    isPerfectSquare(num) {
        let left =1
        let right = num
        while(left <=right){
            let mid = Math.floor((left+right)/2)
            let res = mid * mid
            if(res== num){
                return true
            }
            if(res > num){
                right = mid -1
            }else{
                left = mid + 1
            }

        }
        return false
    }
}
