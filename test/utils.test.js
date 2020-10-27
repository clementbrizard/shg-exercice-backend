import fromKmInMinToKmPerHour from '../src/utils';

describe('fromKmInMinToKmPerHour', () => {
  test('Should compute 10 km/h', () => {
    expect(fromKmInMinToKmPerHour(20, 120)).toStrictEqual(10);
  });
});
