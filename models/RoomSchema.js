import { Schema, model, models } from "mongoose";

const HSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
    },
    phone : {
      type: String,
    },
    language : {
      type : String
    },
    email: {
      type: String,
    },
    address: {
      type: String, 
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    zipcode: {
      type: Number,
    },
    typeofstay: {
      type: Array,
    },
    amenities: {
      type: Array,
    },
    scenarytypes: {
      type: Array,
    },
    peoplestay: {
      type: String,
    },
    baseprice: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
        type : Date,
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

const Room = models.HSchema || model("HSchema", HSchema);
export default Room;
