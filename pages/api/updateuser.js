import dbConnect from "@lib/utils/dbConnect";
import UpdateUser from "../../controllers/UpdateUser"

export default async function food(req, res) {
  dbConnect();

  const method = req.method;

  let result;

  switch (method) {
    case "PUT":
      result = await UpdateUser(req, res);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
