import React, { useState, useEffect, useLayoutEffect } from "react";
import AddNew from "./AddNew";
import FoodCard from "./FoodCard";

const ManageFood = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await fetch("/api/food");
    const response = await result.json();
    setData(response.result);
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <div className="flex max-sm:place-content-center">
        <div className="mb-8 text-center text-3xl font-bold text-dark max-sm:text-center">
          Manage Dishes
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1 max-sm:grid-cols-1">
        {data.map((e) => {
          return (
            <div key={e.id} className="mb-4">
              <FoodCard
                id={e.id}
                title={e.title}
                price={e.price}
                discount={e.discount}
                imagesrc={e.image}
              />
            </div>
          );
        })}
        <AddNew />
      </div>
    </>
  );
};

export default ManageFood;
