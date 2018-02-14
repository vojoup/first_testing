const {add, sub} = require('./main');

test('adds 1 + 2 to equal 3', addTest);

function addTest() {
    expect(add(1, 2)).toBe(3);
}

test('adds 0 + 0 to equal 0', addTest);

function addTest() {
    expect(add(0, 0)).toBe(0);
}

test('substracts 2 - 1 to equal 1', subTest);

function subTest() {
    expect(sub(2, 1)).toBe(1);
}