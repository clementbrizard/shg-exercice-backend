import validator from 'parameter-validator';
import { SPORTS } from './constants';

const { validate } = validator;

const validatePositiveNumber = (val) => typeof val === 'number' && Math.sign(val) === 1;

/**
 * Class representing an activity.
 */
class Activity {
  #type;

  #distance;

  #duration;

  /**
   * Create an activity.
   * @param {string} type - The type.
   * @param {number} distance - The distance (in m).
   * @param {number} duration - The duration (in min).
   */
  constructor({ type, distance, duration }) {
    // Validate the params
    validate(
      { type, distance, duration },
      [
        { type: (val) => typeof val === 'string' && Object.keys(SPORTS).includes(val) },
        { distance: (val) => validatePositiveNumber(val) },
        { duration: (val) => validatePositiveNumber(val) },
      ],
    );

    this.#type = type;
    this.#distance = distance;
    this.#duration = duration;
  }

  get type() { return this.#type; }

  get distance() { return this.#distance; }

  get duration() { return this.#duration; }

  set type(val) { this.#type = val; }

  set distance(val) { this.#distance = val; }

  set duration(val) { this.#duration = val; }

  /**
   * Get allowed activity types.
   * @return {array} The name of allowed types.
   */
  static getSportTypes() {
    return Object.keys(SPORTS);
  }
}

export default Activity;
