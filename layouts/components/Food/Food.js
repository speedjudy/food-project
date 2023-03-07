import React, { useState, useEffect } from "react";
import FoodCardSlider from "./FoodCardSlider";
import FoodCategory from "./FoodCategory";
import { useRouter } from "next/router";
import foodpick from "../../../public/assets/pickfood.json";

const Food = () => {

  const { locale, locales, asPath } = useRouter();
  const food = foodpick.data.filter((p) => p.locale === locale);

  const [data, setData] = useState("")

  const getFoodData = async () => {
      const getData = await fetch('/api/food');
      const result = await getData.json();
      setData(result.result); 
  }

  useEffect(() => {
    getFoodData();
  }, []);


  const [category, setFoodCategory] = useState("")
  return (
    <>
      <h2 className="text-center font-sans font-black tracking-widest text-orange-500">
        {food[0].title}
      </h2>
      <div className="mt-12 flex">
        <div className="mr-24 max-sm:mr-2">
          <FoodCategory handleClick={setFoodCategory}/>
        </div>
        <div className="mt-20 w-[950px] place-content-end max-sm:w-56">
          <FoodCardSlider category={category} data={data} />
        </div>
      </div>
    </>
  );
};

export default Food;
