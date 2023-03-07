import schmeachef from "models/ChefSchema";

export default function ChefGetById(req, res){
    const { id } = req.query;
    schmeachef.find({ id: id }).then((response) => {
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