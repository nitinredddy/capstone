import { connectDB } from "./db/index.db.js";
import { app } from "./app.js";
import dotenv from 'dotenv'

dotenv.config({
    path:"./.env"
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Some error has occurred",error)
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`Server listening on port ${process.env.PORT}`)
    })
})
.catch(()=>{
    console.log("MongoDB connection failed !!! ",error)
})