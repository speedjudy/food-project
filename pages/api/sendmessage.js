import SendMessageApi from "../../controllers/SendMessageApi";

export default async function sendmessage(req, res) {
  const method = req.method;

  let result;

  switch (method) {
    case "POST":
      result = await SendMessageApi(req, res);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
