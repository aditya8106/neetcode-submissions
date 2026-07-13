class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0 
        let r = arr.length - 1
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(arr[mid] <  x){
                l = mid + 1
            }else{
                r = mid - 1
            }
        }
        let left = l -1
        let right = l
        let res = []
        while(res.length < k){
            if(left < 0){
                res.push(arr[right])
                right++
            }else if (right >=arr.length){
                res.push(arr[left])
                left--
            }else{
                if(Math.abs(arr[left] - x) < Math.abs(arr[right] - x)){
                    res.push(arr[left]);
                    left --
                }else if(Math.abs(arr[right] - x) < Math.abs(arr[left] - x)){
                    res.push(arr[right])
                    right++
                }else{
                    res.push(arr[left])
                    left--
                }
            }
        }
        return res.sort((a,b)=> a-b);
    }
}
