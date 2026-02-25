import { writable, readable, type Writable, type Readable } from 'svelte/store';

export const topWindow: Writable<null | string> = writable(null);

export const count: Readable<number> = readable(10, (set, update) => {
	let unsubscribe = topWindow.subscribe((uid) => {
		update((value) => (value += 1));
	});

	return () => unsubscribe();
});
