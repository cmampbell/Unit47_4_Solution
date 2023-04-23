/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode
    this.tail = newNode;
    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);


    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length += 1
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head){
      throw new Error('List empty');
    }

    if (this.head === this.tail){
      let val = this.head.val
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return val
    }

    let currentNode = this.head;
    let nextNode = currentNode.next;

    while (nextNode.next){
      currentNode = nextNode;
      nextNode = currentNode.next
    }

    currentNode.next = null;
    this.tail = currentNode;
    this.length -= 1;

    return nextNode.val
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head){
      throw new Error('List empty');
    }

    const val = this.head.val

    if (this.head === this.tail){
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return val
    }

    this.head = this.head.next;
    this.length -= 1;

    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(this.length === 0) throw new Error('List empty')
    if (idx > this.length || idx < 0) throw new Error(`No item at index: ${idx} `)

    let i = 0;

    let currentNode = this.head;

    while(currentNode){
      if (i === idx){
        return currentNode.val;
      } else {
        currentNode = currentNode.next;
        i++;
      }
    }

    return -1
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(this.length === 0) throw new Error('List empty')
    if (idx > this.length || idx < 0) throw new Error(`No item at index: ${idx} `)

    let i = 0;
    let currentNode = this.head;

    while(currentNode){
      if (i === idx){
        currentNode.val = val
        return undefined
      } else {
        currentNode = currentNode.next;
        i++;
      }
    }

    return -1

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) throw new Error(`No item at index: ${idx} `)

    const newNode = new Node(val);

    if (idx === 0){
      if (this.length === 0){
        this.head = newNode;
        this.tail = newNode;
      } else {
        const nextNode = this.head;
        newNode.next = nextNode;
        this.head = newNode;
      }
      this.length += 1;
      return undefined
    }

    if(idx === this.length){
      const currentNode = this.tail
      currentNode.next = newNode;
      this.tail = newNode;
      this.length += 1
    }

    let currentNode = this.head;
    let nextNode = currentNode.next;
    let i = 0;

    while(nextNode){
      if (i + 1 === idx){
        currentNode.next = newNode;
        newNode.next = nextNode;
        this.length += 1;
        return undefined
      } else {
        currentNode = currentNode.next;
        nextNode = currentNode.next;
        i++;
      }
    }

    return -1
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(this.length === 0) throw new Error('List empty')
    if (idx > this.length || idx < 0) throw new Error(`No item at index: ${idx} `)

    console.log(this.head.val)

    if (idx === 0){
      const val = this.head.val
      if (this.length === 1){
        this.head = null;
        this.tail = null;
      } else {
        const nextNode = this.head.next;
        this.head = nextNode;
      }
      this.length -= 1;
      return val
    }

    let currentNode = this.head;
    let nextNode = currentNode.next;
    let i = 0;

    while (nextNode){
      // if the next node is the one we are looking for
      if(i + 1 === idx){
        // if the next node is also the tail
        if(nextNode === this.tail){
          // make currentNode tail
          this.tail = currentNode
          currentNode.next = null;
          //make currentNode point to node after nextNode
        } else {
          currentNode.next = nextNode.next;
        }
        this.length -= 1;
        return nextNode.val
      } else {
        // continue loop
        currentNode = nextNode;
        nextNode = currentNode.next;
        i++;
      }
    }
    return -1
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0;

    let sum = 0;
    let i = 0;
    let currentNode = this.head;

    while (currentNode){
      sum += currentNode.val
      currentNode = currentNode.next
      i++;
    }

    return sum / i
    
  }
}

module.exports = LinkedList;
