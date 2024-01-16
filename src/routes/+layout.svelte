<script lang="ts">
    import { currentTheme } from "$lib/xen-core/themeManager";
</script>
<head>
    <title>Xen</title>
    <link rel="stylesheet" href={currentTheme() + "/index.css"}>
</head>
<body>
    <slot />
</body>
