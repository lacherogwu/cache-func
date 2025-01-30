const cache = new WeakMap();
export function cacheFunc<T>(fn: (...args: any[]) => T): () => T {
	return () => {
		if (!cache.has(fn)) {
			cache.set(fn, fn());
		}
		return cache.get(fn);
	};
}
