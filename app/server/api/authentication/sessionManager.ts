import * as jose from 'jose'
import * as crypto from 'crypto'

export default eventHandler(async event => {
    try {
        const rbody = await readBody(event)
        const cookie = rbody['cookie']
        const verifier = await jose.jwtVerify(cookie, crypto.createSecretKey(process.env.jwt_secret_key, 'utf-8'))
        if (verifier.payload.aud == process.env.jwt_audience && verifier.payload.iss == process.env.jwt_issuer && verifier.payload.exp >= Date.now()/1000) {
            return {
                'msg': 'Session is valid.',
                'username': verifier.payload.id[0],
                'valid': true,
            }
        }
        else {
            return {
                'msg': 'Session is invalid.',
                'valid': false,
                'username': '',
            }
        }
    } catch (err) {
        return {
            'msg': 'Session is invalid.',
            'valid': false,
            'username': '',
        }
    }
})