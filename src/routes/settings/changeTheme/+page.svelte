<script lang="ts">
    import {currentTheme} from '$lib/zen-core/themeManager'
    import {cookie} from '$lib/zen-core/cookieManager'
	import { onMount } from 'svelte';
    let f: String;
    var en: any;
    onMount(() => {
        const e = new cookie()
        if (e.getCookie('theme') == '') {
        }
        f = e.getCookie('theme')
        en = f + "/index.css"
    });
    if (en == 'undefined/index.css') {
        en = '/addons/themes/light'
    }

    function clight() {
        new cookie().updateCookie('theme', '/addons/themes/light', ['30','y',true])
        window.location.reload()
    }
    function cdark() {
        new cookie().updateCookie('theme', '/addons/themes/dark', ['30','y',true])
        window.location.reload()
    }
</script>
<head>
    <link rel="stylesheet" href={en}>
</head>
<div class="login">
    <div id="loadOverlay" style="background-color:#333; position:absolute; top:0px; left:0px; width:100%; height:100%; z-index:2000;"></div>
    <h1>Change the zenith theme</h1>
    <button on:click={clight}>Change to light</button>
    <button on:click={cdark}>Change to dark</button>
</div>