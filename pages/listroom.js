import Base from "@layouts/Baseof";
import RoomStepOne from "@layouts/components/ListyourRoom/RoomStepOne";
import React from "react";

const listroom = () => {
  return (
    <>
      <Base>
        <section className="section">
          <div className="container">
            <RoomStepOne />
          </div>
        </section>
      </Base>
    </>
  );
};

export default listroom;
