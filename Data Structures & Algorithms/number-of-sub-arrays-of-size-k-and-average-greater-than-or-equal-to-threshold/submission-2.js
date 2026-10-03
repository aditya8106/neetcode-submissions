class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let left = 0
        let right = k
        let count = 0
        let wisum = 0
        for(let i = 0 ;i <k;i++){
            wisum+=arr[i]
        }
        if(wisum>= k * threshold){
            count++
        }
        while(right<arr.length){
            wisum +=arr[right]
            wisum -=arr[left]
              if(wisum>=k * threshold){
                count++
            } 
            right++
            left++
          
        }
        return count
    }
}
