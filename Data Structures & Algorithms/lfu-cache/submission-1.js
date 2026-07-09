class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.freq = 1;

        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.size = 0;
    }

    add(node) {
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;

        this.size++;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;

        this.size--;
    }

    removeLRU() {
        if (this.size === 0) return null;

        let node = this.tail.prev;
        this.remove(node);

        return node;
    }
}

class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.minFreq = 0;

        this.keyMap = new Map();   // key -> node
        this.freqMap = new Map();  // freq -> DLL
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.keyMap.has(key)) {
            return -1;
        }

        let node = this.keyMap.get(key);
        this.updateFrequency(node);

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.capacity === 0) return;

        if (this.keyMap.has(key)) {
            let node = this.keyMap.get(key);
            node.value = value;
            this.updateFrequency(node);
            return;
        }

        if (this.size === this.capacity) {
            let list = this.freqMap.get(this.minFreq);
            let nodeToRemove = list.removeLRU();

            this.keyMap.delete(nodeToRemove.key);
            this.size--;
        }

        let newNode = new Node(key, value);

        this.keyMap.set(key, newNode);

        if (!this.freqMap.has(1)) {
            this.freqMap.set(1, new DoublyLinkedList());
        }

        this.freqMap.get(1).add(newNode);

        this.minFreq = 1;
        this.size++;
    }

    updateFrequency(node) {
        let oldFreq = node.freq;
        let list = this.freqMap.get(oldFreq);

        list.remove(node);

        if (oldFreq === this.minFreq && list.size === 0) {
            this.minFreq++;
        }

        node.freq++;

        if (!this.freqMap.has(node.freq)) {
            this.freqMap.set(node.freq, new DoublyLinkedList());
        }

        this.freqMap.get(node.freq).add(node);
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */