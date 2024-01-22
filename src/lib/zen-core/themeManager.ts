import { writable } from "svelte/store"
import got from 'got'

export async function currentTheme() {
    const {data} = await got.get('https://httpbin.org/anything')
    return '/addons/themes/light';
}