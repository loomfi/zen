<script lang="ts">
    import {currentTheme, updateTheme} from '$lib/zen-core/themeManager'
    import {cookie} from '$lib/zen-core/cookieManager'
	import { onMount } from 'svelte';
    let f: String;
    var en: any;
    onMount(() => {
        const e = new cookie()
        if (e.getCookie('theme') == '') {
            e.setCookie('theme', currentTheme(), ['30','y',true])
        }
        f = e.getCookie('theme')
        en = f + "/index.css"
    });
    if (en == 'undefined/index.css') {
        en = '/addons/themes/light'
    }
    var img = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
</script>
<head>
    <link rel="stylesheet" href={en}>
</head>
<div id="loadOverlay" style="background-color:#333; position:absolute; top:0px; left:0px; width:100%; height:100%; z-index:2000;"></div>
<div style={`background-image: url("${img}")`} id="login_img"></div>

<div class="login-portal">
    <div class="login">
        <form class="login-form">
            <h1 class="login-form-title">Zenith.</h1>
            <input class="login-input" placeholder="Username" required>
            <input placeholder="Password" class="login-input" required>
            <button type="submit" class="login-button">Login</button>
            
        </form>
    </div>
</div>