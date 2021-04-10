/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {
  push(element) {
    const stack = new Stack();
    stack.value = element;

    if (this.head) {
      stack.next = this.head;
      this.head = stack;
    } else {
      this.head = stack;
    }
    this.length++;
  }

  pop() {
    const current = this.head;
    this.head = this.head.next;
    this.length--;

    return current.value;
  }

  peek() {
    return this.head.value;
  }
}

module.exports = Stack;
