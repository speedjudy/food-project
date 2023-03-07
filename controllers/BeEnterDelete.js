import Entertainer from "models/EntertainmentSchema";

export default function BeChefDelete(req, res) {
  let { id } = req.body;
  Entertainer.deleteMany({ id: id })
    .then((response) => {
      res.status(200).json({
        success: true,
        result: response,
      });
    })
    .catch((err) => {
      res.status(422).json({
        error: err,
      });
    });
}
