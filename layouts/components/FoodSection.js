import React from "react";
import { useRouter } from "next/router";
import food from "../../public/assets/foodsection.json";

const FoodSection = () => {

  const { locale, locales, asPath } = useRouter();
  const food2 = food.data.filter((p) => p.locale === locale)

  return (
    <>
      <div className="flex max-sm:block max-sm:ml-4">
        <div className="relative mr-5 w-96 overflow-hidden rounded-lg shadow-lg max-sm:block max-sm:w-80 max-sm:mb-6">
          <img
            className="h-full w-full object-auto"
            src="https://c4.wallpaperflare.com/wallpaper/984/944/941/burger-french-fries-hamburger-wallpaper-preview.jpg"
            alt="Flower and sky"
          />
          <div className="absolute top-0 left-0 px-6 py-4">
            <h4 className="mt-12 text-4xl font-bold tracking-widest text-orange-500 max-sm:mt-5">
              {food2[0].burger}
            </h4>
            <p className="mt-4 tracking-widest text-white">{food2[0].call}</p>
            <button className="btn mt-6 rounded-[10px] bg-orange-500 text-white hover:bg-orange-700 max-sm:mt-2">
              {food2[0].order}
            </button>
          </div>
        </div>
        <div className="mr-4 max-sm:block max-sm:w-80 max-sm:mb-6">
          <div className="relative w-96 overflow-hidden rounded-lg shadow-lg max-sm:block max-sm:w-80 max-sm:mb-6">
            <img
              className="object-auto h-48 w-full"
              src="https://static.vecteezy.com/system/resources/previews/005/140/661/large_2x/vegetables-in-grocery-bag-on-yellow-background-free-photo.jpg"
              alt="Flower and sky"
            />
            <div className="absolute top-0 left-0 px-6 py-4 ">
              <h4 className="mt-4 text-4xl font-black tracking-widest text-white">
              {food2[0].food}
              </h4>
              <p className="mt-2 tracking-widest text-white">{food2[0].call}</p>
              <button className="btn mt-3 rounded-[10px] bg-orange-500 text-white hover:bg-orange-700">
              {food2[0].order}
              </button>
            </div>
          </div>
          <div className="relative w-96 mt-2 overflow-hidden rounded-lg shadow-lg max-sm:block max-sm:w-80">
            <img
              className="object-auto h-48 w-full"
              src="https://img.freepik.com/premium-photo/burger-chips-hamburger-french-fries-red-paper-box-fast-food-red-background_157927-7911.jpg"
              alt="Flower and sky"
            />
            <div className="absolute top-0 left-0 px-6 py-4">
              <h4 className="mt-4 text-4xl font-black tracking-widest text-white">
              {food2[0].combo}
              </h4>
              <p className="mt-2 tracking-widest text-white">{food2[0].call}</p>
              <button className="btn mt-3 rounded-[10px] bg-orange-500 text-white hover:bg-orange-700">
              {food2[0].order}
              </button>
            </div>
          </div>
        </div>
        <div className="relative mr-5 w-96 h-96 overflow-hidden rounded-lg shadow-lg max-sm:block max-sm:w-80">
          <img
            className="h-96 w-full object-auto"
            src="https://thumbnails.production.thenounproject.com/fFOs46bYpWSYBkvfaWqRj4WkD4M=/fit-in/1000x1000/photos.production.thenounproject.com/photos/9F58EA07-AE50-4979-944F-C37D7321DBB1.jpg"
            alt="Flower and sky"
          />
          <div className="absolute top-0 left-0 px-6 py-4">
            <br />
            <h4 className="mt-12 text-4xl font-bold tracking-widest text-white text-center">
            {food2[0].hotdog}
            </h4>
            <p className="mt-4 tracking-widest text-dark">{food2[0].call}</p>
            <button className="btn mt-6 rounded-[10px] bg-orange-500 text-white hover:bg-orange-700">
            {food2[0].order}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodSection;
