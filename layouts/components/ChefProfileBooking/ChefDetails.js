import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import { useRouter } from "next/router";

const ChefDetails = (props) => {
  const arr = [1, 2, 3, 4, 5];

  const [data, setData] = useState([]);
  const [chef, setChef] = useState([]);
  const { locale, locales, asPath } = useRouter();

  const fetchDataChef = async () => {
    const result = await fetch(`/api/chefbyid?id=${props.id}`);
    const response = await result.json();
    setChef(response.result[0]);
  };

  const fetchFoodData = async () => {
    const result = await fetch("/api/food");
    const response = await result.json();
    setData(response.result);
  };
  useEffect(() => {
    fetchFoodData();
    fetchDataChef();
  }, []);

  const filterData = data.filter((d) => {
    return d.language === locale
  })

  return (
    <>
      <div className="ml-12 mb-8">
        <div className="flex">
          <img src="/images/profile.png" alt="" className="w-40 max-sm:w-24 max-sm:h-24 max-sm:ml-[-24px] max-sm:mt-12" />
          <div className="ml-12 mt-4">
            <p className="text-2xl font-bold text-dark max-sm:text-lg">
              {chef.name} 
              <br />
              ({chef.experience} Years of Experience)
            </p>
            <p className="text-lg font-bold text-green-500 max-sm:text-sm">Exceptional 5.0</p>
            <div className="flex">
              {arr.map((e) => {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green"
                    key={e}
                    className="h-6 w-6 max-sm:h-4 max-sm:w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                );
              })}
            </div>
            <p className="max-sm:text-sm">8 Reviews</p>
            <div className="flex">
              <p className="mt-4 text-lg font-bold text-dark">Room Available</p>
              <img src="/images/bed.png" className="ml-2 mt-2 w-8" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-2 max-sm:flex max-sm:place-content-center max-sm:ml-[-48px]">
          <p>Member Since 2021</p>
        </div>
        <div className="mt-12 flex">
          <div className="">
            <p className="text-xl font-bold text-dark max-sm:flex max-sm:place-content-center max-sm:ml-[-32px] max-sm:mb-8"> Cook Speciality</p>
            <div className="mt-3 flex place-content-center max-sm:ml-[-40px]">
              <div className="">
                <img src="/images/vegan.png" alt="" className="w-24" />
                <p className="mt-2 max-sm:text-center">Vegan Friendly</p>
              </div>
              <div className="ml-5">
                <img src="/images/meat.png" alt="" className="w-[88px]" />
                <p className="mt-2 max-sm:text-center">Ham & Beef</p>
              </div>
              <div className="ml-7">
                <img
                  src="/images/pizza.png"
                  alt=""
                  className="mt-4 w-[108px]"
                />
                <p className="mt-3 max-sm:text-center">Pizza</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 ml-4">
          <p className="w-full max-sm:ml-[-32px]">{chef.desc}</p>
        </div>

        <div className="mt-8">
          <p className="text-widest mb-4 text-3xl font-black text-dark max-sm:text-center max-sm:ml-[-40px]">
            COOK MENU
          </p>
          <div className="grid grid-cols-4 gap-1 max-sm:grid-cols-1 max-sm:ml-5">
            {filterData.map((e) => {
              return (
                <div key={e.id} className="mr-3 max-sm:mb-4">
                  <FoodCard
                    id={e.id}
                    title={e.title}
                    discount={e.discount}
                    price={e.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefDetails;
