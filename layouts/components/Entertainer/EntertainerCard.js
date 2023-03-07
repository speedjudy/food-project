import React from "react";

const EntertainerCard = (props) => {
  return (
    <>
      <div className="mb-2 w-72 cursor-pointer rounded-xl mt-2 pt-6 shadow-lg border border-gray-200 hover:drop-shadow-2xl">
        <img
          className="ml-4 h-48 w-64 rounded-xl object-cover"
          src="https://thumbs.dreamstime.com/b/photo-funky-dj-entertainer-guy-imagine-mixing-track-wear-green-sweatshirt-isolated-turquoise-color-background-photo-funky-dj-235566720.jpg"
          alt="image"
        />
        <div className="p-4">
          <p className="text-center text-lg tracking-widest text-dark font-bold">
            {props.name}
          </p>
          <p className="mb-2 text-center font-mono font-3xl font-black tracking-wide text-orange-500">
            {props.entertainertype}
          </p>
          <p className="mb-2 text-center font-semibold tracking-tight text-dark">
            {props.genre}
          </p>
          <p className="mb-2 text-center font-semibold tracking-tight text-orange-300">
            {props.country}
          </p>
          <p className="mb-2 text-center tracking-tight text-gray-700">
            Experience: {props.experience} Years
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
        </div>
      </div>
    </>
  );
};

export default EntertainerCard;
