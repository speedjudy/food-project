import React from "react";

const CardHero = (props) => {
  return (
    <>
      <div className="mb-2 mt-2 w-48 cursor-pointer rounded-xl border border-gray-200 pt-6 shadow-sm mr-5 max-sm:w-full">
        <div className="mb-8">
          <p className="mb-4 text-center text-lg font-bold text-dark">
            {props.heading}
          </p>
          <p className="text-center text-lg font-medium proportional-nums text-dark">
            {props.semiHeading}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardHero;
