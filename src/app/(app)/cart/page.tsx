"use client";

import CartPage from "./components/CartPage";

function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-[90%]">
        <CartPage />
      </div>{" "}
    </div>
  );
}

export default Page;
