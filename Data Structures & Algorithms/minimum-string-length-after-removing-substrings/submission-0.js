class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minLength(s) {
        const stack = [];

        for (const char of s) {
            const top = stack[stack.length - 1];
            
            if ((top === 'A' && char === 'B') || (top === 'C' && char === 'D')) {
                stack.pop();
            } else {
                stack.push(char);
            }
        }

        return stack.length;
    }
}
