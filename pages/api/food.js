import dbConnect from "@lib/utils/dbConnect";
import FoodPost from "controllers/FoodPost";
import FoodGet from "controllers/FoodGet";
import FoodPut from "controllers/FoodPut"
import FoodDelete from "controllers/FoodDelete";

export default async function food(req, res){
    dbConnect();

    const method = req.method;

    let result; 

    switch (method){
        case "POST":
            result = await FoodPost(req, res);
            break;
        case "GET":
            result = await FoodGet(req, res);
            break;
        case "PUT":
            result = await FoodPut(req, res);
            break;
        case "DELETE":
            result = await FoodDelete(req, res);
            break;
        default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}