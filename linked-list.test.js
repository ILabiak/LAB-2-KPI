const { expect } = require('@jest/globals');
const exp = require('constants');
const { link } = require('fs');
const DoubleLinkedList = require('./linked-list');

test('getLength method test', () => {
    const list = new DoubleLinkedList();
    expect(list.getLength()).toBe(0)
    list.append('f')
    expect(list.getLength()).toBe(1)
    list.append('a')
    list.append('b')
    list.append('c')
    expect(list.getLength()).toBe(4)
    list.delete(3)
    list.delete(1)
    expect(list.getLength()).toBe(2)
    list.clear()
    expect(list.getLength()).toBe(0)
  });

test('Append method tests', () => {
    const list = new DoubleLinkedList();
    expect(() => list.append(1)).toThrow(Error)
    expect(() => list.append(123)).toThrow(Error)
    expect(() => list.append('fff')).toThrow(Error)
    expect(() => list.append()).toThrow(Error)
    expect(() => list.append(f)).toThrow(Error)
    expect(list.append('1')).toBe(undefined)
    expect(list.append('.')).toBe(undefined)
    expect(list.append('a')).toBe(undefined)
    expect(list.append('-')).toBe(undefined)
    expect(list.append('!')).toBe(undefined)
  });

test('Insert method tests', () => {
    const list = new DoubleLinkedList();
    expect(() => list.insert(1,'f')).toThrow(Error)
    expect(list.insert(0,'f')).toBe(undefined)
    expect(() => list.insert(0,'ff')).toThrow(Error)
    expect(list.insert(0,'4')).toBe(undefined)
    expect(list.insert(1,'a')).toBe(undefined)
    expect(() => list.insert(undefined,'b')).toThrow(Error)
    expect(() => list.insert(1)).toThrow(Error)
    expect(() => list.insert()).toThrow(Error)
  });

  test('Delete method tests', () => {
    const list = new DoubleLinkedList();
    list.append('a')
    list.append('b')
    list.append('c')
    list.append('d')
    list.append('e')
    expect(() => list.delete()).toThrow(Error)
    expect(() => list.delete(5)).toThrow(Error)
    expect(() => list.delete(-1)).toThrow(Error)
    expect(list.delete(2)).toBe('c')
    expect(list.delete(3)).toBe('e')
    expect(list.delete(0)).toBe('a')
  });

  test('DeleteAll method tests', () => {
    const list = new DoubleLinkedList();
    list.append('a')
    list.append('b')
    list.append('c')
    list.append('c')
    list.append('d')
    list.append('e')
    expect(() => list.deleteAll()).toThrow(Error)
    expect(() => list.deleteAll(1)).toThrow(Error)
    expect(() => list.deleteAll('fsfd')).toThrow(Error)
    expect(list.deleteAll('c')).toBe(undefined)
    expect(list.deleteAll('f')).toBe(undefined)
  });

  test('Get method tests', () => {
    const list = new DoubleLinkedList();
    list.append('a')
    list.append('b')
    list.append('c')
    list.append('d')
    list.append('e')
    expect(() => list.get()).toThrow(Error)
    expect(() => list.get('2')).toThrow(Error)
    expect(() => list.get('aa')).toThrow(Error)
    expect(() => list.get(-1)).toThrow(Error)
    expect(() => list.get(10)).toThrow(Error)
    expect(list.get(0)).toBe('a')
    expect(list.get(2)).toBe('c')
    expect(list.get(4)).toBe('e')
  });

  test('Clone method tests', () => {
    const list = new DoubleLinkedList();
    list.append('a')
    list.append('b')
    list.append('c')
    list.append('d')
    list.append('e')
    const seconList = list.clone();
    expect(seconList.length).toBe(5)
    expect(seconList.get(0)).toBe('a')
    expect(seconList.get(3)).toBe('d')
    list.delete(3)
    expect(seconList.get(3)).toBe('d')
  });

  test('Reverse method tests', () => {
    const list = new DoubleLinkedList();
    list.append('a')
    list.append('b')
    list.append('c')
    list.append('d')
    list.append('e')
    expect(list.head.data).toBe('a')
    expect(list.head.prev).toBe(null)
    list.reverse();
    expect(list.head.prev).toBe(null) //checking if the head prev pointer is null
    expect(list.head.data).toBe('e') //checking 1st element
    expect(list.head.next.data).toBe('d') //checking 2nd element
    expect(list.head.next.next.data).toBe('c') //checking 3rd element
    expect(list.head.next.next.next.data).toBe('b') //checking 4th element
    expect(list.head.next.next.next.next.data).toBe('a') //checking 5th element
    expect(list.head.next.next.next.next.next).toBe(null) //checking if the tail next pointer is null
  });

  test('FindFirst method tests', () => {
    const list = new DoubleLinkedList();
    list.append('a')
    list.append('b')
    list.append('c')
    list.append('c')
    list.append('d')
    list.append('e')
    expect(() => list.findFirst()).toThrow(Error)
    expect(() => list.findFirst(1)).toThrow(Error)
    expect(() => list.findFirst('ff')).toThrow(Error)
    expect(list.findFirst('a')).toBe(0)
    expect(list.findFirst('c')).toBe(2)
    expect(list.findFirst('e')).toBe(5)
  });