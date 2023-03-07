import schmeachef from "models/ChefSchema";

export default function BeChefPost(req, res) {

  let {
    id,
    name,
    phone,
    language,
    country,
    state,
    experience,
    foodcountry,
    foodtype,
    dietarytype,
    desc,
    images,
    certificate,
    restaurant,
  } = req.body;

  let { location, address, city, province, zipcode, resimages } = restaurant;

  let errors = [];

  if (!id) {
    errors.push({ id: "required" });
  }

  if (!name) {
    errors.push({ name: "required" });
  }

  if (!country) {
    errors.push({ country: "required" });
  }

  if (!state) {
    errors.push({ state: "required" });
  }

  if (!experience) {
    errors.push({ experience: "required" });
  }

  if (!foodcountry) {
    errors.push({ foodcountry: "required" });
  }

  if (!foodtype) {
    errors.push({ foodtype: "required" });
  }

  if (!dietarytype) {
    errors.push({ dietarytype: "required" });
  }

  if (!desc) {
    errors.push({ desc: "required" });
  }

  if (!images) {
    errors.push({ images: "required" });
  }

  if (!certificate) {
    errors.push({ certificate: "required" });
  }

  if (!location) {
    errors.push({ location: "required" });
  }

  if (!address) {
    errors.push({ address: "required" });
  }

  if (!city) {
    errors.push({ city: "required" });
  }

  if (!province) {
    errors.push({ province: "required" });
  }

  if (!zipcode) {
    errors.push({ zipcode: "required" });
  }

  if (!resimages) {
    errors.push({ resimages: "required" });
  }

  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  schmeachef.findOne({ name: name }).then((chef) => {
    if (chef) {
      return res.status(422).json({ errors: [{ chef: "chef already exist" }] });
    } else {
      const chefData = new schmeachef({
        id: id,
        name: name,
        phone: phone,
        language: language,
        country: country,
        state: state,
        experience: experience,
        foodcountry: foodcountry,
        foodtype: foodtype,
        dietarytype: dietarytype,
        desc: desc,
        images: images,
        certificate: certificate,
        restaurant: {
          location: location,
          address: address,
          city: city,
          province: province,
          zipcode: zipcode,
          resimages: resimages,
        },
      });

      chefData
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
