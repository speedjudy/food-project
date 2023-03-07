import React, { useState } from "react";

const FoodCard = (props) => {
  return (
    <>
      <div
        className="w-56 rounded-xl bg-gray-100 shadow-md">
        <img
          src="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
          className="w-56 rounded-xl"
          alt=""
        />
        <p className="mt-5 ml-2 font-bold text-dark">{props.title}</p>
        <div className="mt-2 ml-2 flex">
          <span className="mt-1 text-orange-500">$</span>
          <p className="ml-1 text-xl font-bold oldstyle-nums text-dark">
            {props.discount}
          </p>
          <p className="text-gray ml-10 mb-4 text-sm font-bold oldstyle-nums line-through">
            <span className="text-gray mt-1 mr-1">$</span>
            {props.price}
          </p>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
