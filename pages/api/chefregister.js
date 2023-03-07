import dbConnect from "@lib/utils/dbConnect";
import BeChefDelete from "controllers/BeChefDelete";
import BeChefGet from "controllers/BeChefGet";
import BeChefPost from "../../controllers/BeChefPost";

export default async function chefregister(req, res){
    
    dbConnect();

    const method = req.method;

    let result; 
    switch (method){
        case "POST":
            result = await BeChefPost(req, res);
            break;
        case "GET":
            result = await BeChefGet(req, res)
            break;
        case "DELETE":
            result = await BeChefDelete(req, res)
            break;

        default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}