import { CreateUserInput } from './../schema/user.schema';
import { Request, Response } from "express";
import log from "../utils/logger";
import { createUser, findUser } from '../service/user.service'

export async function createUserHandler(req: Request, res: Response) {
    try {
        const body = req.body as any
        console.log(body)
        const user = await createUser(body); 
        return res.send(user);
    } catch (e: any) {
        log.error(e)
        return res.status(409).send(e.message)
    }
}


export async function getOwnUserHandler(req: Request, res: Response) {
    try {
        const userId = res.locals.user._id;
        const user = await findUser({_id: userId}); 
        return res.send(user);
    } catch (e: any) {
        log.error(e)
        return res.status(409).send(e.message)
    }
}