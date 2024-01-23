import { writable } from "svelte/store"
import axios from 'axios';

var theme = writable(await axios.get('/api/themes').then(function (response) {return response.data}).catch(function() {}))
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