const compareTriplets = require('./challenge');

describe('compareTriplets', () => {
  it('should return [0, 0] for input arrays [1, 2, 3] and [1, 2, 3]', () => {
    const result = compareTriplets([1, 2, 3], [1, 2, 3]);
    expect(result).toEqual([0, 0]);
  });

  it('should return [1, 1] for input arrays [5, 6, 7] and [3, 6, 10]', () => {
    const result = compareTriplets([5, 6, 7], [3, 6, 10]);
    expect(result).toEqual([1, 1]);
  });

  it('should return [3, 0] for input arrays [5, 6, 7] and [3, 6, 10]', () => {
    const result = compareTriplets([10, 15, 20], [5, 6, 7]);
    expect(result).toEqual([3, 0]);
  });
});
