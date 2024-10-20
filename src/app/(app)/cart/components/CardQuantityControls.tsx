import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
        onClick={() =>
          updateItemQuantity(Number(cart_item.id), cart_item.quantity - 1)
        }
        variant={"outline"}
        size={"sm"}
        fontSize={"xs"}>
        <FaMinus />
      </Button>
      <Input
        className="w-[80px]  text-center px-3"
        value={quantity}
        onChange={(e) => {
          updateItemQuantity(Number(cart_item.id), Number(e.target.value));
        }}
      />
      <Button
        onClick={() =>
          updateItemQuantity(Number(cart_item.id), cart_item.quantity + 1)
        }
        variant={"outline"}
        size={"sm"}
        fontSize={"xs"}>
        <IoMdAdd />
      </Button>
      
      <div>
        <p>{cart_item.product_variant.unit_of_measurement?.unit}</p>
      </div>
    </div>
  );
}

export default CardQuantityControls;
