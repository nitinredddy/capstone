import mongoose from 'mongoose'

const DB_NAME = "capstone"

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connection established Host name: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Some error occurred while connecting to MONGODB")
    }
}

export {connectDB}