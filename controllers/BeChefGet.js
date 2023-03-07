import schmeachef from "models/ChefSchema";

export default function BeChefGet(req, res){
    schmeachef.find({}).then((response) => {
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