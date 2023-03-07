import Room from "../models/RoomSchema";

export default function RoomGet(req, res){
    Room.find({}).then((response) => {
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