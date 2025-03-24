import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json())

app.use(express.urlencoded({extended:true}))


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// routes
import facultyRouter from './routes/faculty.routes.js'

app.use("/api/v1/faculty",facultyRouter)

export {app}