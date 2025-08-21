import mongoose from "mongoose";
// using nosql db such as mongodb by mongoose package
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