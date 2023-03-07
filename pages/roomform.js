import RoomForm from "@layouts/components/ListyourRoom/RoomForm";
import Base from "@layouts/Baseof";
import React from "react";

const roomform = () => {
  return (
    <Base>
      <section className="section">
        <div className="container">
          <RoomForm />
        </div>
      </section>
    </Base>
  );
};

export default roomform;
