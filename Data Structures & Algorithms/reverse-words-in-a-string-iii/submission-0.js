class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reverseWords(s) {return s.split(' ')
                .map(word => word.split('').reverse().join(''))
                            .join(' ');}
}
