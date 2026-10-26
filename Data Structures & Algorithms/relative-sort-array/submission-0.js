class Solution {
    /**
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @return {number[]}
     */
    relativeSortArray(arr1, arr2) {
        const orderMap = new Map();
        for (let i = 0; i < arr2.length; i++) {
            orderMap.set(arr2[i], i);
        }

        return arr1.sort((a, b) => {
            const inArr2A = orderMap.has(a);
            const inArr2B = orderMap.has(b);

            if (inArr2A && inArr2B) {
                return orderMap.get(a) - orderMap.get(b);
            }
            
            if (inArr2A) {
                return -1;
            }
            
            if (inArr2B) {
                return 1;
            }
            
           
            return a - b;
        });
    }
}
