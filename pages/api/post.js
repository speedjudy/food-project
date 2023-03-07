import dbConnect from '../../lib/utils/dbConnect'
import User from '../../models/signupSchema'

dbConnect();
export default async function handler(req, res) {
    // password hashing
    console.log(req.body, "this is req.body") 
    try{
         User.findOne({phone: req.body.phone}).then((user) =>{
            if (user){
                return res.status(422).json({ errors: [{ user: "user already exist" }] });
            }
            else {
                const newUser =  new User({
                    name:req.body.name,
                    phone : req.body.phone,
                    email:req.body.email,            
                    password: req.body.password,
                    gender:req.body.address,
                    category: req.body.category
                })
                res.json({status: 'ok', data: req.body})
                newUser.save();
            }
        });    
    }
    catch(error){
        console.log("database error", error.message)
    }
}
