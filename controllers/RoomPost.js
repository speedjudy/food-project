import Room from "../models/RoomSchema";

export default function RoomPost(req, res) {
  let {
    id,
    name,
    phone,
    language,
    email,
    address,
    country,
    state,
    zipcode,
    typeofstay,
    roomtype,
    amenities,
    scenary,
    peoplestay,
    baseprice,
    startDate,
    endDate,
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
  

  if(!email){
    errors.push({ email:"required" });
  }

  if (!address) {
    errors.push({ address: "required" });
  }

  if (!country) {
    errors.push({ country: "required" });
  }

  if (!state) {
    errors.push({ state: "required" });
  }

  if (!zipcode) {
    errors.push({ zipcode: "required" });
  }

  if (!typeofstay) {
    errors.push({ typeofstay: "required" });
  }

  if (!roomtype) {
    errors.push({ roomtype: "required" });
  }

  if (!amenities) {
    errors.push({ amenities: "required" });
  }

  if (!scenary) {
    errors.push({ scenary: "required" });
  }

  if (!peoplestay) {
    errors.push({ peoplestay: "required" });
  }

  if (!baseprice) {
    errors.push({ baseprice: "required" });
  }

  if (!startDate) {
    errors.push({ startDate: "required" });
  }

  if (!endDate) {
    errors.push({ endDate: "required" });
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

  Room.findOne({ name: name }).then((e) => {
    if (e) {
      return res.status(422).json({ errors: [{ Room: "Room Already Exist" }] });
    } else {
      const room = new Room({
        id: id,
        name: name,
        phone: phone,
        language: language,
        email: email,
        address: address,
        country: country,
        state: state,
        zipcode: zipcode,
        typeofstay: typeofstay,
        roomtype: roomtype,
        amenities: amenities,
        scenarytypes: scenary,
        peoplestay: peoplestay,
        baseprice: baseprice,
        startDate: startDate,
        endDate: endDate,
        desc: desc,
        images: images,
      });

      room
        .save()
        .then((e) => {
          res.status(200).json({
            success: true,
            result: e,
          });
        })
        .catch((err) => {
          res.status(500).json({
            errors: [{ error: err }],
          });
        });
    }
  })
}
