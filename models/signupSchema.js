import {Schema, model, models} from 'mongoose'
const SigSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Please add a Name']
    },
    email:{
        type:String,
    },
    phone:{
        type: String,
        required: [true, 'Please add Phone'],
        unique: true,

    },
    password:{
        type:String,
        required:[true,'Please add password']
    },
    gender:{
        type:String,
        required:[false, 'Please select gender'],
    },
    category: {
        type: String,
        required:[false, 'Please select category'],
    }
},
    {timestamps:true})
const User = models.SigSchema || model('SigSchema',SigSchema)

export default User;