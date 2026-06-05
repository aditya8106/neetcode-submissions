class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b) => a-b);
        let n = people.length
        let  left =0
        let right =n-1
        let boats =0
        while(left <= right ){
            let sum = people[left] + people[right]
            if(sum<=limit){
                left++;
                right--
            }else{right--}
            
            boats++
            
        }
        return boats
    }
}
