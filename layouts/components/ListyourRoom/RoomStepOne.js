import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Modal from "react-modal";
import "react-phone-input-2/lib/material.css";
import { useRouter } from "next/router";
import rooms from "../../../public/assets/room.json";

const RoomStepOne = () => {

  const router = useRouter();

  const { locale, locales, asPath } = useRouter();
  const room = rooms.data.filter((p) => p.locale === locale);

  const [phone, setPhone] = useState();
  const [otp, setOtp] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const arr = [];

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

  const Verify = (e) => {
    e.preventDefault();
    const useOTP = arr.join("");
    if (useOTP == otp) {
      router.push("/cheform");
    }
  };

  return (
    <div>
      <h2 className="text-dark-500 pt-12 text-center text-5xl font-bold tracking-widest max-sm:text-2xl">
        {room[0].create}
      </h2>
      <div className="place-content-center content-center">
        <p className="mt-12 text-center text-3xl font-black text-dark max-sm:text-xl">
          {room[0].phone}
        </p>
        <div className="relative mb-3 mt-8 flex w-full flex-wrap place-content-center items-stretch">
          <div className="w-88 rounded rounded-md border border-dark">
            <PhoneInput
              country={"us"}
              specialLabel=""
              value={phone}
              onChange={(e) => setPhone(e)}
            />
          </div>
        </div>
        <div className="relative mb-3 mt-8 flex w-full flex-wrap place-content-center items-stretch">
          <button
            className="hover:bg-gray mb-32 h-[40px] w-[300px] rounded-md bg-dark px-4 py-2 text-lg text-lg font-bold text-white"
            onClick={sendMessage}
          >
            {room[0].continue}
          </button>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={Verify}>
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
                  inputmode="numeric"
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
                  inputmode="numeric"
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
                  inputmode="numeric"
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
    </div>
  );
};

export default RoomStepOne;
