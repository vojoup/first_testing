const {add} = require('./main');

test('adds 1 + 2 to equal 3', addTest);

function addTest() {
    expect(add(1, 2)).toBe(3);
}