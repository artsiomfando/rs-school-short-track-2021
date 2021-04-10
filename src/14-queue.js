const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.length = 0;
  }

  enqueue(element) {
    const queue = new ListNode();
    queue.value = element;

    if (this.head) {
      this.tail.next = queue;
      this.tail = queue;
    } else {
      this.head = queue;
      this.tail = queue;
    }
    this.length++;
  }

  dequeue() {
    const current = this.head;
    this.head = this.head.next;
    this.length--;
    return current.value;
  }

  get size() {
    return this.length;
  }
}

module.exports = Queue;
