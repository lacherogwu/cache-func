/**
 * Wraps a function with caching functionality.
 * Allows for caching of expensive functions like paginated API calls that rarely change.
 *
 * @param fn - The function to cache results from
 * @param options - Optional configuration for the cache behavior
 * @param options.maxAge - Maximum age of cached data in milliseconds
 * @returns A function that returns the result of the function, either from cache or fresh execution
 *
 * @example
 * ```ts
 * const cachedFunction = cacheFunc(fetchExpensiveData, {
 *   maxAge: 5 * 60 * 1000 // Cache for 5 minutes
 * });
 *
 * const result = await cachedFunction(query);
 * ```
 */
export function cacheFunc<T extends (...args: any[]) => any>(
	fn: T,
	options?: {
		maxAge?: number;
	},
): T & { clear: () => void } {
	let val: any;
	let lastRun: number | undefined;

	function wrapper(...args: Parameters<T>): ReturnType<T> {
		if (val === undefined || (options?.maxAge && lastRun !== undefined && Date.now() - lastRun > options.maxAge)) {
			val = fn(...args);
			lastRun = Date.now();
		}
		return val;
	}

	wrapper.clear = () => {
		val = undefined;
		lastRun = undefined;
	};

	return wrapper as T & { clear: () => void };
}
