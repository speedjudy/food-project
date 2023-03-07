import dbConnect from "@lib/utils/dbConnect";
import RoomDelete from "controllers/RoomDelete";
import RoomGet from "controllers/RoomGet";
import RoomPost from "controllers/RoomPost";

export default async function room(req, res){

    dbConnect();
    const method = req.method;

    let result; 
    switch (method){
        case "POST":
            result = await RoomPost(req, res);
            break;
        case "GET":
            result = await RoomGet(req, res);
            break;
        case "DELETE":
            result = await RoomDelete(req, res);
            break;
        default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}