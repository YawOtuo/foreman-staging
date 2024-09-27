import React from "react";
import Refund from "../terms_conditions/components/Refund";
import Delivery from "../terms_conditions/components/Delivery";

const Policies = () => {
  return (
    <div className="p-5 mx-auto md:w-1/2">
      <h1 className="font-bold text-2xl uppercase underline w-full mb-6">
        Delivery & Refunds
      </h1>
      <Delivery />
      <Refund />
    </div>
  );
};

export default Policies;
