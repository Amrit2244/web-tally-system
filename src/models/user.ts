import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    resetToken?: string;
    isAdmin: boolean;
}

const UserSchema: Schema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        resetToken: { type: String },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true } // Enables createdAt and updatedAt fields
);

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
