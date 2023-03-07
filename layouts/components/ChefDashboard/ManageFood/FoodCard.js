import React, { useState } from "react";
import FoodForm from "./FoodForm";

const FoodCard = (props) => {
  const [toggle, setToggle] = useState(false);

  const [editToggle, setEditToggle] = useState(false);
  const [btnName, setBtnName] = useState("Edit");

  const handleUpdate = async () => {
    setEditToggle(!editToggle);
    editToggle ? setBtnName("Edit") : setBtnName("Remove");
  };

  const handleDelete = async () => {
    const data = {
      id: props.id,
    };

    const FoodDelete = await fetch("/api/food", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const FoodDeleteResponse = await FoodDelete.json();
  };

  return (
    <>
      <div
        className="w-56 rounded-xl bg-gray-100 shadow-md max-sm:w-full"
        onMouseEnter={(e) => {
          setToggle(true);
        }}
        onMouseLeave={(e) => {
          setToggle(false);
        }}
      >
        <img
          src="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
          className="w-56 rounded-xl max-sm:w-full"
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
      {toggle ? (
        <div
          className="mt-[-100px] flex max-sm:mt-[-30px] max-sm:place-content-center"
          onMouseEnter={(e) => {
            setToggle(true);
          }}
          onMouseLeave={(e) => {
            setToggle(false);
          }}
        >
          <button
            className="ml-3 mb-3 w-24 rounded bg-orange-500 text-white hover:bg-orange-600"
            onMouseEnter={(e) => {
              setToggle(true);
            }}
            onMouseLeave={(e) => {
              setToggle(false);
            }}
            onClick={handleUpdate}
          >
            {btnName}
          </button>
          <button
            className="ml-3 mb-3 w-24 rounded bg-red-700 text-white hover:bg-red-900"
            onMouseEnter={(e) => {
              setToggle(true);
            }}
            onMouseLeave={(e) => {
              setToggle(false);
            }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      ) : (
        ""
      )}
      {editToggle ? (
        <div className={toggle ? "mt-24" : "mt-[34px]" }>
          <FoodForm
            id={props.id}
            name="Ali"
            title={props.title}
            price={props.price}
            discount={props.discount}
            imagesrc={null}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FoodCard;
