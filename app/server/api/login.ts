import * as crypto from "crypto";
export default eventHandler(async event => {
    const body = await readBody(event)
    var username = body['username']
    var password = body['password']
    if (username == 'admin' && crypto.createHash('sha256').update(password).digest('hex') == crypto.createHash('sha256').update('admin').digest('hex')) {
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