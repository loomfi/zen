<script setup lang="tsx">
    import { ref } from 'vue';
    const password = ref('');
    const username = ref('');
    const error = ref('');
    const success = ref('');
    async function sendLoginCredentials(username: string, password: string) {
        const loginCreds = await useFetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        if (loginCreds.data?._rawValue.synmsg == true) {
            success.value = loginCreds.data?._rawValue.msg
            error.value = ''
            useCookie<{ name: string }>('user')
            setTimeout(() => {
                navigateTo(loginCreds.data?._rawValue.redirect)
            }, 500);
        }
        else {
            success.value = ''
            error.value = loginCreds.data?._rawValue.msg
        }
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
        <p v-if="success != '' && success != null" class="success"><span>{{ success }}</span></p>
        <p v-if="error != '' && error != null" class="alert"><span>{{ error }}</span></p>
        <label for="username:">Username:</label><br>
        <input v-model="username" type="text" placeholder="Username" required><br>
        <label for="password:">Password:</label><br>
        <input v-model="password" type="password" placeholder="Password" required><br><br>
        <button class="btn" @click="sendLoginCredentials(username, password)">Login</button><br>
        <div class="r">
            <a href="/panel/signup" class="r"> Signup </a>
            <a href="/panel/forgot" class="r">Forgot Password</a>
        </div>

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
.success {
    background-color: rgb(20, 11, 200);
    border-radius: 10px;
    width: 80%;
    height: 40px;
    color: white;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    margin-bottom: 15px;
}
.success:hover {
    background-color: rgb(11, 31, 255);
    transition: 0.5s;
}
.success span {
    pointer-events: none;
    user-select: none;
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
.alert span {
    pointer-events: none;
    user-select: none;
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
.alert {
    background-color: rgb(200, 11, 11);
    border-radius: 10px;
    width: 80%;
    height: 40px;
    color: white;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    margin-bottom: 15px;
}
.alert:hover {
    background-color: rgb(255, 11, 11);
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
