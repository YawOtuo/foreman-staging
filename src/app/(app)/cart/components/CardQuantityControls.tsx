import { Button } from "@/components/ui/button";
import useCart from "@/lib/hooks/useCart";
import { CartItem } from "@/lib/types/cart";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

function CardQuantityControls({
  quantity,
  cart_item,
}: {
  quantity: number;
  cart_item: CartItem;
}) {
  const { updateItemQuantity } = useCart();
  return (
    <div className="w-full lg:w-fit flex justify-end items-center lg:justify-center gap-2">
      <Button
        onClick={() => updateItemQuantity(Number(cart_item.id), cart_item.quantity - 1)}
        variant={"outline"}
        size={"sm"}
        fontSize={"xs"}>
        <FaMinus />
      </Button>
      <p className="px-3">{quantity}</p>
      <Button
        onClick={() => updateItemQuantity(Number(cart_item.id), cart_item.quantity + 1)}
        variant={"outline"}
        size={"sm"}
        fontSize={"xs"}>
        <IoMdAdd />
      </Button>
    </div>
  );
}

export default CardQuantityControls;
