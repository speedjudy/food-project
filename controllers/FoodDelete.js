import Food from "../models/FoodSchema";

export default function FoodDelete(req, res) {
  let { id } = req.body;
  Food.deleteMany({ id: id })
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
