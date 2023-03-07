import schmeachef from "models/ChefSchema";

export default function BeChefDelete(req, res) {
  let { id } = req.body;
  schmeachef.deleteMany({ id: id })
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
