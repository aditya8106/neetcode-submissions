class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let map = {
        ')':'(',
        ']':'[',
        '}':'{'
        }
        for(let char of s){
            if(map[char]){
                if(stack.length==0||stack[stack.length-1]!==map[char]){
                    return false;
                }
                stack.pop()
            }else{
                stack.push(char)
            }
        }
        return stack.length ===0;
    }
}
