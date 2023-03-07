import React from "react";
import { useRouter } from "next/router";
import foodpick from "../../../public/assets/pickfood.json";

const FoodCategory = (props) => {
  const { locale, locales, asPath } = useRouter();
  const food = foodpick.data.filter((p) => p.locale === locale);

  return (
    <>
      <div className="h-96 overflow-y-scroll pr-12 scrollbar scrollbar-thin scrollbar-thumb-orange-500">
        <div
          className="w-24 cursor-pointer max-sm:w-20"
          onClick={() => props.handleClick("American")}
        >
          <img className="rounded-full" src="/images/american.png" alt="" />
          <p className="mt-2 text-center text-xl font-bold text-dark">
            {food[0].category1}
          </p>
        </div>
        <div
          className="w-24 cursor-pointer max-sm:w-20"
          onClick={() => props.handleClick("Thai")}
        >
          <img className="mt-7 rounded-full" src="/images/thai.png" alt="" />
          <p className="mt-2 text-center text-xl font-bold text-dark">
            {food[0].category2}
          </p>
        </div>
        <div
          className="w-24 cursor-pointer max-sm:w-20"
          onClick={() => props.handleClick("Italian")}
        >
          <img className="mt-7 rounded-full" src="/images/italian.png" alt="" />
          <p className="mt-2 text-center text-xl font-bold text-dark">
            {food[0].category3}
          </p>
        </div>
        <div
          className="w-24 cursor-pointer max-sm:w-20"
          onClick={() => props.handleClick("Chinese")}
        >
          <img className="mt-7 rounded-full" src="/images/chinese.png" alt="" />
          <p className="mt-2 text-center text-xl font-bold text-dark">
            {food[0].category4}
          </p>
        </div>
      </div>
    </>
  );
};

export default FoodCategory;
