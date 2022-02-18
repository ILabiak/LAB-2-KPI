const DoubleLinkedList = require('./linked-list');


test('Append to list wrong arguments', () => {
    const list = new DoubleLinkedList();
    expect(() => list.append(1)).toThrow(Error)
    expect(() => list.append(123)).toThrow(Error)
    expect(() => list.append('fff')).toThrow(Error)
    expect(() => list.append()).toThrow(Error)
    expect(() => list.append(f)).toThrow(Error)
  //  expect(() => list.append('f')).toThrow(Error)
  });

