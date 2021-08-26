const sum = require('../src/calc');
/*
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
*/

test.each([
    [1, 1, 2],
    [2, 2, 4],
    [2, 1, 3],
])('adds %i + %i to equal %i', (a, b, result) => {
    expect(sum(a, b)).toBe(result);
});