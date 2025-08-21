import mongoose from "mongoose";

export const connectdb= async ()=>{
    try{
        mongoose.connection.on("connected", ()=>console.log("db connected")
    );
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)

        }
        catch(error){
console.log(error);
    }
}