<script setup lang="tsx">
    import { ref } from 'vue';
    import { SHA256 } from 'jscrypto';
    var password = ref('');
    var username = ref('');
    var emails = ref('');
    var error = ref('');
    var success = ref('');
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
        }
        else {
            navigateTo('/panel')
        }
    } catch (e) {
    }
    async function register(username: string, password: string, email:string) {
        const register = await useFetch('/api/authentication/register', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: SHA256.hash(password).toString(),
                email: emails,
            })
        }) 
        if (register.data?._rawValue.status == 200) {
            success.value = register.data?._rawValue.msg
            error.value = ''
            setTimeout(() => {
                navigateTo('/panel/login')
            }, 500);
        }   else {
            success.value = ''
            error.value = register.data?._rawValue.msg
        }
         
    }
</script>
<template>
    <head>
        <title>Xen | Signup</title>
    </head>
    <div class="img">
    </div>
    <div class="arti">
        <a href="/" class="x">Xen</a> <br>
        <p>Signup for Xen with your username and password.</p><br>
        <p v-if="success != '' && success != null" class="success"><span>{{ success }}</span></p>
        <p v-if="error != '' && error != null" class="alert"><span>{{ error }}</span></p>
        <label for="username:" >Username:</label><br>
        <input type="text" v-model="username" placeholder="Username" required><br>
        <label for="email:">Email:</label><br>
        <input type="email" v-model="emails" placeholder="Email" required><br>
        <label for="password:">Password:</label><br>
        <input type="password" v-model="password" placeholder="Password" required><br><br>
        <button class="btn" @click="register(username,password,emails)">Signup</button><br>
        <div class="r">
            <a href="/panel/login" class="r">Login</a>
            <a href="/legal" class="r">Legal Hub</a>
        </div>
    </div>

</template>
<style scoped>
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

.alert span {
    pointer-events: none;
    user-select: none;
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
.img {
    background-image: url('/images/signup/background.jpg');
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
