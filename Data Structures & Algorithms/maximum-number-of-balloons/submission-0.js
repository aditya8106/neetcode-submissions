class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        let count = new Map([['b',0],['a',0],['l',0],['o', 0],
        ['n', 0]])
        for(let ch of text){
            if(count.has(ch)){
                count.set(ch,count.get(ch)+1)
            }
        }
        const b = count.get('b')
        const a = count.get('a')
        const l = Math.floor(count.get('l') /2)
        const o =  Math.floor(count.get('o') /2)
        const n = count.get('n')

        return Math.min(b,a,l,o,n)
    }
}
