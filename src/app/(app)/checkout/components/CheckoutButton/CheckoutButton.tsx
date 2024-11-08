import { IoArrowRedo } from "react-icons/io5";
import usePayStack from "./usePaystack";

type Props = {
  disabled: boolean;
};
function CheckoutButton({ disabled }: Props) {
  return (
    <button
      disabled={disabled}
      onClick={() => {
        console.log(disabled);
      }}
      type="submit"
      className={`mt-4 w-full p-4 bg-primary text-white rounded-md hover:scale-[1.02] hover:border-[1px] hover:border-primary transition-all duration-300 ease-in flex justify-center items-center disabled:opacity-75 disabled:pointer-events-none`}
    >
      <IoArrowRedo className="mr-2 text-2xl" />
      {disabled ? "Buying..." : "Buy now"}
    </button>
  );
}

export default CheckoutButton;
