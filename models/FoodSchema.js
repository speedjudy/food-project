import { Schema, model, models } from "mongoose";
const FoodS = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
    },
    phone : {
      type : String,
    },
    language : {
      type : String,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    category: {
      type : String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Food = models.FoodS || model("FoodS", FoodS);
export default Food;
