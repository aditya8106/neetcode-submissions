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
        while(current){
            let copy = new Node(current.val)
            let next = current.next
            current.next = copy
            copy.next = next
            current = next
        }
        current = head
        while(current){
            const copy = current.next
           copy.random = current.random ? current.random.next : null;
           current = copy.next

        }
        current = head
        let copyHead = head.next
        while(current){
            const copy = current.next
            current.next = copy.next
            copy.next = copy.next ? copy.next.next : null
            current = current.next
        }
        return copyHead
    }
}
