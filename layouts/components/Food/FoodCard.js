import React from "react";

const FoodCard = (props) => {
  return (
    <>
      <div className="relative mr-5 w-72 w-full overflow-hidden rounded-xl  border border-gray-200 shadow-lg max-sm:w-48 max-sm:rm-0">
        <img
          className="object-auto h-full w-full rounded-xl"
          src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
          alt="food image"
        />
        <div>
          <button className="absolute top-32 left-0 w-full self-end bg-dark bg-opacity-60 px-6 py-4 text-lg font-bold tracking-widest text-orange-500 max-sm:top-16 max-sm:text-base">
            {props.title}
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
