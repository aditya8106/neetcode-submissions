class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    minEatingSpeed(piles, h) {
        let left = 1 
        let right = Math.max(...piles)
        let k = 0
        while(left <= right){
            let mid = Math.floor((left + right)/2)
            let tot = 0
            for(let pile of piles){
                tot += Math.ceil(pile / mid)
            }
            if(tot <=h){
                k = mid
                right = mid -1
            }
            else{
                left = mid + 1
            }
        }
        return k
    }
}
