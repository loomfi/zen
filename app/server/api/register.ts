import * as crypto from 'crypto'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default eventHandler(async event => {
    const body = await readBody(event)
    var username = body['username']
    var password = body['password']
    var email = body['email']

    const user = await prisma.user.findFirst({where:{username:username}})
    if (user != null) {
        return {
            'status': 400,
            'msg': 'Username already exists.'
        }
    } else {
        var salt = crypto.randomBytes(16).toString('hex');
        var salt2 = crypto.randomBytes(16).toString('hex');
        var conjoined_password = salt2 + password + salt;
        console.log(conjoined_password);
        // const salted_password = crypto.createHash('sha256', )
        // await prisma.user.create({data: {'username': username, 'password': salted_password, 'email': email, 'role': 'user', 'salt': salt}})
        // return {
        //     'status': 200
        // }
    }
})