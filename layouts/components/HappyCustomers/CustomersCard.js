import React from "react";

const CustomersCard = () => {
  return (
    <>
      <div className="border-dark-800 w-full bg-gray-100 rounded-tl-3xl mr-3 rounded-br-3xl border shadow dark:border-gray-700 dark:bg-gray-800 max-sm:mb-24">
        <div className="-z-8 -mt-12 flex flex-col items-center pb-10">
          <img
            className="mb-3  h-24 w-24 rounded-full shadow-lg"
            src="/images/profile.png"
            alt="Bonnie image"
          />
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
          <p className="mb-1 ml-5 mr-5 text-center text-sm font-bold text-gray-900 dark:text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of lorem ipsum is that it has a more.
          </p>
        </div>
          <div className="flex ml-5 mb-5 place-content-center">
            <span className="text-lg mr-5 font-sans text-dark font-bold text-center">
              Ama Amphonma
              <br />
              <span className="text-sm mr-5 font-sans text-gray-700 font-light">
                CEO & Founder
              </span>
            </span>
            <div className="flex">
              <img src="/images/img.png" alt="" />
              <img src="/images/img.png" alt="" />
            </div>
          </div>
      </div>
    </>
  );
};

export default CustomersCard;
