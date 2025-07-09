import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        console.log("MONGODB_URI from env:", process.env.MONGODB_URI); // DEBUG
        const connectionIstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST : ${connectionIstance.connection.host} \n`);
        
    } catch (error) {
        console.log("MONGODB connection Error ", error);
        process.exit(1)
        
    }
}


export default connectDB