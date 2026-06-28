// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;
        let current = head
        let map = new Map()
        while(current){
            let copy = new Node(current.val)
            map.set(current , copy)
            current = current.next
        }
        current = head
        while(current){
            const copy = map.get(current)
            copy.next = map.get(current.next)||null;
            copy.random = map.get(current.random)||null
            current = current.next
        }
        return map.get(head)
    }
}
