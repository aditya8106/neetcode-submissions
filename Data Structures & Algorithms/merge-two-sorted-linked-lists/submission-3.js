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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let temp2= list2
        let temp1 = list1
        let Dnode = new ListNode(-1)
        let temp = Dnode
        while(temp1 != null && temp2 != null){
            if(temp1.val < temp2.val){
                temp.next = temp1
                temp = temp1;
                temp1 = temp1.next
            }else{
                temp.next = temp2
                temp = temp2
                temp2 = temp2.next
            }
        }
        if(temp1){
            temp.next = temp1
        }
        else{
            temp.next = temp2
        }
        

        return Dnode.next
    }
}
