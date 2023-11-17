<script lang="ts">
import 'assets/base.css'
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>
<template class="">
    <h1>
        <div v-if="error.statusCode === 404" class="four-oh-four">
            <h1><strong>You have reached the end of the road.</strong></h1>
            <p>There is nothing here. Don't worry! We are here to take you back home!</p>

            <nuxt-link to="/"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "> Go back home</button></nuxt-link>
        </div>
        <div v-else-if="error.statusCode === 600">
            <h1>Hold your horses!</h1>
        </div>
        <div v-else>
            <h1>Something went wrong...</h1>
            {{ error }}
        </div>
    </h1>
</template>
<style>
    template {
        background-color: #2a2a2a;
    }
    .four-oh-four {
        text-align: center;
        background-color: #2a2a2a;
        color: white;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .four-oh-four button {
        text-decoration: none;
        transition: 0.5s;
        background-color: #962a2a;
    }
    .four-oh-four button:hover {
        transition: 0.5s;
        background-color: #ff0000;
    }
    .four-oh-four h1 {
        font-size: 3rem;
        font-family: 'Courier New', Courier, monospace;
    }
    .four-oh-four p {
        font-size: 1.5rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>