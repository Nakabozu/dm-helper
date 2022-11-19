import { writable } from 'svelte/store';

// TypeScript Helper objects
export enum ModuleMenuEnum {
    SelectModule = 0,
    Witchlight,
}

export const moduleMenuObjects = [
    {name: 'Menu', componentName: 'SelectModule', value: ModuleMenuEnum.SelectModule},
    {name: 'Wilds Beyond Witchlight', componentName: 'Witchlight', value: ModuleMenuEnum.Witchlight}
]

// State Management
export const page = writable(0);