import { Schema, model, models } from "mongoose";
const EnterSchema = new Schema(
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
    language : {
      type : String,
    },
    country: {
      type: Array,
    },
    state: {
      type: String,
    },
    experience: {
      type: String,
    },
    genre: {
      type: Array,
    },
    typeofentertainer: {
      type: Array,
    },
    desc: {
      type: String,
    },
    images: {
      type: String,
    },
  },
  { timestamps: true }
);

const Entertainment =
  models.EnterSchema || model("EnterSchema", EnterSchema);
export default Entertainment;
