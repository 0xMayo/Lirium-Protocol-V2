import mongoose from 'mongoose';

export const connectDb = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
};