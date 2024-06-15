import { Button } from "@/components/ui/button";
import { CartItem } from "@/lib/types/cart";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import useCart from "@/lib/hooks/useCart";
import CardQuantityControls from "./CardQuantityControls";

type Props = {
  data: CartItem;
};

function CartCard({ data }: Props) {
  const { handleDeleteFromCart } = useCart(2);
  return (
    <div className="group flex flex-col gap-5 w-full border px-5 py-3 capitalize hover:scale-[1.01] transition-all cursor-pointer">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center w-full gap-5">
        <div className="relative w-full aspect-[3/2] lg:max-w-[150px] ">
          <Image
            src={"/concrete_blocks.jpeg"}
            alt="Logo"
            fill
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex items-center justify-between w-full">
            <h4 className="font-semibold">{data.product.name}</h4>
            <div className="lg:hidden">
            <CardQuantityControls quantity={data.quantity} product_id={data.product.id}/>
              </div>{" "}
          </div>
          <p className="text-shade-200 text-sm">{data.product.description}</p>
        </div>{" "}
        <div className="flex items-start lg:items-center gap-1">
          <p className="whitespace-nowrap font-bold text-2xl group-hover:text-primary-100 transition-all">
            GHS {data.product.price}
          </p>
        </div>{" "}
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="flex items-start lg:items-center gap-1 lg:gap-5 ">
          <Button
            onClick={() => handleDeleteFromCart(data.product.id)}
            className="text-primary-100"
            variant={"ghost"}
            size={"sm"}
            fontSize={"xs"}>
            <MdDeleteOutline size={20} className="mr-1" />
            Remove
          </Button>
          <Button variant={"ghost"} size={"sm"} fontSize={"xs"}>
            <FaRegHeart className="mr-2" />
            Move To Favourites
          </Button>
        </div>
        <div className="hidden lg:flex">
          <CardQuantityControls quantity={data.quantity} product_id={data.product.id}/>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default CartCard;
