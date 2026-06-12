class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {

        let currentNum =0
        let currentString  =''
        let stack =[]

        for(let ch of s){
            if(!isNaN(ch)){
                currentNum = currentNum * 10 +Number(ch)
            }else if(ch == '['){
                stack.push([currentString , currentNum]);
                currentString =''
                currentNum =0
            }else if(ch == ']'){
                let [prevstr, repeatcout] = stack.pop()
                currentString = prevstr+currentString.repeat(repeatcout)
            }else{
                currentString+=ch;
            }
        }
        return currentString
    }
}
