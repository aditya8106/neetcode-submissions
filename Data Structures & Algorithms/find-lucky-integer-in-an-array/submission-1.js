class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let  map = new Map()
        for(let n of arr){
            map.set(n,(map.get(n)|| 0) + 1)
        }
        let max =  -1
        for(let [key ,freq] of map){
            if(key === freq){
                max = Math.max(max, key)
            }
        } 
        return max      
    }
}
