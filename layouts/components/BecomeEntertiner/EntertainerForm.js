import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import countries from "@config/countries.json";
import { useRouter } from "next/router";
import enterdata from "../../../public/assets/enterform.json";

const EntertainerForm = () => {

  const router = useRouter()
  const { locale, locales, asPath } = useRouter();
  const enter = enterdata.data.filter((p) => p.locale === locale);
  
  //states of getting data from form
  const [lang, setLang] = useState(locale);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [experience, setExperience] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState();
  const [selectedType, setSelectedType] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState(null);

  useEffect(() => {
    setLang(locale)
  },[locale])

  function handleSelectCountry(data) {
    setCountry(data);
  }

  function hanldeImageChange(e) {
    setImages(URL.createObjectURL(e.target.files[0]));
  }

  //toggle for result showing
  const [toggle, setToggle] = useState(false);

  const genreListEnglish = [
    { value: "Popular music", label: "Popular music" },
    { value: "Rock", label: "Rock" },
    { value: "Pop music", label: "Pop music" },
    { value: "Hip hop music", label: "Hip hop music" },
    { value: "Jazz", label: "Jazz" },
    { value: "Rhythm and blues", label: "Rhythm and blues" },
  ];

  const genreListThai = [
    { value: "เพลงฮิต", label: "เพลงฮิต" },
    { value: "หิน", label: "หิน" },
    { value: "เพลงป๊อบ", label: "เพลงป๊อบ" },
    { value: "เพลงฮิปฮอป", label: "เพลงฮิปฮอป" },
    { value: "แจ๊ส", label: "แจ๊ส" },
    { value: "จังหวะและบลูส์", label: "จังหวะและบลูส์" },
  ];

  const typeListEnglish = [
    { value: "Comedian", label: "Comedian" },
    { value: "Singer", label: "Singer" },
    { value: "Puppeteer", label: "Puppeteer" },
  ];

  const typeListThai = [
    { value: "นักแสดงตลก", label: "นักแสดงตลก" },
    { value: "นักร้อง", label: "นักร้อง" },
    { value: "นักเชิดหุ่น", label: "นักเชิดหุ่น" },
  ];

  function handleSelectGenre(data) {
    setSelectedGenre(data);
  }

  function handleSelectType(data) {
    setSelectedType(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const getEnterData = await fetch("/api/entertainer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultGetEnterData = await getEnterData.json();
    const count = resultGetEnterData.result.length + 1;

    const EnterData = {
      id: count,
      name: name,
      phone : router.query.phone,
      language : locale,
      country: country.value,
      state: state,
      experience: experience,
      genre: selectedGenre.map((res) => res.value),
      typeofentertainer: selectedType.map((res) => res.value),
      desc: desc,
      images: images,
    };

    const postEnterData = await fetch("/api/entertainer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(EnterData),
    });

    const resultPostEnterData = await postEnterData.json();

    const updateData = {
      phone: phone,
      category: "Entertainer"
    }
    const updateUser = await fetch("/api/updateuser",{
      method: "PUT",
      headers :{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData)
    })
    const results = await updateUser.json();


    if (resultPostEnterData.success) {
      setToggle(true);
    }
  };

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <>
      <div className="flex place-content-center">
        <p className="text-3xl font-bold text-dark">{enter[0].enter}</p>
      </div>
      <div className="relative mb-3 mt-8 flex w-full flex-wrap place-content-center items-stretch">
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/name.png" alt="" />
              <input
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0"
                type="text"
                id=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={enter[0].name}
                required
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/country.png" alt="" />
              <Select
                className="ml-2 w-11/12"
                options={countries}
                placeholder={enter[0].country}
                value={country}
                onChange={handleSelectCountry}
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
                placeholder={enter[0].state}
                required
              />
            </div>
            <div
              className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3"
              role="group"
            >
              <img className="h-6" src="/images/mobileicon.png" alt="" />
              <input
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0"
                type="text"
                id=""
                value={experience == 0 ? "" : experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder={enter[0].experience}
                required
                disabled
              />
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  onClick={() => {
                    experience > 0 ? setExperience(experience - 1) : "";
                  }}
                  type="button"
                  className="rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  -
                </button>
                <button
                  type="button"
                  className="border-t border-b border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {experience}
                </button>
                <button
                  type="button"
                  onClick={() => setExperience(experience + 1)}
                  className="rounded-r-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  +
                </button>
              </div>
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/experience.png" alt="" />
              <Select
                className="ml-2 w-11/12 focus:border-transparent focus:ring-0"
                options={ lang ===  "en" ? genreListEnglish : genreListThai }
                placeholder={enter[0].genre}
                value={selectedGenre}
                onChange={handleSelectGenre}
                isMulti
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/email.png" alt="" />
              <Select
                className="ml-2 w-11/12"
                options={lang ===  "en" ? typeListEnglish : typeListThai}
                placeholder={enter[0].type}
                value={selectedType}
                onChange={handleSelectType}
                isMulti
              />
              {/* <input
                className="w-full pl-2 text-dark border-transparent focus:border-transparent focus:ring-0"
                type="text"
                id=""
                value={typeofentertainer}
                onChange={(e) => setTypeOfEntertainer(e.target.value)}
                placeholder="Type of Entertainer"
                required
              /> */}
            </div>
            <div className="pointer-event-none mb-4 items-center rounded-2xl border-2 py-2 px-3">
              <p className="mb-4 text-center text-dark">
                {enter[0].desc}
              </p>
              <textarea
                id="message"
                rows="4"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="mb-5 block w-full rounded-lg border border-transparent border-transparent p-2.5 pl-2  text-sm text-gray-900 text-dark focus:border-transparent focus:ring-0"
                placeholder={enter[0].descplace}
              ></textarea>
            </div>
            <div className="pointer-event-none mb-4 items-center rounded-2xl border-2 py-2 px-3">
              <p className="mb-4 text-center text-dark">
                {enter[0].showimage}
              </p>
              <div className="relative mb-6 mt-6 flex place-content-center">
                <input
                  type="file"
                  id="file-upload"
                  onChange={hanldeImageChange}
                  className="hidden"
                  multiple
                />
                {images === null ? (
                  <label
                    htmlFor="file-upload"
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
                    <img src={images} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div>
              <button className="h-12 w-full items-center rounded-md bg-orange-500 px-4 py-2 text-base text-sm font-bold text-white hover:bg-orange-600">
                {enter[0].button}
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
                    You are successfully registered as a Entertainer
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* alert box */}

            <div className="mt-2 text-center text-dark">
              {enter[0].sign} <br />
              <span className="cursor-pointer font-bold text-orange-500 hover:underline  hover:underline-offset-4">
                {enter[0].terms}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EntertainerForm;
