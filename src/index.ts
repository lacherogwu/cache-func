export function cacheFunc<T extends (...args: any[]) => any>(fn: T): T {
	let val: any;
	return ((...args: Parameters<T>): ReturnType<T> => {
		if (val === undefined) {
			val = fn(...args);
		}
		return val;
	}) as T;
}
