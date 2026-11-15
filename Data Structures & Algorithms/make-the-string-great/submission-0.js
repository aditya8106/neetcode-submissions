class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    makeGood(s) {
        const stack = [];

        for (const char of s) {
            const top = stack[stack.length - 1];

            if (top && Math.abs(top.charCodeAt(0) - char.charCodeAt(0)) === 32) {
                stack.pop();
            } else {
                stack.push(char);
            }
        }

        return stack.join('');
    }
}
