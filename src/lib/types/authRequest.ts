import { Request , Response , NextFunction } from "express";


export interface authRequest extends Request{
user:string
}