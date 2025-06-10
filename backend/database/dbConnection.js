import mongoose from "mongoose";


export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName : "Bus_Ticket_Booking"
    }).then(()=>{
        console.log("connected to data base");
    }).catch((err)=>{
        console.log(`some error occur while connecting data base ${err}`);
        
    });
}