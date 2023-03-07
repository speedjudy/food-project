import React, { useState, useEffect } from "react";

const FoodForm = (props) => {

  const [name, setName] = useState(props.title);
  const [actual, setActual] = useState(props.price);
  const [discount, setDiscount] = useState(props.discount);
  const [dishimage, setDishImage] = useState(props.imagesrc || null);

  function handleDishImageChange(e) {
    const url = URL.createObjectURL(e.target.files[0]); 
    setDishImage(url)
  }

  const handleUpdate = async (e) =>{
    
    e.preventDefault();
    
    const FoodData = {
      id: props.id,
      name: "Ali",
      title: name,
      price: actual,
      discount: discount,
      image: dishimage,
    };

    const postFoodData = await fetch("/api/food", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FoodData),
    });

    const responseFoodData = await postFoodData.json();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const getFoodData = await fetch("/api/food", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const getFoodResult = await getFoodData.json();
    const count = getFoodResult.result.length + 1;

    const FoodData = {
      id: count,
      name: "Ali",
      title: name,
      price: actual,
      discount: discount,
      image: dishimage,
    };

    const postFoodData = await fetch("/api/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FoodData),
    });

    const responseFoodData = await postFoodData.json();
    
  };
   
  return (
    <>
      <div className="">
        <p className="text-center text-2xl font-bold text-dark">Food Details</p>
      </div>
      <div className="relative mb-3 mt-8 flex w-full flex-wrap place-content-center items-stretch">
        <div className="">
          <form className="w-72" onSubmit={props.id == 0 ? handleSubmit : handleUpdate}>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/name.png" alt="" />
              <input
                className="w-full pl-2 text-dark border-transparent focus:border-transparent focus:ring-0"
                type="text"
                id=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Title"
                required
                style={{}}
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/name.png" alt="" />
              <input
                className="w-full pl-2 text-dark border-transparent focus:border-transparent focus:ring-0"
                type="text"
                id=""
                value={actual}
                onChange={(e) => setActual(e.target.value)}
                placeholder="Actual Price"
                required
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/name.png" alt="" />
              <input
                className="w-full pl-2 text-dark border-transparent focus:border-transparent focus:ring-0"
                type="text"
                id=""
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                placeholder="Discounted Price (Optional)"
                required
              />
            </div>
            <div className="pointer-event-none mb-4 items-center rounded-2xl border-2 py-2 px-3">
              <p className="mb-4 text-center text-dark">Add your dish image</p>
              <div className="relative mb-6 mt-6 flex place-content-center">
                <input
                  type="file"
                  id="dishimage"
                  className="hidden"
                  onChange={handleDishImageChange}
                  value=""
                  multiple
                />
                {dishimage === null ? (
                  <label
                    htmlFor="dishimage"
                    className="z-20 flex h-full w-full cursor-pointer flex-col-reverse items-center justify-center"
                  >
                    <p className="z-10 text-center text-xs font-light text-gray-500">
                      Drag & Drop your files here
                    </p>
                    <svg
                      className="z-10 h-8 w-8 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                  </label>
                ) : (
                  <div className="w-48">
                    <img src={dishimage} alt="" />
                  </div>
                )}
              </div>
            </div>
            <button className="h-12 w-full items-center rounded-md bg-orange-500 px-4 py-2 text-base text-sm font-bold text-white hover:bg-orange-600">
              Add Food
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FoodForm;
