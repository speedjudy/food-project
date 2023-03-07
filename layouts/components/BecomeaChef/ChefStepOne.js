import React, { useState , useEffect } from "react";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import Modal from "react-modal";
import "react-phone-input-2/lib/material.css";
import stepone from "../../../public/assets/chefstepone.json";
import { useSession, signIn, signOut } from "next-auth/react";

const ChefStepOne = () => {

  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() =>{
    if(!status == "authenticated" || !router.query.token) {
      console.log("not authenticated")
    }
  },[])

  
  const { locale, locales, asPath } = useRouter();
  const step = stepone.data.filter((p) => p.locale === locale);

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
      router.push({
        pathname: "/cheform",
        query: { phone : phone }
      });
    }
  };

  return (
    <div>
      <h2 className="text-dark-500 pt-12 text-center text-5xl font-bold tracking-widest max-sm:text-2xl">
        {step[0].title}
      </h2>
      <div className="place-content-center content-center">
        <p className="mt-12 text-center text-3xl font-black text-dark max-sm:text-xl max-sm:mt-6">
        {step[0].semititle}
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
            className="mb-8 h-[40px] w-[300px] rounded-md bg-dark px-4 py-2 text-lg text-lg font-bold text-white hover:bg-gray-500"
            onClick={sendMessage}
          >
            {step[0].button}
          </button>
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
        </div>
      </div>
    </div>
  );
};

export default ChefStepOne;
