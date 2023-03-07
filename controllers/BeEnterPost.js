import Entertainment from "models/EntertainmentSchema"

export default function BeEnterPost(req, res) {
  let {
    id,
    name,
    phone,
    language,
    country,
    state,
    experience,
    genre,
    typeofentertainer,
    desc,
    images,
  } = req.body;


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

  if (!country) {
    errors.push({ country: "required" });
  }

  if (!state) {
    errors.push({ state: "required" });
  }

  if (!experience) {
    errors.push({ experience: "required" });
  }

  if (genre.length == 0) {
    errors.push({ genre: "required" });
  }

  if (typeofentertainer.length == 0) {
    errors.push({ typeofentertainer: "required" });
  }

  if (!desc) {
    errors.push({ desc: "required" });
  }

  if (!images) {
    errors.push({ images: "required" });
  }

  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  Entertainment.findOne({ name: name }).then((entertainer) => {
    if (entertainer) {
      return res
        .status(422)
        .json({ errors: [{ entertainer: "entertainer already exist" }] });
    } else {
      const entertainerData = new Entertainment({
        id: id,
        name: name,
        phone: phone,
        language : language,
        country: country,
        state: state,
        experience: experience,
        genre: genre,
        typeofentertainer: typeofentertainer,
        desc: desc,
        images: images,
      });

      entertainerData
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
