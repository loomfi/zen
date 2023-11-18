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
    <head>
        <title>Xen | Dashboard</title>
    </head>
    <nav class="nav">
        <a href="/" class="logo"><strong>Xen</strong></a>
        <div class="dropdown">
            <button>{{user}}</button>
            <div class="dropdown-content" style="float: left;transform: translateX(-25%);">
                <a href="/panel/settings">Settings</a>
                <a href="/panel/logout">Logout</a>
            </div>
        </div>
    </nav>
    <!-- <div class="welcome">
        <h1>Hello, {{user}}!</h1>
        <p>Welcome to the Xen panel.</p>
    </div> -->
    <br>
    <div class="panel">
        <h1 class="poppins">My servers:</h1>
        <div class="servers-grid">
            <div class="servers">
                <h1 class="f">Server A</h1>
                <p><Icon name="tabler:network" color="white" /> 127.0.0.1:4094</p>
                <p><Icon name="fluent:ram-20-regular" color="white" />RAM: 1/8GB</p>
                <p><Icon name="mdi:storage" color="white" /> Storage: 18GB</p>
                <p><Icon name="carbon:ibm-z-os-ai-control-interface" color="white" /> OS: Xen Beta</p>
                <p><Icon name="heroicons-outline:status-online" color="white" /> Currently Online!</p>
            </div>
        </div>
    </div>

</template>
<style scoped>
    .servers-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }
    .servers {
        background-color: #1e1e1e;
        border-radius: 10px;
        width: fit-content;
        transition: 500ms;
    }
    .servers .f {
        font-family: 'Poppins-Light', sans-serif;
        font-size: 50px;
        transition: 500ms;
        color: white;
        text-align: center;
    }
    .panel .poppins {
        font-family: 'Poppins-Bold', sans-serif;
        font-size: 40px;
        transition: 500ms;
        color: white;
        text-align: center;
    }
    .welcome {
        margin-left: 15%;
    }
    .welcome h1 {
        font-family: 'Poppins-Bold', sans-serif;
        font-size: 3rem;
        margin-left: 1rem;
        word-wrap: break-word;
        width: 60%;
        transform: translateX(-20px);
        margin-top: 5%;
        font-size: 60px;
        transition: 500ms;
        color: white;
    }
    .welcome p {
        color: white;
        font-size: 1.5rem;
        transition: 500ms;
    }
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