const { test } = require('@jest/globals');
const DoubleLinkedList = require('./linked-list');

const list = new DoubleLinkedList();
list.append('1')
list.append('f')
list.showList()

