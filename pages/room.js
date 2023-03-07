import Base from "@layouts/Baseof";
import ListYourRoom from "@components/ListyourRoom/ListYourRoom"
import React from "react";

const room = () => {
  return (
    <>
      <Base>
        <section className="section">
          <div className="container">
            <ListYourRoom />
          </div>
        </section>
      </Base>
    </>
  );
};

export default room;
