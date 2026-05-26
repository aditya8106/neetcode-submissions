class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let res = []
        for(let op of operations){
            if(op == 'C'){
                res.pop()
            }
            else if(op=='D'){
                let last = res[res.length-1]
                res.push(last*2)
            }
            else if(op == '+'){
                let last = res[res.length-1];
                let second = res[res.length-2];
                res.push(last+second);
            }else{
                res.push(Number(op))
            }
        }
        let sum = 0
        for(let num of res){
            sum+=num;
            
        }
        return sum;
    }
}
