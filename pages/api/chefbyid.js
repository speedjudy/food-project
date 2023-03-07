import dbConnect from "@lib/utils/dbConnect";
import ChefGetById from "controllers/ChefGetById";


export default async function chefbyid(req, res){
    
    dbConnect();

    const method = req.method;

    let result; 
    switch (method){
        case "GET":
            result = await ChefGetById(req, res) 
            break;

        default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}