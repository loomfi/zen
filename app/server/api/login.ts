import * as crypto from "crypto";
import * as jose from "jose"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default eventHandler(async event => {
    const body = await readBody(event)
    var username = body['username']
    var password = body['password']
    const user = await prisma.user.findFirst({where:{username:username}})
    if (user != null) {
        const salted_password = crypto.createHash('sha256').update(user?.salt2 + password + user?.salt1).digest('hex')
        if (salted_password == user?.password) {
            return {
                'msg': 'Login successful! Redirecting you...',
                'redirect': '/panel',
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