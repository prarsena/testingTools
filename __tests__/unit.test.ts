import * as calc from '../src/calc';

test.each([
    [1, 1, 2],
    [2, 2, 4],
    [2, 1, 3],
])('adds %i + %i to equal %i', (a, b, result) => {
    expect(calc.sum(a, b)).toBe(result);
});

test.each([
    [1, 1, 1],
    [2, 2, 4],
    [2, 1, 2],
  ])('multiply %i + %i to equal %i', (a, b, result) => {
    expect(calc.multiply(a, b)).toBe(result);
  });

  test('Is Bitcoin Price Healthy?', ()=>{
      expect(calc.makeAPIRequest).toBeGreaterThan(40000);
  })

  test('Return 0?', () =>{
      expect(calc.returnZero(1)).toBe(0);
  })