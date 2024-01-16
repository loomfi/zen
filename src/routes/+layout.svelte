<script lang="ts">
    import { currentTheme, changeTheme } from "$lib/zen-core/themeManager";
    changeTheme('dark')
</script>
<head>
    <title>Zen</title>
    <link rel="stylesheet" href={currentTheme() + "/index.css"}>
</head>
<body>
    <slot />
</body>
