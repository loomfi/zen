import * as crypto from 'crypto'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default eventHandler(async event => {
    const body = await readBody(event)
    var username = body['username']
    var password = body['password']
    var email = JSON.parse(JSON.stringify(body['email']))
    email = email._value

    const usr = await prisma.user.findFirst({where:{username:username}})
    if (usr != null) {
        return {
            'status': 400,
            'msg': 'Username already exists.'
        }
    } else {
        var salt = crypto.randomBytes(16).toString('hex');
        var salt2 = crypto.randomBytes(16).toString('hex');
        var conjoined_password = salt2 + password + salt;
        const salted_password = crypto.createHash('sha256').update(conjoined_password).digest('hex');
        await prisma.user.create({data: {'username': username, 'password': salted_password,'salt1': salt, 'salt2': salt2, 'email': email}})
        return {
            'status': 200,
            'msg': 'User created.'
        }
    }
})
