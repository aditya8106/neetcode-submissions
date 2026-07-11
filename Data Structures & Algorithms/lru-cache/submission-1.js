class Node {
    constructor(key ,value){
        this.key = key
        this.value = value
        this.prev=null
        this.next=null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity 
        this.map = new Map()
        this.head = new Node(0,0)
        this.tail = new Node(0 ,0)
        this.head.next = this.tail
        this.tail.prev =  this.head
    }
    add(node){
            node.next = this.head.next
            node.prev = this.head
            this.head.next.prev = node
            this.head.next = node
         }
    remove(node){
        node.next.prev = node.prev
        node.prev.next = node.next


    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)){
            return -1
        }
        let node = this.map.get(key)
        this.remove(node)
        this.add(node)
        return node.value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            let node = this.map.get(key)
            node.value = value

            this.remove(node)
            this.add(node)
            return
        }
        if(this.map.size == this.capacity){
            let lru = this.tail.prev
            this.remove(lru)
            this.map.delete(lru.key)
        }
        let newNode = new Node(key , value)
        this.add(newNode)
        this.map.set(key , newNode)
    }
}
