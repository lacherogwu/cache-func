const cache = new WeakMap();
export function cacheFunc<T extends (...args: any[]) => any>(fn: T): T {
	return ((...args: Parameters<T>): ReturnType<T> => {
		if (!cache.has(fn)) {
			cache.set(fn, fn(...args));
		}
		return cache.get(fn);
	}) as T;
}
