# shg-exercice-backend

A little package to manage sport activities.

An activity can be a run, a walk or a bicycle ride. It has a distance and a duration. A specific run is defined for marathons.

The package allows to check activity validity (with a maximum speed for each activity type) and to compute an amount of points, depending on the type, distance and/or duration of the activity.

## Examples
```js
import { Activity, Marathon } from '@clementbrizard/sport-activities';

// Get allowed activity types
console.log(Activity.getSportTypes())
// => ['running', 'cycling', 'walking']

// 10 km run in one hour
const run = new Activity('running', 10, 60);

// A run is rewarded with 5 pts as basis + 1O pts / km
console.log(run.getPoints());
// => 5 + 10 * 10 = 105 pts

// 70 km ride in two hours
const ride = new Activity('cycling', 70, 120);

// 2.5 km walk in 30 min
const walk = new Activity('walking', 2.5, 30);

// A marathon is only described by its duration (here 119 min)
const marathon = new Marathon(119);

console.log(marathon.isValid())
// => False, the maximum speed is set to 15 km/h and here it was greater than 22 km/h
```

## Development
Check your Node version is at least `12.x`.

```bash
$ git clone git@github.com:clementbrizard/shg-exercice-backend.git
$ cd shg-exercice-backend
$ npm i
```

### Test
```bash
$ npm test
```

### Lint
```bash
$ npm run lint
```