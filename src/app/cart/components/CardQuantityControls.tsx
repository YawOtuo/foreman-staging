import { Button } from "@/components/ui/button";
import useCart from "@/lib/hooks/useCart";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

function CardQuantityControls({
  quantity,
  product_id,
}: {
  quantity: number;
  product_id: number;
}) {
  const { handleIncrementQuantity, handleDecrementQuantity } = useCart();
  return (
    <div className="w-full lg:w-fit flex justify-end items-center lg:justify-center gap-2">
      <Button
        onClick={() => handleDecrementQuantity(product_id)}
        variant={"outline"}
        size={"sm"}
        fontSize={"xs"}>
        <FaMinus />
      </Button>
      <p className="px-3">{quantity}</p>
      <Button
        onClick={() => handleIncrementQuantity(product_id)}
        variant={"outline"}
        size={"sm"}
        fontSize={"xs"}>
        <IoMdAdd />
      </Button>
    </div>
  );
}

export default CardQuantityControls;
