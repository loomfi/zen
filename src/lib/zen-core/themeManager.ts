import { writable } from "svelte/store";
import fs from 'fs'

const THEME_DIR_NAME = import.meta.env

if (THEME_DIR_NAME == 'NaN' || THEME_DIR_NAME == undefined) {
    fs.writeFileSync('.env', '');
    fs.appendFileSync('.env', 'THEME_DIR_NAME="light"\n');
    var theme = 'dark'
} else {
    theme = THEME_DIR_NAME
}

export const themeDirectory = writable(`/addons/themes/` + theme)

export function currentTheme() {
    let $val
    themeDirectory.subscribe($ => $val = $)()
    return $val
 }

export function changeTheme(theme_dir_name: string) {
    themeDirectory.set(`/addons/themes/` + theme_dir_name)
}