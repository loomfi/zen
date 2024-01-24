<script lang="ts">
    import {currentTheme, updateTheme} from '$lib/zen-core/themeManager'
    import {cookie} from '$lib/zen-core/cookieManager'
	import { onMount } from 'svelte';
    let f: String;
    var en;
    onMount(() => {
        const e = new cookie()
        if (e.getCookie('theme') == '') {
            e.setCookie('theme', currentTheme(), ['30','y',false])
        }
        f = e.getCookie('theme')
        en = f + "/index.css"
    });
    if (en == 'undefined/index.css') {
        en = '/addons/themes/light'
    }
</script>
<head>
    <link rel="stylesheet" href={en}>
</head>
<h1>Welcome to ZeN.</h1>