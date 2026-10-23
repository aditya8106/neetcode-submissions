class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
            const prefix = [0];

                for (let i = 0; i < words.length; i++) {
                        const word = words[i];
                                const count = vowels.has(word[0]) && vowels.has(word[word.length - 1]) ? 1 : 0;
                                        prefix.push(prefix[i] + count);
                                            }

                                                const ans = [];

                                                    for (const [l, r] of queries) {
                                                            ans.push(prefix[r + 1] - prefix[l]);
                                                                }

                                                                    return ans;
    }
}
