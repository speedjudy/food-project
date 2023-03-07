import mongoose from 'mongoose';
const dbConnect= async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
        });
    }
    catch(error){
        console.log("Database connection error : ", error.message)
    }
}
export default dbConnect;