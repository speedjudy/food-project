import dbConnect from "@lib/utils/dbConnect";
import GetUsers from "controllers/GetUsers";
import DeleteUser from "controllers/DeleteUser";

export default async function room(req, res){

    dbConnect();
    const method = req.method;

    let result; 
    switch (method){
        case "GET":
            result = await GetUsers(req, res);
            break;
        case "DELETE":
            result = await DeleteUser(req, res);
            break;
        default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}