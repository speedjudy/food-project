import React from "react";
import Base from "@layouts/Baseof";
import ChefAll from "@layouts/components/ChefAll.js/ChefAll";


const bookachef = () => {
  return (
    <>
      <Base>
        <div className="mt-12">
          <div className="container">
            <ChefAll />          
          </div>
        </div>
      </Base>
    </>
  );
};

export default bookachef;
