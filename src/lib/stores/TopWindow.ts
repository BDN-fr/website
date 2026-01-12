import { writable, type Writable } from 'svelte/store';

export const topWindow: Writable<null | string> = writable(null);
