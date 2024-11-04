import mongoose from 'mongoose';

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        await mongoose.connect('mongodb://localhost:27017/tally-users');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error('MongoDB connection failed');
    }
};

export default connectDB;
