import Users from "../models/signupSchema";

export default function RoomDelete(req, res) {
  let { phone } = req.body;

  Users.deleteMany({ phone: phone })
    .then((e) => {
      res.status(200).json({
        success: true,
        result: e,
      });
    })
    .catch((err) => {
      res.status(422).json({
        error: err,
      });
    });
}
