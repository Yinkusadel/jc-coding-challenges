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

  it('should return [3, 0] for input arrays [10, 15, 20] and [5, 6, 7]', () => {
    const result = compareTriplets([10, 15, 20], [5, 6, 7]);
    expect(result).toEqual([3, 0]);
  });

  it('should return [0, 3] for input arrays [6, 8, 12] and [7, 9, 15]', () => {
    const result = compareTriplets([6, 8, 12], [7, 9, 15]);
    expect(result).toEqual([0, 3]);
  });

  it('should return [1 ,2] for input arrays [10,12, 50] and [20 ,20, 10]', () => {
    const result = compareTriplets([10, 12, 50], [20, 20, 10]);
    expect(result).toEqual([1, 2]);
  });

  it('should return [2 ,1] for input arrays [10 ,20 ,30] and [5 ,5, 50]', () => {
    const result = compareTriplets([10, 20, 30], [5, 5, 50]);
    expect(result).toEqual([2, 1]);
  });

  it('should return [0 ,1] for input arrays [20, 20, 30] and [20 ,20 ,50]', () => {
    const result = compareTriplets([20, 20, 30], [20, 20, 50]);
    expect(result).toEqual([0, 1]);
  });
});
