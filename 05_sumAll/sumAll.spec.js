const sumAll = require('./sumAll')

describe('sumAll', () => {
  test('sums numbers within the range', () => {
    expect(sumAll(1, 4)).toEqual(10);
  });
  test('works with large numbers', () => {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  test('works with larger number first', () => {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  test('returns ERROR with negative numbers', () => {
    expect(sumAll(-10, 4)).toEqual('ERROR');
  });
  test('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, "90")).toEqual('ERROR');
  });
  test('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, [90, 1])).toEqual('ERROR');
  });
  test('works with large numbers, lowerbound 1', () => {
    expect(sumAll(1, 80002000)).toEqual(3200160042001000);
  });
  test('works with large numbers, lowerbound not 1', () => {
    expect(sumAll(2, 80002000)).toEqual(3200160042000999);
  });
});
