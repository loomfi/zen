<script setup lang="ts">
    try {
        const x = await useFetch('/api/authentication/logout', {
            'method': 'POST',
            'body': {
                'cookie': useCookie('authentication').value
            }
        })
        if (x.data.value?.valid == false) {
            useCookie('authentication').value = null
            navigateTo('/panel/login')
        }
        else {
            useCookie('authentication').value = null
            navigateTo('/panel/login')
        }
    } catch (e) {
        navigateTo('/panel/login')
    }
</script>
<template>
</template>