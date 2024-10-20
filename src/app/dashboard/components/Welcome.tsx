import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store/useAppStore";
import Link from "next/link";
import { FaHeart, FaLongArrowAltRight, FaShoppingCart } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";

function Welcome() {
  const { DBDetails } = useAppStore();

  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col items-start">
        <h3 className="font-semibold text-3xl">
          Welcome {DBDetails?.username}
        </h3>
        <p className="text-sm text-slate-600">
          What would you like to do today
        </p>
      </div>

      <div className="flex items-center gap-5">
        <Link href={"/store"}>
          <Button variant={"secondary"} size={"sm"} className="text-sm">
            Shop
            <FaShoppingCart className="ml-1" />
          </Button>
        </Link>
        <Link href={"/dashboard/favourites"}>
          <Button variant={"secondary"} size={"sm"} className="text-sm">
            View Favourite Items
            <FaHeart className="ml-1" />
          </Button>
        </Link>
        <Link href={"/dashboard/cart"}>
          <Button variant={"outline"} size={"sm"} className="text-sm">
            View My Cart
            <FaLongArrowAltRight className="ml-1"/>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
