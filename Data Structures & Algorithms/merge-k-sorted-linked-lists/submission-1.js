/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let arr = []
        for(let i = 0;i<lists.length ; i++){
           let curr = lists[i]
           while(curr !== null){
                arr.push(curr.val)
                curr = curr.next
           }
        }
        arr.sort((a, b) => a - b);
        let dummy = new ListNode(0)
        let current = dummy
        for(let num of arr){
            current.next = new ListNode(num)
            current = current.next
        }
        return dummy.next
    }
}
