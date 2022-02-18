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


test('Append to list wrong arguments', () => {
    const list = new DoubleLinkedList();
    expect(() => list.append(1)).toThrow(Error)
    expect(() => list.append(123)).toThrow(Error)
    expect(() => list.append('fff')).toThrow(Error)
    expect(() => list.append()).toThrow(Error)
    expect(() => list.append(f)).toThrow(Error)
  });

  test('Append to list rigth arguments', () => {
    const list = new DoubleLinkedList();
    expect(list.append('1')).toBe(undefined)
    expect(list.append('.')).toBe(undefined)
    expect(list.append('a')).toBe(undefined)
    expect(list.append('-')).toBe(undefined)
    expect(list.append('!')).toBe(undefined)
  });

