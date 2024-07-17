import { IoArrowRedo } from "react-icons/io5";
import usePayStack from "./usePaystack";

type Props = {
  disabled?: boolean;
  onClick?: () => void;
};
function CheckoutButton({ disabled, onClick }: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="submit"
      className={`mt-4 w-full p-4 bg-primary text-white rounded-md hover:scale-[1.02] hover:border-[1px] hover:border-primary transition-all duration-300 ease-in flex justify-center items-center disabled:opacity-75 disabled:pointer-events-none`}
    >
      <IoArrowRedo className="mr-2 text-2xl" />
      Buy Now
    </button>
  );
}

export default CheckoutButton;
