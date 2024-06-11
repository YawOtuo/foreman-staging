import React from "react";
import { MobileMenuDetails } from "../MobileMenuDetails";
import { AiFillCloseCircle } from "react-icons/ai";
import { useMobileNavStore } from "../useMobileNavStore";

const MobileMenuArea = (props: any) => {
  const { setMobileMenuStore } = useMobileNavStore();
0
  return (
    <div className={"flex flex-col "}>
      <div className="flex flex-col lg:gap-10">
        <div className={"flex-flex-col px-8"}>
          <div
            className={
              "flex w-full flex-row items-center justify-between  "
            }
          >
            <div
              className="relative aspect-[106/86]
            h-full max-h-[86px] w-full
            max-w-[106px]
          2xl:aspect-[150/122] 2xl:max-h-[122px] 2xl:max-w-[150px]
          "
            >
              {/* <Logo size="lg" url="/terms-of-service" /> */}
            </div>
            <button className="relative transition-transform duration-300 hover:rotate-[360deg] lg:right-10">
              <AiFillCloseCircle
                onClick={() => setMobileMenuStore(false)}
                color="white"
                size={30}
              />
            </button>
          </div>
        </div>
        <div className={""}>
          <MobileMenuDetails
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenuArea;
