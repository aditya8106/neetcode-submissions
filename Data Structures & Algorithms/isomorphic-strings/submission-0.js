class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

    let mapST = new Map(); // s -> t
    let mapTS = new Map(); // t -> s
    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];
        if (mapST.has(charS) && mapST.get(charS) !== charT) {
            return false;
        }
        if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
            return false;
        }
        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;

    }
}
