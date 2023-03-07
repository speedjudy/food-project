import dbConnect from "@lib/utils/dbConnect";
import BeEnterGet from "controllers/BeEnterGet";
import BeEnterPost from "../../controllers/BeEnterPost";
import BeEnterDelete from "../../controllers/BeEnterDelete"

export default async function chefregister(req, res){
    dbConnect();

    const method = req.method;

    let result; 
    switch (method){
        case "POST":
            result = await BeEnterPost(req, res);
            break;
        case "GET":
            result = await BeEnterGet(req, res)
            break;
        case "DELETE":
            result = await BeEnterDelete(req, res);
            break;
        default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}