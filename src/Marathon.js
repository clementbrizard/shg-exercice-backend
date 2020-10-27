import Activity from './Activity';
import fromKmInMinToKmPerHour from './utils';
import { SPORTS, MARATHON_DISTANCE } from './constants';

/**
 * Class representing a Marathon.
 */
class Marathon extends Activity {
  /**
   * Create a marathon
   * @param {number} duration - The duration (in min).
   */
  constructor(duration) {
    if (arguments.length !== 1) {
      throw new Error('You should only provide the duration');
    }

    super('running', MARATHON_DISTANCE, duration);
  }

  isValid() {
    // Only check duration because no other argument submitted to constructor
    if (typeof this.duration !== 'number' || Math.sign(this.duration) !== 1) {
      return false;
    }

    if (fromKmInMinToKmPerHour(this.distance, this.duration) > SPORTS.running.marathon.maxSpeed) {
      return false;
    }

    return true;
  }
}

export default Marathon;
