import Food from "../models/FoodSchema";

export default function FoodPut(req, res) {
  let { id, name, title, price, discount, image } = req.body;

  let errors = [];

  if (!id) {
    errors.push({ id: "required" });
  }

  if (!name) {
    errors.push({ name: "required" });
  }

  if (!title) {
    errors.push({ title: "required" });
  }

  if (!price) {
    errors.push({ price: "required" });
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

  const filter = {
    id : id
  }
  const updateData = {
    id: id,
    name: name,
    title: title,
    price: price,
    discount: discount,
    image: image,
  };

  Food.findOneAndUpdate(filter, updateData).then((response) => {
    res.status(200).json({
        success : true, 
        result: response
    })
  }).catch((err) => {
    res.status(422).json({
        errors: [{ error: err }],
    })
  });
}
