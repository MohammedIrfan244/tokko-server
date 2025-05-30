import {Request, Response, NextFunction } from "express";

const tryCatch = <T>(fn:(req:Request,res:Response,next:NextFunction)=>Promise<T>)=>
    async ( req:Request,res:Response,next:NextFunction)=>{
        try{
           await fn(req,res,next)
        }catch(err){
            next(err)
        }
    }


export default tryCatch