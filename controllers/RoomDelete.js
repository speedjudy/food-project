import Room from "../models/RoomSchema";

export default function RoomDelete(req, res) {
  let { id } = req.body;

  Room.deleteMany({ id: id })
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
