import React from "react";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import countries from "@config/countries.json";
import { useRouter } from "next/router";
import cheformdata from "../../../public/assets/cheform.json";

const ChefForm = () => {
  const router = useRouter();
  const { locale, locales, asPath } = useRouter();

  const chefdata = cheformdata.data.filter((p) => p.locale === locale);
  //states of getting data from form
  const [lang, setLang] = useState(locale);
  const [name, setName] = useState("");
  const [country, setCountry] = useState();
  const [province, setProvince] = useState("");
  const [experience, setExperience] = useState("");
  const [foodcountry, setFoodCountry] = useState([]);
  const [foodtype, setFoodType] = useState([]);
  const [dietary, setDietary] = useState([]);
  const [desc, setDesc] = useState("");
  const [dishimage, setDishImage] = useState(null);
  const [certificate, setCertificate] = useState(false);
  const [restaurant, setRestaurant] = useState(false);
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipCode] = useState();
  const [houseimage, setHouseImage] = useState(null);

  useEffect(() => {
    setLang(locale);
  }, [locale]);

  function hanldeImageChange(e) {
    setHouseImage(URL.createObjectURL(e.target.files[0]));
  }

  function handleDishImageChange(e) {
    setDishImage(URL.createObjectURL(e.target.files[0]));
  }

  //toggle for result showing
  const [toggle, setToggle] = useState(false);
  const [res, setRes] = useState(false);
  const [cert, setCert] = useState(false);

  function handleRadioRestaurantChange(event) {
    setRes(event.target.value === "yes");
    setRestaurant(event.target.value);
  }

  function handleRadioCertificateChange(event) {
    setCert(event.target.value === "yes");
    setCertificate(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const getChefData = await fetch("/api/chefregister", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultGetChefData = await getChefData.json();
    const count = resultGetChefData.result.length + 1;

    const ChefData = {
      id: count,
      name: name,
      phone: router.query.phone,
      language: locale,
      country: country.value,
      state: province,
      experience: experience,
      foodcountry: foodcountry,
      foodtype: foodtype,
      dietarytype: dietary,
      desc: desc,
      images: dishimage,
      certificate: certificate,
      restaurant: {
        location: location,
        address: address,
        city: city,
        province: province,
        zipcode: zipcode,
        resimages: houseimage,
      },
    };
    const postChefData = await fetch("/api/chefregister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ChefData),
    });

    const resultPostChefData = await postChefData.json();

    const updateData = {
      phone: phone,
      category: "Cook",
    };
    const updateUser = await fetch("/api/updateuser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    const results = await updateUser.json();

    if (resultPostChefData.success) {
      setToggle(true);
      router.push("/chefdashboard");
    }
  };

  function handleSelectCountry(data) {
    setCountry(data);
  }

  const FoodCountryListEnglish = [
    { value: "Indian", label: "Indian" },
    { value: "Thai", label: "Thai" },
    { value: "Chinease", label: "Chinease" },
  ];

  const FoodCountryListThai = [
    { value: "อินเดีย", label: "อินเดีย" },
    { value: "แบบไทย", label: "แบบไทย" },
    { value: "ชาวจีน", label: "ชาวจีน" },
  ];

  function handleFoodCountry(data) {
    setFoodCountry(data);
  }

  const FoodTypeListThai = [
    { value: "พิซซ่า", label: "พิซซ่า" },
    { value: "บาร์ ข คิว", label: "บาร์ ข คิว" },
    { value: "ซุป", label: "ซุป" },
  ];

  const FoodTypeListEnglish = [
    { value: "Pizza", label: "Pizza" },
    { value: "BBQ", label: "BBQ" },
    { value: "Soup", label: "Soup" },
  ];

  function handleFoodType(data) {
    setFoodType(data);
  }

  const DietaryListEnglish = [
    { value: "Veg", label: "Veg" },
    { value: "Non Veg", label: "Non Veg" },
    { value: "Fish", label: "Fish" },
  ];

  const DietaryListThai = [
    { value: "ผัก", label: "ผัก" },
    { value: "ไม่ใช่ผัก", label: "ไม่ใช่ผัก" },
    { value: "ปลา", label: "ปลา" },
  ];

  function handleDietaryList(data) {
    setDietary(data);
  }

  return (
    <>
      <div className="flex place-content-center">
        <p className="text-3xl font-bold text-dark max-sm:text-2xl">
          {chefdata[0].enter}
        </p>
      </div>
      <div className="relative mb-3 mt-8 flex w-auto flex-wrap place-content-center items-stretch">
        <div className="max-sm:z-[-1] max-sm:flex max-sm:place-content-center">
          <form onSubmit={handleSubmit}>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3 max-sm:z-[-1] max-sm:ml-3 max-sm:w-80">
              <img
                className="h-6 max-sm:z-[-1]"
                src="/images/name.png"
                alt=""
              />
              <input
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0 max-sm:z-[-1]"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id=""
                placeholder={chefdata[0].name}
                required
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3 max-sm:ml-3 max-sm:w-80">
              <img
                className="h-6 max-sm:z-[-1]"
                src="/images/country.png"
                alt=""
              />
              <Select
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0 max-sm:z-[-1]"
                options={countries}
                placeholder={chefdata[0].country}
                value={country}
                onChange={handleSelectCountry}
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3 max-sm:ml-3 max-sm:w-80">
              <img
                className="h-6 max-sm:z-[-1]"
                src="/images/postal.png"
                alt=""
              />
              <input
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0 max-sm:z-[-1]"
                type="text"
                id=""
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                placeholder={chefdata[0].state}
                required
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3 max-sm:ml-3 max-sm:w-80">
              <img
                className="h-6 max-sm:z-[-1]"
                src="/images/experience.png"
                alt=""
              />
              <input
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0 max-sm:z-[-1]"
                type="text"
                id=""
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder={chefdata[0].experience}
                required
              />
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className="rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  -
                </button>
                <button
                  type="button"
                  className="border-t border-b border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  1
                </button>
                <button
                  type="button"
                  className="rounded-r-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  +
                </button>
              </div>
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3 max-sm:ml-3 max-sm:w-80">
              <img className="h-6" src="/images/food.png" alt="" />
              <Select
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0 max-sm:z-[-1]"
                options={
                  lang === "en" ? FoodCountryListEnglish : FoodCountryListThai
                }
                placeholder={chefdata[0].foodcountry}
                value={foodcountry}
                onChange={handleFoodCountry}
                isMulti
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3 max-sm:ml-3 max-sm:w-80">
              <img
                className="h-6 max-sm:z-[-1]"
                src="/images/food.png"
                alt=""
              />
              <Select
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0 max-sm:z-[-1]"
                options={lang === "en" ? FoodTypeListEnglish : FoodTypeListThai}
                placeholder={chefdata[0].foodtype}
                value={foodtype}
                onChange={handleFoodType}
                isMulti
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3 max-sm:ml-3 max-sm:w-80">
              <img className="h-6" src="/images/diet.png" alt="" />
              <Select
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0 max-sm:z-[-1]"
                options={lang === "en" ? DietaryListEnglish : DietaryListThai}
                placeholder={chefdata[0].diet}
                value={dietary}
                onChange={handleDietaryList}
                isMulti
              />
            </div>
            <div className="pointer-event-none mb-4 items-center rounded-2xl border-2 py-2 px-3 max-sm:ml-3 max-sm:w-80">
              <p className="mb-4 text-center text-dark">{chefdata[0].desc}</p>
              <textarea
                id="message"
                rows="4"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="mb-5 block w-full rounded-lg border border-transparent border-transparent p-2.5 pl-2 text-sm text-gray-900 text-dark focus:border-transparent focus:ring-0"
                placeholder={chefdata[0].descplace}
              ></textarea>
            </div>
            <div className="pointer-event-none mb-4 items-center rounded-2xl border-2 py-2 px-3 max-sm:ml-3 max-sm:w-80">
              <p className="mb-4 text-center text-dark">
                {chefdata[0].dishimage}
              </p>
              <div className="relative mb-6 mt-6 flex place-content-center">
                <input
                  type="file"
                  id="dishimage"
                  onChange={handleDishImageChange}
                  className="hidden"
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
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3 max-sm:ml-3 max-sm:w-80">
              <img className="h-6" src="/images/certificate.jpg" alt="" />
              <p className="ml-4 max-sm:w-96 max-sm:text-sm">
                {chefdata[0].certificate}
              </p>
              <div className="relative ml-12 flex w-96 place-content-end items-stretch pl-12 max-sm:ml-0 max-sm:w-56">
                <div className="max-sm:mr-01 mr-5 flex items-end">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="yes"
                    onChange={handleRadioCertificateChange}
                    name="default-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value="no"
                    onChange={handleRadioCertificateChange}
                    name="default-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            {cert ? (
              <div className="pointer-event-none mb-4 items-center rounded-2xl border-2 py-2 px-3 max-sm:ml-3 max-sm:w-80">
                <p className="mb-4 text-center text-dark">
                  Add Your Certificate Image
                </p>
                <div className="relative mb-6 mt-6 flex place-content-center">
                  <input
                    type="file"
                    id="dishimage"
                    onChange={handleDishImageChange}
                    className="hidden"
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
            ) : (
              ""
            )}
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3 max-sm:ml-3 max-sm:w-80">
              <img className="h-6" src="/images/postal.png" alt="" />
              <p className="ml-4 max-sm:w-96 max-sm:text-sm">
                {chefdata[0].restaurant}
              </p>
              <div className="relative ml-12 flex w-96 place-content-end items-stretch pl-12 max-sm:ml-0 max-sm:w-56">
                <div className="mr-5 flex items-end">
                  <input
                    id="restCheckYes"
                    type="radio"
                    onChange={handleRadioRestaurantChange}
                    value="yes"
                    name="restaurant"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="restCheckNo"
                    type="radio"
                    value="no"
                    onChange={handleRadioRestaurantChange}
                    name="restaurant"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            {res ? (
              <div>
                <div className="flex max-sm:ml-3 max-sm:w-80">
                  <div className="mr-2 mb-6 mt-6 w-96 rounded-2xl border-2 py-2 px-3">
                    <div className="relative flex place-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="mb-4 h-12 w-12 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </div>
                    <p className="mb-2 text-center text-xl text-dark">
                      {chefdata[0].house}
                    </p>
                    <div className="relative flex place-content-center">
                      <input
                        id="restaurantorhouse"
                        type="radio"
                        value="house"
                        name="check"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                    </div>
                  </div>
                  <div className="mr-2 mb-6 mt-6 w-96 rounded-2xl border-2 py-2 px-3">
                    <div className="relative flex place-content-center">
                      <img
                        src="/images/restaurant.png"
                        className="mb-4 h-12 w-12"
                        alt=""
                      />
                    </div>
                    <p className="mb-2 text-center text-xl text-dark">
                      {chefdata[0].res}
                    </p>
                    <div className="relative flex place-content-center">
                      <input
                        id="restaurantorhouse"
                        type="radio"
                        value="restaurant"
                        name="check"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
                  <img className="h-6" src="/images/postal.png" alt="" />
                  <input
                    className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0"
                    type="text"
                    id=""
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={chefdata[0].location}
                    required
                  />
                </div>
                <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
                  <img className="h-6" src="/images/postal.png" alt="" />
                  <input
                    className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0"
                    type="text"
                    id=""
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={chefdata[0].address}
                    required
                  />
                </div>
                <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
                  <img className="h-6" src="/images/postal.png" alt="" />
                  <input
                    className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0"
                    type="text"
                    id=""
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={chefdata[0].city}
                    required
                  />
                </div>
                <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
                  <img className="h-6" src="/images/country.png" alt="" />
                  <input
                    className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0"
                    type="text"
                    id=""
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder={chefdata[0].province}
                    required
                  />
                </div>
                <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
                  <img className="h-6" src="/images/country.png" alt="" />
                  <input
                    className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0"
                    type="text"
                    id=""
                    value={zipcode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder={chefdata[0].zip}
                    required
                  />
                </div>
                <div className="pointer-event-none mb-4 items-center rounded-2xl border-2 py-2 px-3">
                  <p className="mb-4 text-center text-dark">
                    {chefdata[0].resimage}
                  </p>
                  <div className="relative mb-6 mt-6 flex place-content-center">
                    <input
                      type="file"
                      id="hosueimage"
                      onChange={hanldeImageChange}
                      className="hidden"
                      multiple
                    />
                    {houseimage === null ? (
                      <label
                        htmlFor="hosueimage"
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
                      <div>
                        <img className="w-48" src={houseimage} alt="" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="max-sm:ml-3 max-sm:w-80">
              <button className="h-12 w-full items-center rounded-md bg-orange-500 px-4 py-2 text-base text-sm font-bold text-white hover:bg-orange-600">
                {chefdata[0].button}
              </button>
            </div>

            {/* alert box */}
            {toggle ? (
              <div className="py-4 text-center lg:px-4">
                <div
                  className="flex items-center bg-lime-500 p-2 leading-none text-dark lg:inline-flex lg:rounded-full"
                  role="alert"
                >
                  <FontAwesomeIcon className="mr-5" icon={faCheckCircle} />
                  <span className="mr-2 flex-auto text-left font-semibold">
                    You are successfully registered as a Chef
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* alert box */}

            <div className="mt-2 text-center text-dark">
              {chefdata[0].sign} <br />
              <span className="cursor-pointer font-bold text-orange-500 hover:underline  hover:underline-offset-4">
                {chefdata[0].terms}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChefForm;
