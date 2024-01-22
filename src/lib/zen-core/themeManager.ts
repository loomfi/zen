import { writable } from "svelte/store"
import { fetch } from "popsicle";

export var theme = writable(await (await fetch(`http://localhost:5173/api/get_theme`)).text())

export function currentTheme() {
    var themeN;
    theme.subscribe((value) => {
        themeN = value
    });
    return `/addons/themes/${themeN}`
}

export function updateTheme(themeName: string) {
    theme.set(themeName)
}