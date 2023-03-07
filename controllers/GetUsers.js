import Users from "../models/signupSchema";

export default function FoodGet(req, res){
    Users.find({}).then((response) => {
        res.status(200).json({
            success : true, 
            result: response
        })
    }).catch((err) => {
        res.status(422).json({
            error : err
        })
    })
}