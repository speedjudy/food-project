import Food from "../models/FoodSchema";

export default function FoodGet(req, res){
    Food.find({}).then((response) => {
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