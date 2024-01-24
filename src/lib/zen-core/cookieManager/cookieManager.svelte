<script lang="ts" context="module">
    export class cookie {
            constructor() {
            }
            getCookie(cookie_name: string) {
                let c_name = `${cookie_name}=`;
                let dc = decodeURIComponent(document.cookie)
                let c = dc.split(';')
                for (let i = 0; i < c.length; i++) {
                    let cn = c[i];
                    while (cn.charAt(0) == ' ') {
                        cn = cn.substring(1);
                    } if (cn.indexOf(cookie_name) == 0) {
                        return cn.substring(cookie_name.length, cn.length).split('=')[1]
                    }
                }
                return "";
            }
            setCookie(cookie_name: string, cookie_value: string, options: any) {
                if (options != undefined) {
                    let d = new Date()
                    const [expiry, expiry_mode, secure] = options;
                    if (expiry != undefined && expiry_mode != undefined) {
                        if (expiry_mode == 'd') {
                            d.setTime(d.getTime() + (expiry * 86400000))
                        } else if (expiry_mode == 'm') {
                            d.setTime(d.getTime() + (expiry * 2678400000))
                        } else if (expiry_mode == 'y') {
                            d.setTime(d.getTime() + (expiry * 32140800000))                    
                        } else {
                            d.setTime(d.getTime() + (expiry * 32140800000))
                        }
                    }
                    if (secure == true && secure != undefined) {
                        document.cookie = `${cookie_name}=${cookie_value};expires=${d.toUTCString()};path=/; secure; SameSite=strict`;
                    } else {
                        document.cookie = `${cookie_name}=${cookie_value};expires=${d.toUTCString()};path=/; SameSite=strict`;
                    }
                } else {
                    document.cookie = `${cookie_name}=${cookie_value};expires=0;path=/; SameSite=strict`
                }
            }
            updateCookie(cookie_name: string, cookie_value: string, options: any) {
                this.deleteCookie(cookie_name)
                this.setCookie(cookie_name, cookie_value, options)
            }
            deleteCookie(cookie_name: string) {
                document.cookie = `${cookie_name}=; Max-Age=-1`
            }
    }
</script>