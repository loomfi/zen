<script setup lang="tsx">
    import {SHA256} from "jscrypto/es6/SHA256";
    const password = ''
    const username = ''
    function sendLoginCredentials(username: string, password: string) {
        var hashed_string = SHA256.hash(password).toString()
        console.log(username,hashed_string)
    }
</script>
<template>
    <head>
        <title>Xen | Login</title>
    </head>
    <div class="img">
    </div>
    <div class="arti">
        <a href="/" class="x">Xen</a> <br>
        <p>Log into Xen with your username and password.</p><br>
        <!-- <form> -->
            <label for="username:">Username:</label><br>
            <input v-model="username" type="text" placeholder="Username" required><br>
            <label for="password:">Password:</label><br>
            <input v-model="password" type="password" placeholder="Password" required><br><br>
            <button class="btn" @click="sendLoginCredentials(username, password)">Login</button><br>
            <div class="r">
                <a href="/panel/signup" class="r"> Signup </a>
                <a href="/panel/forgot" class="r">Forgot Password</a>
            </div>
        <!-- </form> -->
    </div>

</template>
<style scoped>
.img {
    background-image: url('/images/login/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    background-blend-mode: color;
    filter: blur(5.5px);
}
.arti {
    color: white;
    background-color: rgb(57, 57, 57, 0.75);
    width: max-content;
    height: fit-content;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.r {
    color: white;
    text-decoration: none;
    transition: 0.5s;
    margin-left: 10px;
    margin-bottom: 0;
    transform: translateY(-75%);
    gap: 5px;
}
.r:hover {
    color: rgb(255, 255, 255, 0.75);
    transition: 0.5s;
}
.x {
    font-size: 75px;
    font-family: 'Poppins-Bold', sans-serif;
}
.btn {
    background-color: rgb(34, 34, 34);
    width: 80%;
    height: 40px;
    border-radius: 10px;
    color: white;
    margin-bottom: 15px;
    transition: 0.5s;
}
.btn:hover {
    background-color: rgb(45, 45, 45);
    transition: 0.5s;
}
.arti input {
    gap: 10px;
    width: 80%;
    height: 40px;
    border-radius: 9.5px;
    background-color: rgb(29, 29, 29);
    text-align: center;
    transition: 500ms;
}
.arti input:focus {
    background-color: rgb(81, 81, 81);
    transition: 500ms;
}
.arti label {
    margin-right: 57%;
}
.arti p {
    width: 80%;
    word-wrap: break-word;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
</style>
