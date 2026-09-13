class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {
         let charCount = new Array(26).fill(0);

    for (let ch of chars) {
        charCount[ch.charCodeAt(0) - 97]++;
    }

    let total = 0;

    for (let word of words) {
        let wordCount = new Array(26).fill(0);
        let possible = true;

        for (let ch of word) {
            let index = ch.charCodeAt(0) - 97;
            wordCount[index]++;

            if (wordCount[index] > charCount[index]) {
                possible = false;
                break;
            }
        }

        if (possible) {
            total += word.length;
        }
    }

    return total;
    }
}
