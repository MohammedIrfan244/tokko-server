import { Request , Response , NextFunction } from "express"
import CustomError from "../lib/util/customError"



const registerUser = async(req:Request,res:Response,next:NextFunction)=>{
    const {username,email,password}=req.body
    if(!username || !email || !password){
        return next(new CustomError("Please provide all credentials",400))
    }
    console.log(username,email,password)
    res.send("hello")
}

 

export {registerUser}