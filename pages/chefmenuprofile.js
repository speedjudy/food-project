import React from "react";
import Base from "@layouts/Baseof";
import ChefProfileMain from "@layouts/components/ChefProfileBooking/ChefProfileMain";

const bechef = () => {
  return (
    <>
      <Base>
        <div className="mt-2">
          <div className="container">
            <ChefProfileMain />
          </div>
        </div>
      </Base>
    </>
  );
};

export default bechef;
