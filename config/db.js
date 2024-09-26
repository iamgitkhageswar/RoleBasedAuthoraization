const mongoose=require("mongoose")
const connectionDb=async()=>{
    try {
        const connectDb= await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected succsessfully....👍")
        
    } catch (error) {
        console.log("mongodb connection failed...!");
        process.exit(1)    
    }
}
module.exports=connectionDb