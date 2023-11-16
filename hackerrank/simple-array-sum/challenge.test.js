const simpleArraySum = require('./challenge');

test('adds 1 + 2 + 3 + 4 + 10 + 11  to equal 31', () => {
  expect(simpleArraySum(1, 2)).toBe(31);
});
