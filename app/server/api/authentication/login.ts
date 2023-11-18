import * as crypto from "crypto";
import * as jose from "jose"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default eventHandler(async event => {
    const body = await readBody(event)
    var username = body['username']
    var password = body['password']
    const ip = body['ip']
    const user = await prisma.user.findUnique({where:{username:username}})
    if (user != null) {
        const salted_password = crypto.createHash('sha256').update(user?.salt2 + password + user?.salt1).digest('hex')
        if (salted_password == user?.password) {
            // JWT FINALLY DONE
            const token = await new jose.SignJWT({id: [username, ip]}).setProtectedHeader({alg: 'HS256'}).setIssuedAt().setExpirationTime('10d').setIssuer(process.env.jwt_issuer).setAudience(process.env.jwt_audience).sign(crypto.createSecretKey(process.env.jwt_secret_key, 'utf-8'))
            return {
                'msg': 'Login successful! Redirecting you...',
                'redirect': '/panel',
                'token': token,
                'synmsg': true,
            }
        }
        return {
            'msg': 'Incorrect username or password.',
            'synmsg': false,
        }
    } else {
        return {
            'msg': 'Incorrect username or password.',
            'synmsg': false,
        }
    }
})