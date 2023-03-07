import React from "react";

const CookCard = (props) => {
  return (
    <>
      <div className="mb-2 mt-2 w-72 cursor-pointer rounded-xl border border-gray-200 pt-6 shadow-lg hover:drop-shadow-2xl">
        <img
          className="ml-4 h-48 w-64 rounded-xl object-cover"
          src="https://media.gettyimages.com/id/1212690830/photo/male-chef-garnishing-food-in-kitchen.jpg?s=612x612&w=gi&k=20&c=taYANg2ysd0CVpwOzr8uJU95EnHriQ-kO0JZhlyXir4="
          alt="image"
        />
        <div className="p-4">
          <p className="mb-2 text-center font-semibold tracking-tight text-dark">
            {props.name}
          </p>
          <p className="mb-2 text-center font-semibold tracking-tight text-orange-500">
            {props.country}
          </p>
          <p className="mb-2 text-center tracking-tight text-gray-700">
            Experience: {props.experience}
          </p>
          <p className="mb-2 text-center font-semibold tracking-tight text-dark">
            {props.foodtype.map((e) => {
              return <span key={e.value}>{e.value} &nbsp;</span>;
            })}
          </p>
          <div className="mb-2 flex place-content-center">
            <img
              className="w-8"
              src="https://www.nicepng.com/png/detail/115-1150391_highly-suited-rating-star-single-png.png"
              alt="image"
            />
            <img
              className="w-8"
              src="https://www.nicepng.com/png/detail/115-1150391_highly-suited-rating-star-single-png.png"
              alt="image"
            />
            <img
              className="w-8"
              src="https://www.nicepng.com/png/detail/115-1150391_highly-suited-rating-star-single-png.png"
              alt="image"
            />
            <img
              className="w-8"
              src="https://www.nicepng.com/png/detail/115-1150391_highly-suited-rating-star-single-png.png"
              alt="image"
            />
            <img
              className="w-8"
              src="https://www.nicepng.com/png/detail/115-1150391_highly-suited-rating-star-single-png.png"
              alt="image"
            />
          </div>
          <p className="mb-2 text-center font-semibold tracking-widest text-dark">
            {props.price}
          </p>
          <div className="flex">
            <img
              className="ml-1 w-20 rounded-lg border border-orange-600"
              src="https://images.everydayhealth.com/images/what-is-a-vegan-diet-benefits-food-list-beginners-guide-alt-1440x810.jpg?sfvrsn=1d260c85_1"
              alt=""
            />
            <img
              className="ml-1 w-20 rounded-lg border border-orange-600"
              src="https://images.everydayhealth.com/images/what-is-a-vegan-diet-benefits-food-list-beginners-guide-alt-1440x810.jpg?sfvrsn=1d260c85_1"
              alt=""
            />
            <img
              className="ml-1 w-20 rounded-lg border border-orange-600"
              src="https://images.everydayhealth.com/images/what-is-a-vegan-diet-benefits-food-list-beginners-guide-alt-1440x810.jpg?sfvrsn=1d260c85_1"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CookCard;
