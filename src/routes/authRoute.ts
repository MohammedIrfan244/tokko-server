import { registerUser } from "../controller/authController";
import tryCatch from "../lib/util/tryCatch";
import express from "express"


const route=express.Router()

route.post("/register",tryCatch(registerUser))




export default route