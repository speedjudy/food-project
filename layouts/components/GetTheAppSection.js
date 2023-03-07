import React from "react";
import { useRouter } from "next/router";
import appget from "../../public/assets/gettheapp.json";

const GetTheAppSection = () => {
  
  const { locale, locales, asPath } = useRouter();
  const appGet = appget.data.filter((p) => p.locale === locale);

  return (
    <div className="flex pl-12 max-sm:block max-sm:pl-4">
      <div className="pl-12 max-sm:hidden">
        <div className="ml-12 mt-12">
          <img className="object-auto h-96" src="/images/app.png" alt="" />
        </div>
      </div>
      <div className="mt-7 ml-12 pt-7 pl-12 max-sm:pl-0 max-sm:ml-0 max-sm:mt-0 max-sm:pt-0">
        <div>
          <h1 className="font-black max-sm:text-3xl max-sm:text-center">{appGet[0].title}</h1>
          <p className="mt-6 text-lg text-dark max-sm:text-center max-sm:text-base">{appGet[0].semititle}</p>
        </div>
        <div className="mt-6 flex max-sm:place-content-center">
          <div className="mr-6">
            <input
              className="form-check-input border-primary-500 float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexRadioDefault1"
            >
              {appGet[0].email}
            </label>
          </div>
          <div>
            <input
              className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-orange-500 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-orange-500 checked:bg-orange-500 indeterminate:bg-orange-500 focus:ring-orange-500 hover:bg-orange-500 dark:ring-offset-gray-800 dark:focus:ring-orange-500"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexRadioDefault1"
            >
              {appGet[0].phone}
            </label>
          </div>
        </div>
        <div className="flex max-sm:place-content-center">
          <input
            type="text"
            id="phoneEmail"
            className="dark:bg-dark-700 dark:border-dark-600 mt-6 mr-3 block w-96 rounded-lg border border-dark bg-white p-2.5 text-sm text-dark focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:placeholder-dark dark:focus:border-blue-500 dark:focus:ring-blue-500 max-sm:w-48"
            placeholder={appGet[0].placeholder}
          />
          <button className="btn mt-6 rounded-[10px] bg-orange-500 text-white hover:bg-orange-700 max-sm:text-sm">
          {appGet[0].button}
          </button>
        </div>
        <div className="mt-4 cursor-pointer text-xl font-black text-amber-500 max-sm:text-center">
          {appGet[0].download}
        </div>
        <div className="mt-6 flex max-sm:place-content-center ">
          <img
            className="mr-6 w-48 cursor-pointer max-sm:w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
            alt=""
          />
          <img
            className="w-48 cursor-pointer max-sm:w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GetTheAppSection;
