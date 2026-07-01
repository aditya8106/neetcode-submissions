class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
         const isSame= (arr1 ,arr2)=>{
        for(let i =0;i< 26;i++){
            if(arr1[i] !== arr2[i]){
                return false
            }
            }
            return true
        }
    
    if (s1.length > s2.length) return false;
      let s1arr = new Array(26).fill(0)
      let s2arr = new Array(26).fill(0)
      let k = s1.length
     for(let ch of s1){
        let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0)
        s1arr[idx]++;
     }
     for(let i =0;i<k;i++){
        let idx = s2[i].charCodeAt(0) - 'a'.charCodeAt(0)
        s2arr[idx]++;
     }
     if(isSame(s1arr ,s2arr)) return true;
     let left = 0
     let right = k  
     while(right < s2.length){
        let leftidx = s2[left].charCodeAt(0) - 'a'.charCodeAt(0)
        s2arr[leftidx]--
         let rightidx = s2[right].charCodeAt(0) - 'a'.charCodeAt(0)
        s2arr[rightidx]++
        left++
        right++
         if (isSame(s1arr, s2arr)) return true;

     }
     return false
    }
   
}
