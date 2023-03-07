import Food from "../models/FoodSchema";

export default function FoodPost(req, res) {
  let { id, name, phone, language, title, price, category, discount, image } = req.body;

  let errors = [];

  if (!id) {
    errors.push({ id: "required" });
  }

  if (!name) {
    errors.push({ name: "required" });
  }

  if (!phone) {
    errors.push({ phone: "required" });
  }

  if (!language) {
    errors.push({ language: "required" });
  }

  if (!title) {
    errors.push({ title: "required" });
  }

  if (!price) {
    errors.push({ price: "required" });
  }

  if (!category) {
    errors.push({ category : "required" })
  }

  if (!discount) {
    errors.push({ discount: "required" });
  }

  if (!image) {
    errors.push({ image: "required" });
  }

  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  Food.findOne({ title: title }).then((food) => {
    if (food) {
      return res
        .status(422)
        .json({ errors: [{ FoodItem: "Food Already Exist" }] });
    } else {
      const foodData = new Food({
        id: id,
        name: name,
        phone: phone,
        language: language,
        title: title,
        price: price,
        category: category,
        discount: discount,
        image: image,
      });

      foodData
        .save()
        .then((response) => {
          res.status(200).json({
            success: true,
            result: response,
          });
        })
        .catch((err) => {
          res.status(500).json({
            errors: [{ error: err }],
          });
        });
    }
  });
}
