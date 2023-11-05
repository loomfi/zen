<script setup lang="ts">
</script>
<template>
    <head>
        <title>Xen</title>
    </head>
    <div class="introduction">
        <h1>This is Xen.</h1>
        <p>The future of hosting at your fingertips.</p>
        <br>
        <a class="">Quick Routes:</a><br>
        <nuxt-link to="/login"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Login</button></nuxt-link>
    </div>
    <div class="xenism">
        <br>
        <h1>What is Xen?</h1>
        <p>Xen is a hosting panel developed by avnce that doesn't rely on avnce, giving you a decentralized system that you control, allowing for greater privacy.</p>
        <br>
    </div>
    <div class="l">
        <h1>Remember that you can change this place to a login screen by changing  the <code>SCREEN</code> variable in your .env file.</h1>
    </div>
    <footer class="footer">
        <p>©2023 avnce. All rights reserved.</p>
    </footer>
</template>
<style>
    .introduction {
        color: white;
        background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
        height: 100vh;
    }
        .footer {
            color: rgb(255, 255, 255);
            height: max-content;
            text-align: center;
            background-color: rgb(35, 35, 35);
    }
    .introduction a {
        margin-left: 50px;
        font-size: 150%;
    }
    .xenism {
        color: white;
        background-color: #353535;
        height: max-content;
    }
    .xenism h1 {
        text-align: center;
        font-size: 200%;
    }
    .xenism p {
        text-align: center;
    }
    .introduction p {
        margin-left: 50px;
        font-size: 150%;
        font-family: 'Courier New', Courier, monospace;
    }
    .l {
        color: white;
        background-color: #6c2b2b;
        text-align: center;
        height: 100px;
    }

    .l h1 {
        transform: translateY(5%);
        font-size: 20px;
        width: 50%;
        text-align: center;
        margin: auto;
    }
    .introduction h1 {
        font-size: 150px;
        margin-left: 50px;
        src: url('/fonts/Poppins-SemiBold.ttf') format('truetype');
        font-family: 'Poppins', sans-serif;
        width: 50%;
        word-wrap: break-word;
    }
    @media screen and (max-width: 600px) {
        .introduction h1 {
            width: 90%;
            font-size: 99px;
        }
        .l h1 {
            width: 90%;
            font-size: 20px;
        }
    }
</style>