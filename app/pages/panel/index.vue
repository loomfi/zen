<script setup lang="ts">
    var user = ""
    const js = await useFetch('https://api.ipify.org')
    try {
        // Check the session utilising the sessionManager API & checks the JSON web tokens.
        const x = await useFetch('/api/authentication/sessionManager', {
            'method': 'POST',
            'body': {
                'cookie': useCookie('authentication').value,
                'ip': js.data.value,
            }
        })
        if (x.data.value?.valid == false) {
            useCookie('authentication').value = null
            navigateTo('/panel/login')
        }
        else {
            user = x.data._rawValue.username
        }
    } catch (e) {
        navigateTo('/panel/login')
    }
</script>
<template>
    <nav class="nav">
        <a href="/" class="logo"><strong>Xen</strong></a>
        <div class="dropdown">
            <button>{{user}}</button>
            <div class="dropdown-content" style="float: left;transform: translateX(-25%);">
                <a href="https://blog.hubspot.com/">Blog</a>
                <a href="https://academy.hubspot.com/">Academy</a>
                <a href="/panel/logout">Logout</a>
            </div>
        </div>
    </nav>
</template>
<style scoped>
    .dropdown {
        display: inline-block;
        position: relative;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        width: 125%;
        text-align: center;
        overflow: auto;
        background-color: #1e1e1e;
        border-radius: 10px;
        transition: 500ms;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .dropdown-content a {
        display: block;
        color: #ffffff;
        padding: 5px;
        text-decoration: none;
        transition: 500ms;
    }
    .dropdown-content a:hover {
        color: #FFFFFF;
        background-color: #4dff8285;
        border-radius: 10px;
    }

    .nav {
        display: flex;
        flex-direction: row;
        background-color: rgb(41, 41, 41);
        color: white;
    }
    .logo:hover {
        color: rgb(123, 181, 108);
       
    }
    .logo {
        font-family: 'Poppins-Bold', sans-serif;
        font-size: 3rem;
        margin-left: 1rem;
        font-size: 50px;
        transition: 500ms;
    }
    
    .nav .dropdown {
        margin-left: auto;
        margin-right: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        transition: 500ms;
        align-items: center;
        align-self: center;
    }
</style>