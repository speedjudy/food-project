import React from "react";

const ManageProperty = () => {
  return (
    <>
      <p className="text-3xl font-semibold text-dark">MANAGE PROPERTY</p>
      <div className="mt-4 flex">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-ideas-white-palette-1639423211.jpg"
          alt=""
          className="mt-4 w-48 rounded-xl"
        />
        <div className="mt-8 ml-7 flex">
          <div>
            <p className="text-xl font-bold text-dark">
              Cempaka Indah Land, City Park
            </p>
            <div className="mt-6 flex">
              <img
                src="https://www.nicepng.com/png/detail/115-1150391_highly-suited-rating-star-single-png.png"
                className="mr-4 w-8"
                alt=""
              />
              <p className="text-gray-400">4.8</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-7 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p>684 Redbud Drive, SuraBaya, East...</p>
            </div>
          </div>
          <div className="ml-7 mt-2">
            <p className="text-dark font-semibold">Edit</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProperty;
