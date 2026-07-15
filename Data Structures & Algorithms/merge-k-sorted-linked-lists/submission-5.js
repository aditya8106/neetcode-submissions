/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class MinHeap {

    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(node) {

        this.heap.push(node);

        this.heapifyUp();
    }

    heapifyUp() {

        let index = this.heap.length - 1;

        while (index > 0) {

            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent].val <= this.heap[index].val) {
                break;
            }

            this.swap(parent, index);

            index = parent;
        }
    }

    remove() {

        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) return this.heap.pop();

        let min = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.heapifyDown();

        return min;
    }

    heapifyDown() {

        let index = 0;

        while (true) {

            let left = 2 * index + 1;
            let right = 2 * index + 2;

            let smallest = index;

            if (
                left < this.heap.length &&
                this.heap[left].val < this.heap[smallest].val
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].val < this.heap[smallest].val
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            this.swap(index, smallest);

            index = smallest;
        }
    }
}

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
       let minhap = new MinHeap()
       for (let i = 0; i < lists.length; i++) {
            if (lists[i] !== null) {
                minhap.insert(lists[i]);
            }
        }

        let dummy = new ListNode(0)
        let curr = dummy
        while(minhap.size() > 0){
            let smalest = minhap.remove()
            curr.next = smalest
            curr = curr.next
            if(smalest.next != null ){
                minhap.insert(smalest.next)
            }
        }
        return dummy.next
    }
}
