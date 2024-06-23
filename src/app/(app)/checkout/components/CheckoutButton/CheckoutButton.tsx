import { IoArrowRedo } from "react-icons/io5";
import usePayStack from "./usePaystack";

type Props = {
  onClick?: any;
};
function CheckoutButton({ onClick }: Props) {
  return (
      <button
        onClick={onClick}
        className="mt-4 w-1/2 p-4 bg-primary text-white rounded-md hover:scale-[1.02] hover:border-[1px] hover:border-primary transition-all duration-300 ease-in flex justify-center items-center">
        <IoArrowRedo className="mr-2 text-2xl" />
        Buy Now
      </button>
  );
}

export default CheckoutButton;
