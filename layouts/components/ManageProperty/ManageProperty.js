import React, { useState, useEffect } from "react";
import RoomForm from "../ListyourRoom/RoomForm";
import ManageRoom from "./ManageRoom";

const ManageProperty = () => {
  const [data, setData] = useState([]);
  const [editToggle, setEditToggle] = useState(false);
  const [editData, setEditData] = useState();

  const handleEdit = (data) => {
    setEditToggle(!editToggle);
    setEditData(data);
  };

  const fetchData = async () => {
    const result = await fetch("/api/room");
    const response = await result.json();
    setData(response.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [toggle, setToggle] = useState(false);
  const [btnText, setBtnText] = useState("Add Room");

  const handleToggle = () => {
    setToggle(!toggle);
    if (!toggle) {
      setBtnText("Remove");
    } else {
      setBtnText("Add Room");
    }
  };

  return (
    <>
      <div className="flex max-sm:block">
        <div>
          <div className="flex max-sm:block">
            <p className="text-3xl font-semibold text-dark max-sm:mb-6 max-sm:text-center max-sm:text-2xl">
              MANAGE PROPERTY
            </p>
            <div className="max-sm:flex max-sm:place-content-center">
              <button
                className="ml-56 h-10 items-end rounded-md bg-orange-500 px-4 py-2 text-base text-sm font-bold text-white hover:bg-orange-600 max-sm:ml-0"
                onClick={handleToggle}
              >
                {btnText}
              </button>
            </div>
          </div>
          <div className="">
            {data.map((e) => {
              return (
                <div key={e.id}>
                  <ManageRoom
                    name={e.name}
                    address={e.address}
                    data={e}
                    handleEdit={handleEdit}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="ml-12 max-sm:ml-2">
          {toggle ? (
            <div>
              <RoomForm />{" "}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="ml-12">
          {editToggle ? (
            <div>
              <RoomForm data={editData} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ManageProperty;
