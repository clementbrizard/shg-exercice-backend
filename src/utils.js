import { minutesInHour } from './constants';

/**
 * Given a distance in km covered during a
 * duration in min, compute the speed in km/h.
 * @param {number} distance - The distance (in km).
 * @param {number} duration  - The duration (in min).
 */
const fromKmInMinToKmPerHour = (distance, duration) => (distance / duration) * minutesInHour;

export default fromKmInMinToKmPerHour;
