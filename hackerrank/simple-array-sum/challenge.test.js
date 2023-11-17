const simpleArraySum = require('./challenge');
const testCaseFileOne = require('./testCaseFileOne');

describe('sums an array for integers', () => {
  test('adds 1 + 2 + 3 + 4 + 10 + 11  to equal 31', () => {
    expect(simpleArraySum([1, 2, 3, 4, 10, 11])).toBe(31);
  });

  test('adds 338 + 65 + 713 + 595 + 428 + 610 + 728 + 573 + 871 + 868 to equal 5789', () => {
    expect(simpleArraySum([338, 65, 713, 595, 428, 610, 728, 573, 871, 868])).toBe(5789);
  });
});

test('sums a very large array of integers', () => {
  expect(simpleArraySum(testCaseFileOne)).toBe(495619);
});
