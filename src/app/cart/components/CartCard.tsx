import { Button } from "@/components/ui/button";
import { CartItem } from "@/lib/types/cart";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import useCart from "@/lib/hooks/useCart";

type Props = {
  data: CartItem;
};

function CartCard({ data }: Props) {
  const { handleDeleteFromCart } = useCart(2);
  return (
    <div className="flex flex-col gap-5 w-full border px-5 py-3 capitalize hover:scale-[1.01] transition-all cursor-pointer">
      <div className="flex items-center justify-center w-full gap-5">
        <div className="relative w-full aspect-[3/2] max-w-[150px] ">
          <Image
            src={"/concrete_blocks.jpeg"}
            alt="Logo"
            fill
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <h4 className="font-semibold">{data.product.name}</h4>
          <p className="text-shade-200 text-sm">{data.product.description}</p>
        </div>{" "}
        <div className="flex items-center gap-1">
          <p className="whitespace-nowrap font-bold text-2xl">
            GHS {data.product.price}
          </p>
        </div>{" "}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex  items-center gap-5 ">
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
        <div className="flex items-center justify-center gap-2">
          <Button variant={"outline"} size={"sm"} fontSize={"xs"}>
            <FaMinus />
          </Button>
          <p className="px-3">{data.quantity}</p>
          <Button variant={"outline"} size={"sm"} fontSize={"xs"}>
            <IoMdAdd />
          </Button>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default CartCard;
