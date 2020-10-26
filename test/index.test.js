import validator from 'parameter-validator';
import Activity from '../src/index';
import { SPORTS } from '../src/constants';

const { ParameterValidationError } = validator;

describe('Activity', () => {
  describe('constructor', () => {
    test('Should reject negative duration or distance', () => {
      expect(() => {
        const run = new Activity({ type: 'running', distance: -10, duration: -60 });
        run.getSportTypes();
      }).toThrow(ParameterValidationError);
    });

    test('Should reject non existing type', () => {
      expect(() => {
        const run = new Activity({ type: 'swimming', distance: 10, duration: 60 });
        run.getSportTypes();
      }).toThrow(ParameterValidationError);
    });
  });

  describe('getSportTypes', () => {
    test('Should return complete array of allowed types', () => {
      expect(Activity.getSportTypes()).toStrictEqual(Object.keys(SPORTS));
    });
  });
});
