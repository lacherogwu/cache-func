# cache-func

A utility to cache the result of a function.

## Installation

```sh
npm i cache-func
```

## Usage

```js
import { cacheFunc } from 'cache-func';

function expensiveCalculation() {
	console.log('Calculating...');
	return 42;
}

const cachedCalculation = cacheFunc(expensiveCalculation);

console.log(cachedCalculation()); // Logs "Calculating..." and then "42"
console.log(cachedCalculation()); // Logs "42" without recalculating
```

## API

### `cacheFunc(fn: Function): Function`

Wraps a function fn and returns a new function that caches the result of fn's first call and returns the cached result on subsequent calls.

## License

MIT
