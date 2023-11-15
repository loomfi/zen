import * as crypto from "crypto";
import * as jose from "jose"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default eventHandler(async event => {
    const body = await readBody(event)
    var username = body['username']
    var password = body['password']
    const user = await prisma.user.findFirst({where:{username:username}})
    console.log(user)
    if (username == 'admin' && password == crypto.createHash('sha256').update('admin').digest('hex')) {
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