"use strict";

class Node {
  constructor(data, prev = null, next = null) {
    if (data.length === 1 && data.match(/./)) {
      this.data = data;
      this.prev = prev;
      this.next = next;
    } else {
      throw new Error("The data should be a character");
    }
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(el) {
    let node = new Node(el);
    if (this.length === 0) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(el, currentNode);
    }
    this.length++;
  }

  showList() {
    let currentNode = this.head;

    while (currentNode) {
      let prevEl;
      let nextEl;
      if (currentNode.prev) {
        prevEl = currentNode.prev.data;
      } else {
        prevEl = null;
      }
      if (currentNode.next) {
        nextEl = currentNode.next.data;
      } else {
        nextEl = null;
      }
      console.log(
        `previous: ${prevEl}, el: ${currentNode.data} , next: ${nextEl}`
      );
      currentNode = currentNode.next;
    }
  }

  insert(pos, el) {
    if (pos < 0 || pos > this.length) {
      console.log("Invalid position");
      return;
    }
    if (pos === this.length) {
      this.append(el);
      return;
    }
    let node = new Node(el);
    if (pos == 0) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      let index = 0;
      let prevNode;
      let currentNode = this.head;
      while (index < pos) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        index++;
      }
      prevNode.next = node;
      currentNode.prev = node;
      node.prev = prevNode;
      node.next = currentNode;
    }
    this.length++;
  }
}

let linkedList = new DoubleLinkedList();
linkedList.append("a");
linkedList.append("b");
linkedList.append("c");
linkedList.append("d");

linkedList.insert(0, "k");
linkedList.showList();
