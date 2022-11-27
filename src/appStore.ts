import { writable, type Writable } from 'svelte/store';

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
export const page: Writable<number> = writable(1);
export const chapter: Writable<number> = writable(2);
export const topic: Writable<number> = writable(7);

// Module Selection Management
export const witchlightChaptersList = [
    "Chapter Select",
    "Chapter 1: Witchlight Carnival",
    "Chapter 2: Hither",
    "Chapter 3: Thither",
    "Chapter 4: Yon",
    "Chapter 5: Palace of Heart's Desire"
];

export const hitherTopicsList = [
    "Topic Select",
    "Hither Overview",
    "Slanty Tower",
    "Telemy Hill",
    "Brigands' Tollway",
    "Downfall",
    "Bavlorna's Cottage",
    "Owells"
];