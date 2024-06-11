"use client";

import FetchingState from "@/components/FetchingState";
import { Button } from "@/components/ui/button";
import useFavourites from "@/lib/hooks/useFavourites";
import { Favourite } from "@/lib/types/favourite";
import { MdKeyboardArrowLeft } from "react-icons/md";
import FavouriteCard from "./components/FavouriteCard";
import CardCartSkeleton from "../cart/components/CartCardSkeleton";
import PCSkeleton from "@/components/ProductCard/PCSkeleton";

function Page() {
  const { favouritesData, isFavouritesLoading, favouritesError } =
    useFavourites(1);

  return (
    <div className="w-full flex-col gap-2 px-5 lg:px-10">

      <div className="flex flex-col items-start lg:gap-x-5 ">
        <Button variant={"ghost"} size={"lg"} className="!px-0">
          <MdKeyboardArrowLeft className="mr-2" />
          Back{" "}
        </Button>
        <p className="text-xl font-semibold">My Favourites</p>
      </div>

      <div className="flex flex-col w-full pt-5 gap-x-5  min-h-screen gap-y-5 ">
        <FetchingState
          className={"grid grid-cols-1 lg:grid-cols-4 w-full gap-5"}
          success={favouritesData?.map((r: Favourite) => (
            <div className="" key={r?.id}>
              <FavouriteCard data={r} />
            </div>
          ))}
          skeletonCount={6}
          loading={
            <div className=" mb-5">
              <PCSkeleton />
            </div>
          }
          isLoading={isFavouritesLoading}
          isError={favouritesError}
        />
      </div>
    </div>
  );
}

export default Page;