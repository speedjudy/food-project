import { Schema, model, models } from "mongoose";

const schmeachef = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    language: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    experience: {
      type: String,
    },
    foodcountry: {
      type: Array,
    },
    foodtype: {
      type: Array,
    },
    dietarytype: {
      type: Array,
    },
    desc: {
      type: String,
    },
    images: {
      type: String,
    },
    certificate: {
      type: String,
    },
    restaurant: {
      location: {
        type: String,
      },
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      province: {
        type: String,
      },
      zipcode: {
        type: Number,
      },
      resimages: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const Chef = models.schmeachef || model("schmeachef", schmeachef);
export default Chef;
