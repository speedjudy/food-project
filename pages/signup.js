import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import Select from "react-select";
import Head from "next/head";
import Modal from "react-modal";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [exist, setExist] = useState(false);
  const [otp, setOtp] = useState([]);
  const [nameToggle, setNameToggle] = useState(false);
  const [passToggle, setPassToggle] = useState(false);
  const [addrToggle, setAddrToggle] = useState(false);
  const [phoneToggle, setPhoneToggle] = useState(false);
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const arr = [];
  let submitForm = async (e) => {
    e.preventDefault();
    console.log(category);
    if (
      phone.length > 0 &&
      name.length > 0 &&
      password.length > 0 &&
      address.length > 0 &&
      category.value.length > 0
    ) {
      setNameToggle(false);
      setPassToggle(false);
      setAddrToggle(false);
      setPhoneToggle(false);
      setCategoryToggle(false);

      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          password: password,
          gender: address,
          category: category.value,
        }),
      });
      const data = await response.json();

      if (data.errors) {
        if (data.errors[0].user === "user already exist") {
          setExist(true);
        }
      }
      if (data.status) {
        if (data.status == "ok") {
          await sendMessage();
        }
      }
    } else {
      if (
        name.length == 0 &&
        phone.length == 0 &&
        password.length == 0 &&
        address.length == 0 &&
        category.value.length == 0
      ) {
        setNameToggle(true);
        setPassToggle(true);
        setAddrToggle(true);
        setPhoneToggle(true);
      } else if (name.length == 0) {
        setNameToggle(true);
        setPassToggle(false);
        setAddrToggle(false);
        setPhoneToggle(false);
      } else if (phone.length == 0) {
        setNameToggle(false);
        setPassToggle(false);
        setAddrToggle(false);
        setPhoneToggle(true);
      } else if (password.length == 0) {
        setNameToggle(false);
        setPassToggle(true);
        setAddrToggle(false);
        setPhoneToggle(false);
      } else if (address.length == 0) {
        setNameToggle(false);
        setPassToggle(false);
        setAddrToggle(true);
        setPhoneToggle(false);
      }
    }
  };

  const sendMessage = async () => {
    const random = Math.floor(Math.random() * 9000 + 1000);

    const data = {
      phone: phone,
      message: `This is the One Time Verification Code For Obaki.com ${random}. Do not disclose to anyone`,
    };

    const sendmessage = await fetch("/api/sendmessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const sendMessageResponse = await sendmessage.json();

    if (sendMessageResponse.success == true) {
      setOtp(random);
      openModal();
    }
  };

  const Verify = async (e) => {
    e.preventDefault();
    const useOTP = arr.join("");
    console.log(useOTP, otp);
    if (useOTP == otp) {
      console.log(category.value);
      if (category.value == "User") {
        router.push("/login");
      } else if (category.value == "Cook") {
        router.push({
          pathname: "/cheform",
          query: { phone: phone, token: "YaBklA987sdfghjytr99LxAsdf" },
        });
      } else if (category.value == "Entertainer") {
        router.push({
          pathname: "/entertainerform",
          query: { phone: phone, token: "YaBklA987sdfghjytr99LxAsdf" },
        });
      }
    }
  };

  function handleCategory(data) {
    setCategory(data);
  }

  const CategoryList = [
    { value: "User", label: "User" },
    { value: "Cook", label: "Cook" },
    { value: "Entertainer", label: "Entertainer" },
  ];

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      position: "absolute",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "700px",
      height: "350px",
      backgrounColor: "white",
      zindex: 9,
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      {/* <!-- component --> */}
      <Head>
        <title>Obaki Chef | Sign up</title>
      </Head>
      <div className="h-screen md:flex">
        <div className="i relative hidden w-1/2 items-center justify-around overflow-hidden bg-gradient-to-tr from-orange-500 to-orange-500 md:flex">
          <div className="mt-[-500px]">
            <Link href="/">
              <div className="flex">
                <img src="/images/favicon.png" alt="" className="ml-3 w-16" />
                <p className="font-bold text-white ml-2 mt-7 hover:underline hover:underline-offset-4">Home</p>
              </div>
            </Link>
          </div>
          <div className="">
            <div className="mt-8">
              <h1 className="font-sans text-4xl font-bold text-white">
                Join us
              </h1>
              <p className="mt-1 text-white">
                A healthy meal is a click away with a food app
              </p>
              <button
                type="submit"
                className="mt-4 mb-2 block w-28 rounded-2xl bg-white py-2 font-bold text-orange-500"
              >
                <Link href="/login">Login Now</Link>
              </button>
            </div>
          </div>
          <div className="absolute -bottom-32 -left-40 h-80 w-80 rounded-full border-4 border-t-8 border-opacity-30"></div>
          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-4 border-t-8 border-opacity-30"></div>
          <div className="absolute -top-40 -right-0 h-80 w-80 rounded-full border-4 border-t-8 border-opacity-30"></div>
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full border-4 border-t-8 border-opacity-30"></div>
        </div>
        <div className="flex items-center justify-center bg-white py-10 md:w-1/2">
          <form className="bg-white">
            <h1 className="mb-1 text-2xl font-bold text-gray-800">Sign Up</h1>
            <p className="mb-7 text-sm font-normal text-gray-600">
              Welcome Back
            </p>

            <div className="pointer-event-none mb-1 flex items-center rounded-2xl border-2 py-2 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <input
                className="border border-none border-transparent pl-2 text-dark outline-none focus:border-transparent focus:outline-none focus:ring-0"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                id="name"
                placeholder="Full Name"
              />
            </div>
            {nameToggle ? <p className="text-red-500">Name is required</p> : ""}

            {/* Phone */}
            <PhoneInput
              className="mb-1 mt-2 "
              country={"us"}
              value={phone}
              onChange={(e) => setPhone(e)}
              id="phone"
              placeholder="Phone No."
            />
            {phoneToggle ? (
              <p className="text-red-500">Phone is required</p>
            ) : (
              ""
            )}
            {/* Email Address */}
            <div className="mb-4  flex items-center rounded-2xl border-2 py-2 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="border-none border-transparent pl-2 text-dark outline-none focus:border-transparent focus:ring-0"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                placeholder="Email Address (optional)"
              />
            </div>

            <div className="mb-4 mt-4 flex w-[300px] items-center rounded-2xl border-2 py-2 px-3 max-sm:w-[300px]">
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <Select
                className="w-full border-transparent pl-2 text-dark focus:border-transparent focus:ring-0"
                options={CategoryList}
                placeholder="Category"
                value={category}
                onChange={handleCategory}
              />
            </div>
            {/* Password */}
            <div className="flex items-center rounded-2xl border-2 py-2 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="border-none border-transparent pl-2 text-dark outline-none focus:border-transparent focus:outline-none focus:ring-0"
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
            </div>
            {passToggle ? (
              <p className="text-red-500">Password is required</p>
            ) : (
              ""
            )}

            {/* Category */}
            <div className="mb-4 mt-4  flex hidden items-center rounded-2xl border-2 py-2 px-3">
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <Select
                className="w-full border-transparent  pl-2 text-dark focus:border-transparent focus:ring-0"
                options={CategoryList}
                placeholder="Category"
                value={category}
                onChange={handleCategory}
              />
            </div>
            {/* Address */}
            <div className="mb-4 mt-4 flex items-center rounded-2xl border-2 py-2 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
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
              <input
                className="border-none border-transparent pl-2 text-dark outline-none focus:border-transparent focus:ring-0"
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                id="address"
                placeholder="Address"
              />
            </div>
            {addrToggle ? (
              <p className="text-red-500">Address is required</p>
            ) : (
              ""
            )}
            <button
              type="submit"
              onClick={submitForm}
              className="mt-4 mb-2 block  w-full rounded-2xl border-orange-500  bg-orange-500 py-2 font-semibold text-white hover:bg-orange-600 hover:text-white"
            >
              Signup
            </button>
            <div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <form>
                  <h2 className="mt-7 text-center">Enter Verification Code</h2>
                  <div className="mt-12 ml-5 flex place-content-center">
                    <div className="mr-3">
                      <input
                        type="text"
                        inputMode="numeric"
                        id=""
                        maxLength={1}
                        minLength={1}
                        value={arr[-1]}
                        onChange={(e) => arr.push(e.target.value)}
                        className="mr-3 h-12 w-12 text-center"
                      />
                      -
                    </div>
                    <div className="mr-3">
                      <input
                        type="text"
                        inputMode="numeric"
                        id=""
                        maxLength={1}
                        minLength={1}
                        value={arr[-1]}
                        onChange={(e) => arr.push(e.target.value)}
                        className="mr-3 h-12 w-12 text-center"
                      />
                      -
                    </div>
                    <div className="mr-3">
                      <input
                        type="text"
                        inputMode="numeric"
                        id=""
                        maxLength={1}
                        minLength={1}
                        value={arr[-1]}
                        onChange={(e) => arr.push(e.target.value)}
                        className="mr-3 h-12 w-12 text-center"
                      />
                      -
                    </div>
                    <div className="mr-3">
                      <input
                        type="text"
                        inputMode="numeric"
                        id=""
                        maxLength={1}
                        minLength={1}
                        value={arr[-1]}
                        onChange={(e) => arr.push(e.target.value)}
                        className="mr-3 h-12 w-12 text-center"
                      />
                    </div>
                  </div>
                  <div className="flex place-content-center">
                    <button
                      className="mt-8 h-12 w-72 rounded-lg bg-dark text-xl font-bold text-white hover:bg-gray-500"
                      onClick={Verify}
                    >
                      Verify
                    </button>
                  </div>
                </form>
              </Modal>
            </div>
            {exist ? (
              <p className="text-center font-bold text-red-500">
                User Already Exists
              </p>
            ) : (
              ""
            )}
            <p className="mt-12 text-center text-xs text-gray-500">
              &copy;2023 Obaki.com. All rights reserved.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
