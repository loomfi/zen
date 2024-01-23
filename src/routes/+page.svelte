<script lang="ts">
    import {currentTheme, updateTheme} from '$lib/zen-core/themeManager'
</script>
<head>
    <link rel="stylesheet" href={currentTheme() + "/index.css"}>
</head>
<h1>Welcome to ZeN.</h1>