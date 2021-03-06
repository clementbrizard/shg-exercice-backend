export const SPORTS = {
  running: {
    // in km/h
    maxSpeed: 18,
    basisPoints: 5,
    pointsPerKm: 10,
    getPoints(params) { return this.basisPoints + this.pointsPerKm * params.distance; },
    marathon: {
      maxSpeed: 15,
    },
  },
  cycling: {
    maxSpeed: 50,
    basisPoints: 2,
    pointsPerKm: 2.5,
    getPoints(params) { return this.basisPoints + this.pointsPerKm * params.distance; },
  },
  walking: {
    maxSpeed: 7,
    basisPoints: 1,
    pointsPerTimestep: 5,
    timeStep: 5,
    getPoints(params) {
      const points = this.basisPoints + this.pointsPerTimestep
        * Math.floor(params.duration / this.timeStep);

      return points;
    },
  },
};

export const MINUTES_IN_HOUR = 60;

export const MARATHON_DISTANCE = 42.195;
