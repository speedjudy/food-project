import User from '../../models/signupSchema'
import jwt from 'jsonwebtoken'

export default async function LoginHandler(req,res){
    const {name, phone, password} = req.body;
    if(!phone|| !password) {
        return res.status(422).json({error:"Please filled the field correctly"});
    }
    try{
        const user = await User.findOne({
            phone:req.body.phone,
            password:req.body.password,
        })
        
        if(user.category != req.body.category){
            return res.status(422).json({status: "categoryError"})
        }
        else if(user){
            const token = jwt.sign({
                phone:user.phone,
                password:user.password
            },
            // here we provide secret key they should be in .env file and more secure
            process.env.JWT_SECRET
            )
            return res.json({status: "ok", user :token, category: user.category})
        }
        else{
            return res.json({status: "error"})
        }
    }
    catch(error){
            return res.json({status: 'error', user :false})
        }
    

}