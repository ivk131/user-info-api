import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password:String,
    profileImage: String,
    id:String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var User = mongoose.model('User', userSchema);

export default User;