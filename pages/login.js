import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import SocialLogin from "@layouts/components/SocialLogin/socialLogin";
import Head from "next/head";
import Select from "react-select";

const lazyLoading = () => {
  return "";
};
const Login = () => {
  const [phone, setPhone] = useState(lazyLoading);
  const [password, setPassword] = useState(lazyLoading);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const [cheferror, setChefError] = useState(false);

  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    setError(false);
    setChefError(false);

    const response = await fetch("/api/logindb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phone,
        password: password,
        category: category.value,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status == "ok" && data.user) {
      if (data.category == "User") {
        router.push({
          pathname: "/",
          query: { token: data.user },
        });
      } else if (data.category == "Chef") {
        router.push({
          pathname: "/chefdashboard",
          query: { token: data.user },
        });
      } else if (data.category == "Entertainer") {
        router.push({
          pathname: "/entertainerdashboard",
          query: { token: data.user },
        });
      }
    } else if (data.status == "error") {
      setError(true);
    }
    else if (data.status == "categoryError"){
      setChefError(true);
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

  return (
    <>
      <Head>
        <title>Obaki Chef | Login</title>
      </Head>
      {/* <!-- component --> */}
      <div className="h-screen md:flex">
        <div className="relative hidden w-1/2 w-1/2 items-center justify-around overflow-hidden bg-gradient-to-tr from-orange-500 to-orange-500 md:flex">
          <div className="mt-[-500px]">
            <Link href="/">
              <div className="flex">
                <img src="/images/favicon.png" alt="" className="ml-3 w-16" />
                <p className="font-bold text-white ml-2 mt-7 hover:underline hover:underline-offset-4">Home</p>
              </div>
            </Link>
          </div>
          <div className="flex">
            <div className="w-96 mr-5">
              <h1 className="font-sans text-4xl font-bold text-white">
                <Link href="-1">Obaki.com</Link>
              </h1>
              <p className="mt-1 text-white">
                Our food app is the ultimate tool to empower your diet and reach
                your nutritional goals with the convenience of a personal chef
                at your home
              </p>
              <Link href="/signup">
                <button
                  type="submit"
                  className="mt-4 mb-2 block w-28 rounded-2xl bg-white py-2 font-bold text-orange-500"
                >
                  Sign up
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute -bottom-32 -left-40 h-80 w-80 rounded-full border-4 border-t-8 border-opacity-30"></div>
          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-4 border-t-8 border-opacity-30"></div>
          <div className="absolute -top-40 -right-0 h-80 w-80 rounded-full border-4 border-t-8 border-opacity-30"></div>
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full border-4 border-t-8 border-opacity-30"></div>
        </div>
        <div className="flex items-center justify-center bg-white py-10 max-md:ml-3 md:w-1/2">
          <form className="bg-white" onSubmit={handleSubmit}>
            <h1 className="mb-1 text-2xl font-bold text-gray-800">Login</h1>
            <p className="mb-7 text-sm font-normal text-gray-600">
              Welcome Back
            </p>
            {/* Username */}
            <PhoneInput
              className="mb-1 mt-2 w-full"
              country={"us"}
              value={phone}
              onChange={(e) => setPhone(e)}
              id="phone"
              placeholder="Phone No."
            />

            <div className="flex w-[300px] items-center rounded-xl border-2 py-2 px-3 max-sm:mt-4 max-sm:w-[300px]">
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
                className="w-full border-none border-transparent pl-2 text-dark outline-none focus:border-transparent focus:ring-0"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                id=""
                placeholder="Password"
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
            <button
              type="submit"
              className="mt-4 mb-2 block w-[300px] w-full rounded-xl bg-orange-500 py-2 font-semibold text-white hover:bg-orange-600 max-sm:w-[300px]"
            >
              Login
            </button>
            {/* <span className="ml-2 cursor-pointer text-sm hover:text-blue-500">
              <Link href="/forgetPassword">Forgot Password ? </Link>
            </span> */}
            <SocialLogin />
            {error ? (
              <div className="w-[300px] py-4 text-center lg:px-4">
                <div
                  className="flex items-center rounded-full bg-red-700 p-2 leading-none text-white lg:inline-flex lg:rounded-full"
                  role="alert"
                >
                  <span className="flex-auto text-center font-semibold">
                    Either email or password or category is incorrect
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            {cheferror ? (
              <div className="w-[300px] py-4 text-center lg:px-4">
                <div
                  className="flex items-center rounded-full bg-red-700 p-2 leading-none text-white lg:inline-flex lg:rounded-full"
                  role="alert"
                >
                  <span className="flex-auto text-center font-semibold">
                    You have not registered as a {category.value} yet!
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            <p className="mt-16 text-center text-xs text-gray-500">
              &copy;2023 Obaki.com. All rights reserved.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
