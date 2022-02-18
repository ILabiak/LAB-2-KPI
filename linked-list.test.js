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
