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

  getLength(){
      return this.length;
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

  insert(index, el) {
    if (index < 0 || index > this.length || typeof index !== "number") {
      console.log("Invalid index");
      return;
    }
    if (index === this.length) {
      this.append(el);
      return;
    }
    let node = new Node(el);
    if (index == 0) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      let indexCount = 0;
      let prevNode;
      let currentNode = this.head;
      while (indexCount < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        indexCount++;
      }
      prevNode.next = node;
      currentNode.prev = node;
      node.prev = prevNode;
      node.next = currentNode;
    }
    this.length++;
  }

  delete(index) {
    if (index < 0 || index > this.length || typeof index !== "number") {
      console.log("Invalid index");
      return;
    }
    let currentNode = this.head;

    if (index === 0) {
      this.head = currentNode.next;
      this.head.prev = null;
    } else {
      let prevNode = null;
      let indexCount = 0;

      while (indexCount < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        indexCount++;
      }

      prevNode.next = currentNode.next;
      if (currentNode.next) {
        currentNode.next.prev = prevNode;
      }
    }
    this.length--;
    return currentNode.data;
  }

  deleteAll(char) {
    if (char.length === 1 && char.match(/./)) {
      let currentNode = this.head;
      let index = 0;
      while (index < this.length) {
        if (currentNode.data === char) {
          this.delete(index);
          index--;
        }
        currentNode = currentNode.next;
        index++;
      }
    } else {
      console.log("Invalid character");
      return;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length || typeof index !== "number") {
      console.log("Invalid index");
      return;
    }
    let indexCount = 0;
    let currentNode = this.head;
    while (indexCount != index) {
      currentNode = currentNode.next;
      indexCount++;
    }
    return currentNode.data;
  }

  clone() {
    let newLinkedList = new DoubleLinkedList();
    let currentNode = this.head;
    let index = 0;
    while (index < this.length) {
      newLinkedList.append(currentNode.data);
      currentNode = currentNode.next;
      index++;
    }
    return newLinkedList;
  }

  reverse() {
    let currentNode = this.head;
    let index = 0;
    let temp = null;
    while (currentNode != null) {
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = currentNode.prev;
    }
    if (temp != null) {
      this.head = temp.prev;
    }
  }

  findElement(char) {
    if (char.length === 1 && char.match(/./)) {
      let currentNode = this.head;
      let index = 0;
      while (index < this.length) {
        if (currentNode.data === char) {
          return index;
        }
        index++;
        currentNode = currentNode.next;
      }
      return -1;
    } else {
      console.log("Invalid character");
      return -1;
    }
  }

  findLast(char) {
    if (char.length === 1 && char.match(/./)) {
      let currentNode = this.head;
      let index = 0;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
        index++;
      }
      while (index >= 0) {
        if (currentNode.data === char) {
          return index;
        }
        index--;
        currentNode = currentNode.prev;
      }
      return -1;
    } else {
      console.log("Invalid character");
      return -1;
    }
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  extend(linkedList) {
    if (typeof linkedList === "object" && linkedList.head) {
      let currentNode = linkedList.head;
      let index = 0;
      while (index < linkedList.length) {
        this.append(currentNode.data);
        currentNode = currentNode.next;
        index++;
      }
    } else {
      console.log("Invalid list");
      return;
    }
  }
}

let linkedList = new DoubleLinkedList();

linkedList.append("a");
linkedList.append("b");
linkedList.append("c");
linkedList.append("d");

linkedList.showList();
