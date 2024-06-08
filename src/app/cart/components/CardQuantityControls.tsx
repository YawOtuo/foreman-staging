import { Button } from "@/components/ui/button";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
function CardQuantityControls({quantity} : {quantity: number}) {
  return (
    <div className="w-full lg:w-fit flex justify-end items-center lg:justify-center gap-2">
      <Button variant={"outline"} size={"sm"} fontSize={"xs"}>
        <FaMinus />
      </Button>
      <p className="px-3">{quantity}</p>
      <Button variant={"outline"} size={"sm"} fontSize={"xs"}>
        <IoMdAdd />
      </Button>
    </div>
  );
}

export default CardQuantityControls;
