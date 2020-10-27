import Activity from '../src/Activity';
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

  describe('getPoints', () => {
    test('Should compute the right score for a running activty', () => {
      const run = new Activity('running', 10, 60);
      expect(run.getPoints()).toStrictEqual(105);
    });

    test('Should compute the right score for a cycling activty', () => {
      const ride = new Activity('cycling', 30, 60);
      expect(ride.getPoints()).toStrictEqual(77);
    });

    test('Should compute the right score for a walking activty', () => {
      const walk = new Activity('walking', 6, 60);
      expect(walk.getPoints()).toStrictEqual(61);
    });

    test('Should not compute the score if activity is invalid', () => {
      expect(() => {
        const swim = new Activity('swimming', 3, 60);
        swim.getPoints();
      }).toThrow(Error);
    });
  });
});
