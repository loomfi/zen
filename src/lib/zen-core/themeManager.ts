import { writable } from "svelte/store"
import axios from 'axios';

let theme = writable('/addons/themes/dark')
await axios.get('/api/themes').then(function (response) {theme.set(response.data)}).catch(function(error) {})
export function currentTheme() {
    var themeN;
    theme.subscribe((value) => {
        themeN = value
    });
    return `${themeN}`
}

export function updateTheme(themeName: string) {
    theme.set(themeName)
}

