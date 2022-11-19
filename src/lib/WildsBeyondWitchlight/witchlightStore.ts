import { writable, type Writable } from 'svelte/store';

export const witchlightChapter: Writable<number> = writable(2);
export const hitherTopic: Writable<number> = writable(3);