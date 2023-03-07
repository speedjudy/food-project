import React from "react";
import Base from "@layouts/Baseof";
import RoomAll from "@components/RoomAll/RoomAll.js"

const bookachef = () => {
  return (
    <>
      <Base>
        <div className="mt-12">
          <div className="container">
            <RoomAll />          
          </div>
        </div>
      </Base>
    </>
  );
};

export default bookachef;
