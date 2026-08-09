class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let prsns = 0
        for(let num  of details){ 
            let age = num.slice(11,13)
            if(Number(age) > 60){
                prsns++
            }     
        }
        return prsns
    }
}
