import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

function CaCartIcon() {
  const { cart } = useCart();

  return (
    <Link href={"/cart"} className="relative">
      <IoCartOutline size={25} className="text-primary" />
      <p className="absolute text-[10px] font-bold bottom-0 right-0 text-white bg-black rounded-full aspect-square w-[11px] flex items-center justify-center">{cart.totalQuantity}</p>
    </Link>
  );
}

export default CaCartIcon;
