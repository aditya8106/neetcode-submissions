/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        let left = 0
        let right = mountainArr.length() - 1
        while(left < right ){
            let mid  = Math.floor((left + right) / 2)
            if(mountainArr.get(mid) < mountainArr.get(mid + 1)){
                left = mid + 1
            }else{
                right = mid
            }
        }
        let peak = left

       function Binarysearch(left ,right , asc){
            while(left <= right ){
                let mid = Math.floor((left + right) / 2)
                let value = mountainArr.get(mid)
                if(value === target){
                    return mid
                }
                if(asc){
                    if(value < target){
                        left = mid + 1
                    }else{
                        right = mid - 1
                    }
                }else{
                    if(value < target){
                        right = mid - 1
                    }else{
                        left = mid + 1
                    }
                }
            

            }
            return -1
        }
        
        let ans = Binarysearch(0,peak,true);
        if(ans !== -1)
        {
            return ans
        }
        return Binarysearch(peak +1,mountainArr.length() - 1,false)
        
    }
}
