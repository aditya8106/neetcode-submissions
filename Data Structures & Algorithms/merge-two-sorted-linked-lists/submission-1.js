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
        let arr = []
        let temp1 = list1
        while(temp1 != null){
            arr.push(temp1.val);
            temp1 = temp1.next;
        }
        let temp2 = list2
        while(temp2 != null){
            arr.push(temp2.val)
            temp2 = temp2.next;
        }
        arr.sort((a,b) =>  a - b);
        if(arr.length === 0 ){
            return null ;
        }
        let head = new ListNode(arr[0])
        let curr = head
        for(let i = 1;i< arr.length;i++){
         curr.next = new ListNode(arr[i])
         curr = curr.next;   
        }

        return head
    }
}
