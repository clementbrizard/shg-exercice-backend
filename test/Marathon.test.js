import Marathon from '../src/Marathon';
import { MARATHON_DISTANCE } from '../src/constants';

describe('constructor', () => {
  test('Should not create instance from bad arguments', () => {
    expect(() => {
      const marathon = new Marathon('walking', MARATHON_DISTANCE, 180);
      marathon.getSportTypes();
    }).toThrow(Error);
  });

  test('Should set right type and distance', () => {
    const marathon = new Marathon(180);
    expect(marathon.type).toStrictEqual('running');
    expect(marathon.distance).toStrictEqual(MARATHON_DISTANCE);
  });
});

describe('isValid', () => {
  test.only('Should say false if Vaporfly', () => {
    const kipchoge = new Marathon(119);
    expect(kipchoge.isValid()).toBeFalsy();
  });
});
