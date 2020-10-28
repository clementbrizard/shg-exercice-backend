# shg-exercice-backend

A little package to manage sport activities.

An activity can be a run, a walk or a bicycle ride. It has a distance and a duration. A specific run is defined for marathons.

The package allows to check activity validity (with a maximum speed for each activity type) and to compute an amount of points, depending on the type, distance and/or duration of the activity.

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