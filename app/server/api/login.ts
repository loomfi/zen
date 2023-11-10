import {SHA256} from "jscrypto/es6/SHA256";
export default eventHandler(async event => {
    const body = await readBody(event)
    var username = body['username']
    var password = body['password']
    if (username == 'admin' && password == SHA256.hash('admin').toString()) {
        return {
            'msg': 'Login successful! Redirecting you...',
            'redirect': '/dashboard',
            'synmsg': true,
        }
    }
    return {
        'msg': 'Incorrect username or password.',
        'synmsg': false,
    }
})