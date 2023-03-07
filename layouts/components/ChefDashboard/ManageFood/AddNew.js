import React, { useState } from "react";
import FoodForm from "./FoodForm";

const AddNew = () => {
  const [toggle, setToggle] = useState(false);
  const [btname, setBtnName] = useState("Add New");

  const onToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      setBtnName("Add New");
    } else {
      setBtnName("Remove");
    }
  };

  return (
    <>
      <div>
        <div
          className="mt-2 h-48 w-56 cursor-pointer rounded-xl border border-gray-200 pt-12 shadow-sm max-sm:w-full"
          onClick={onToggle}
        >
          <div className="flex place-content-center ">
            {!toggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-16 w-16 text-dark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-16 w-16 text-dark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            )}
          </div>
          <p className="text-center text-dark">{btname}</p>
        </div>
        <br />
        {toggle ? (
          <div className="mt-12">
            <FoodForm id={0} name="Ali" title="" price="" discount="" imagesrc={null} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default AddNew;
