import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password : { type: String, required: false},
    email: { type: String, required: true},
    role: {type: String, default:'user'}
},
{timestamps: true}
);

const User = mongoose.models?.User || mongoose.model('User', userSchema)

export default User;