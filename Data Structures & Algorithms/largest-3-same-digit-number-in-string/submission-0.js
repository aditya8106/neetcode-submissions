class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num) {
        let max=''
        for(let i =0;i<num.length-2;i++){
              let current = num[i] + num[i + 1] + num[i + 2];

               if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {

                    if (current > max) {
                         max = current;
                        }
                }
        } 
        return max

    }
}
