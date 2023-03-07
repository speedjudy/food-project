import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import Select from "react-select";
import { useRouter } from "next/router";
import rooms from "../../../public/assets/room.json";

const RoomForm = (props) => {
  
  const { locale, locales, asPath } = useRouter();
  const room = rooms.data.filter((p) => p.locale === locale);

  const [lang, setLang] = useState(locale);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focus, setFocus] = useState(START_DATE);
  const [name, setName] = useState(
    props.data == null ||
      props.data == undefined ||
      props.data == ""
      ? ""
      : props.data.name
  );
  const [address, setAddress] = useState(
    props.data == null ||
      props.data == undefined ||
      props.data == ""
      ? ""
      : props.data.address
  );
  const [country, setCountry] = useState(
    props.data == null ||
      props.data == undefined ||
      props.data == ""
      ? ""
      : props.data.country
  );
  const [state, setState] = useState(
    props.data == null ||
      props.data == undefined ||
      props.data == ""
      ? ""
      : props.data.state
  );
  const [zipcode, setZipcode] = useState(
    props.data == null ||
      props.data == undefined ||
      props.data == ""
      ? ""
      : props.data.zipcode
  );
  const [typeofstay, setTypeofStay] = useState("");
  const [roomtype, setTypeofRoom] = useState("");
  const [amenities, setAmenities] = useState("");
  const [scenary, setScenary] = useState("");
  const [peoplestay, setPeopleStay] = useState(
    props.data == null ||
      props.data == undefined ||
      props.data == 0
      ? 0
      : props.data.peoplestay
  );
  const [price, setPrice] = useState(
    props.data == null ||
      props.data == undefined ||
      props.data == 0
      ? ""
      : props.data.baseprice
  );
  const [desc, setDesc] = useState(
    props.data == null ||
      props.data == undefined ||
      props.data == ""
      ? ""
      : props.data.desc
  );
  const [images, setImages] = useState(null);

  useEffect(() => {
    setLang(locale)
  },[locale])

  const stayListEnglish = [
    { value: "Hotel", label: "Hotel" },
    { value: "Apartment", label: "Apartment" },
    { value: "Hostels", label: "Hostels" },
    { value: "Guest House", label: "Guest House" },
    { value: "Villas", label: "Villas" },
    { value: "Holiday Home", label: "Holiday Home" },
    { value: "Resorts", label: "Resorts" },
  ];

  const stayListThai = [
    { value: "โรงแรม", label: "โรงแรม" },
    { value: "อพาร์ทเม้น", label: "อพาร์ทเม้น" },
    { value: "หอพัก", label: "หอพัก" },
    { value: "เกสต์เฮ้าส์", label: "เกสต์เฮ้าส์" },
    { value: "วิลล่า", label: "วิลล่า" },
    { value: "วันหยุดที่บ้าน", label: "วันหยุดที่บ้าน" },
    { value: "รีสอร์ท", label: "รีสอร์ท" },
  ];

  const roomListEnglish = [
    { value: "Suite", label: "Suite" },
    { value: "Deluxe", label: "Deluxe" },
    { value: "Twins", label: "Twins" },
  ];

  const roomListThai = [
    { value: "ห้องชุด", label: "ห้องชุด" },
    { value: "ดีลักซ์", label: "ดีลักซ์" },
    { value: "ฝาแฝด", label: "ฝาแฝด" },
  ];

  const amenitiesListEnglish = [
    { value: "Wifi", label: "Wifi" },
    { value: "FrontPorch", label: "Front Porch" },
    { value: "Washer", label: "Washer" },
  ];

  const amenitiesListThai = [
    { value: "ไวไฟ", label: "ไวไฟ" },
    { value: "ระเบียงหน้า", label: "ระเบียงหน้า" },
    { value: "เครื่องซักผ้า", label: "เครื่องซักผ้า" },
  ];

  const scenaryListEnglish = [{ value: "Beach", label: "Beach" }];

  const scenaryListThai = [{ value: "ชายหาด", label: "ชายหาด" }];

  function handleSelectScenary(data) {
    setScenary(data);
  }

  function handleSelectHouse(data) {
    setTypeofStay(data);
  }

  function handleSelectRoom(data) {
    setTypeofRoom(data);
  }

  function handleSelectAmenities(data) {
    setAmenities(data);
  }

  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };
  function hanldeImageChange(e) {
    setImages(URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const getRoomData = await fetch("/api/room");

    const roomResult = await getRoomData.json();
    const count = roomResult.result.length + 1;

    const data = {
      id: count,
      name: name,
      email: "email@email.com",
      address: address,
      country: country,
      state: state,
      zipcode: zipcode,
      typeofstay: typeofstay,
      roomtype: roomtype,
      amenities: amenities,
      scenary: scenary,
      peoplestay: peoplestay,
      basePrice: price,
      startDate: startDate,
      endDate: endDate,
      desc: desc,
      images: images,
    };

    const postRoomData = await fetch("/api/room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const roomPostResult = await postRoomData.json();
  };

  return (
    <>
      <div className="flex place-content-center">
        <p className="text-3xl font-bold text-dark max-sm:text-xl max-sm:mt-8">{room[0].enter}</p>
      </div>
      <div className="relative mb-3 mt-8 flex w-full flex-wrap place-content-center items-stretch">
        <div className="w-96">
          <form onSubmit={handleSubmit}>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/name.png" alt="" />
              <input
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0"
                type="text"
                id=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={room[0].name}
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
                placeholder={room[0].address}
                required
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/country.png" alt="" />
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-md border-transparent bg-transparent p-2.5 text-dark outline-none focus:border-transparent focus:ring-0"
              >
                <option className="bg-transparent text-dark" hidden>
                {room[0].country}
                </option>
                <option className="bg-transparent text-dark">Pakistan</option>
                <option className="bg-transparent text-dark">England </option>
                <option className="bg-transparent text-dark">French</option>
              </select>
            </div>
            <div
              className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3"
              role="group"
            >
              <img className="h-6" src="/images/country.png" alt="" />
              <input
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0"
                type="text"
                id=""
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder={room[0].state}
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
                onChange={(e) => setZipcode(e.target.value)}
                placeholder={room[0].zipcode}
                required
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/email.png" alt="" />
              <Select
                className="ml-2 w-11/12 focus:border-transparent focus:ring-0"
                options={lang ===  "en" ? stayListEnglish : stayListThai}
                placeholder={room[0].stay}
                value={typeofstay}
                onChange={handleSelectHouse}
                isMulti
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/email.png" alt="" />
              <Select
                className="ml-2 w-11/12 focus:border-transparent focus:ring-0"
                options={lang ===  "en" ? roomListEnglish : roomListThai}
                placeholder={room[0].roomtype}
                value={roomtype}
                onChange={handleSelectRoom}
                isMulti
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/email.png" alt="" />
              <Select
                className="ml-2 w-11/12 focus:border-transparent focus:ring-0"
                options={lang ===  "en" ? amenitiesListEnglish : amenitiesListThai}
                placeholder={room[0].amenities}
                value={amenities}
                onChange={handleSelectAmenities}
                isMulti
              />
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/email.png" alt="" />
              <Select
                className="ml-2 w-11/12 focus:border-transparent focus:ring-0"
                options={lang ===  "en" ? scenaryListEnglish : scenaryListThai}
                placeholder={room[0].scenary}
                value={scenary}
                onChange={handleSelectScenary}
                isMulti
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
                value={peoplestay == 0 ? "" : peoplestay}
                onChange={(e) => setPeopleStay(e.target.value)}
                placeholder={room[0].staypeople}
                required
                disabled
              />
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  onClick={() => {
                    peoplestay > 0 ? setPeopleStay(peoplestay - 1) : "";
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
                  {peoplestay}
                </button>
                <button
                  type="button"
                  onClick={() => setPeopleStay(peoplestay + 1)}
                  className="rounded-r-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  +
                </button>
              </div>
            </div>
            <div className="pointer-event-none mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <img className="h-6" src="/images/email.png" alt="" />
              <input
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0"
                type="text"
                id=""
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder={room[0].price}
                required
              />
            </div>
            <div className="pointer-event-none mb-4 rounded-2xl border-2 py-2 px-3">
              <DateRangePickerCalendar
                startDate={startDate}
                endDate={endDate}
                focus={focus}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                onFocusChange={handleFocusChange}
                locale={enGB}
              />
            </div>
            <div className="pointer-event-none mb-4 items-center rounded-2xl border-2 py-2 px-3">
              <p className="mb-4 text-center text-dark">
              {room[0].desc}
              </p>
              <textarea
                id="message"
                rows="4"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="mb-5 block w-full rounded-lg border border-transparent border-transparent p-2.5 pl-2 text-sm text-gray-900 text-dark focus:border-transparent focus:ring-0"
                placeholder={room[0].descplace}
              ></textarea>
            </div>
            <div className="pointer-event-none mb-4 items-center rounded-2xl border-2 py-2 px-3">
              <p className="mb-4 text-center text-dark">
              {room[0].image}
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
                      {room[0].drag}
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
              {room[0].button}
              </button>
            </div>
            <div className="mt-2 text-center text-dark">
              {room[0].sign} <br />
              <span className="cursor-pointer font-bold text-orange-500 hover:underline  hover:underline-offset-4">
              {room[0].terms}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RoomForm;
