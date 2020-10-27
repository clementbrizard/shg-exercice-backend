import Activity from '../src/index';
import { SPORTS } from '../src/constants';

describe('Activity', () => {
  describe('getSportTypes', () => {
    test('Should return complete array of allowed types', () => {
      expect(Activity.getSportTypes()).toStrictEqual(Object.keys(SPORTS));
    });
  });

  describe('isValid', () => {
    test('Should say true if activity is valid', () => {
      const run = new Activity('running', 10, 60);
      expect(run.isValid()).toBeTruthy();
    });

    test('Should say false if negative duration or distance', () => {
      const run = new Activity('running', -10, -60);
      expect(run.isValid()).toBeFalsy();
    });

    test('Should say false if non existing type', () => {
      const swim = new Activity('swimming', 3, 60);
      expect(swim.isValid()).toBeFalsy();
    });

    test('Should say false if invalid speed', () => {
      const walk = new Activity('walking', 10, 60);
      expect(walk.isValid()).toBeFalsy();
    });
  });
});
