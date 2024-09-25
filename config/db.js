import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("Already connected")
            return mongoose.connection.asPromise()
        }
            
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected successfully")
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}

export default connectDB;