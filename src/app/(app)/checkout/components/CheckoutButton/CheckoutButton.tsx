import { IoArrowRedo } from "react-icons/io5";
import usePayStack from "./usePaystack";

type Props = {
  onClick?: any;
  disabled?: boolean;
};
function CheckoutButton({ onClick, disabled }: Props) {
  return (
    <button
      disabled={disabled}
      type="submit"
      onClick={onClick}
      className="mt-4 w-full p-4 bg-primary text-white rounded-md hover:scale-[1.02] hover:border-[1px] hover:border-primary transition-all duration-300 ease-in flex justify-center items-center">
      <IoArrowRedo className="mr-2 text-2xl" />
      Buy Now
    </button>
  );
}

export default CheckoutButton;
