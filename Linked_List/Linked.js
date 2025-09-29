// One box (Node)
class Node {
  constructor(value) {
    this.value = value; // the data
    this.next = null; // the arrow to next
  }
}

// Linked List (chain of boxes)
class LinkedList {
  constructor() {
    this.head = null; // start of the list
  }

  // Add new box at end
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode; // first box
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; // go to last box
      }
      current.next = newNode; // link the new one
    }
  }

  // Delete node by value
  delete(value) {
    if (!this.head) {
      return;
    }

    if (this.head.value == value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next && current.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  Print() {
    let current = this.head;

    let result = "";

    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }

    console.log(result || "Empty list");
  }
}

let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

list.Print();

list.delete(10);
list.delete(20);
list.delete(30);
list.delete(40);
list.Print();
