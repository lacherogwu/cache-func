# cache-func

A tiny utility to cache function outputs easily.

## Installation

```sh
npm i cache-func
```

## Usage

```js
import { cacheFunc } from 'cache-func';

function expensiveCalculation() {
	// it could be here anything here, like a long loop, a network request, etc.
	console.log('Calculating...');
	return 42;
}

const cachedCalculation = cacheFunc(expensiveCalculation, {
	maxAge: 5 * 60 * 1000, // Cache for 5 minutes
});

console.log(cachedCalculation()); // Logs "Calculating..." and then "42"
console.log(cachedCalculation()); // Logs "42" without recalculating
```

## API

### `cacheFunc(fn: Function, options?: { maxAge?: number }): Function`

Wraps a function fn and returns a new function that caches the result of fn's first call and returns the cached result on subsequent calls.

## License

MIT
