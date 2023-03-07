import Entertainer from "models/EntertainmentSchema";

export default function BeEnterGet(req, res){
    Entertainer.find({}).then((response) => {
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