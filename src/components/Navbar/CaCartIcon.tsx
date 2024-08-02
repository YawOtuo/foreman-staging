import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

function CaCartIcon() {
  const { cart } = useCart();

  return (
    <Link
      href={"/cart"}
      className="relative flex items-center gap-1 bg-primary text-white font-semibold rounded-md px-1 text-base">
      <IoCartOutline size={24} className="text-white" />

      {cart.totalQuantity}
    </Link>
  );
}

export default CaCartIcon;
