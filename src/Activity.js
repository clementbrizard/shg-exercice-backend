import { SPORTS } from './constants';
import fromKmInMinToKmPerHour from './utils';

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
  constructor(type, distance, duration) {
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

  /**
   * Check if all fields are valid
   * and if activity speed is not
   * too high.
   */
  isValid() {
    if (typeof this.type !== 'string' || !Activity.getSportTypes().includes(this.type)) {
      return false;
    }

    // The second condition checks if the number is positive
    if (typeof this.distance !== 'number' || Math.sign(this.distance) !== 1) {
      return false;
    }

    if (typeof this.duration !== 'number' || Math.sign(this.duration) !== 1) {
      return false;
    }

    if (fromKmInMinToKmPerHour(this.distance, this.duration) > SPORTS[this.type].maxSpeed) {
      return false;
    }

    return true;
  }

  /**
   * Compute the amount of points
   * to reward the activity.
   */
  getPoints() {
    if (!this.isValid()) {
      throw new Error('Cannot compute points of invalid activity');
    }

    /* The calculation method depends on activity type
    and is based on distance and/or duration. */
    return SPORTS[this.type].getPoints({ distance: this.distance, duration: this.duration });
  }
}

export default Activity;
