import { useCurrency } from "@/context/CurrencyContext";
import { Order } from "@/lib/types/order";
import { convertPrice } from "@/lib/utils/convertPrice";
import { addCommasToNumber } from "@/lib/utils/numberFormatter";
import moment from "moment";

type Props = {
  order: Order;
};
function OrderCard({ order }: Props) {
  const { currency, exchangeRates } = useCurrency();

  return (
    <div className="flex flex-col items-start lg:grid grid-cols-6 gap-x-5 lg:items-center gap-3 lg;gap-5 justify-center border-[1px] cursor-pointer  border-slate-100  rounded-md  transition-all hover:bg-primary-200 ease-in  py-4 px-5 shadow">
      <p
        className="lg:text-shade-300 font-semibold text-primary 
      text-2xl lg:text-base
      ">
        #{order.id}
      </p>
      <p className="text-sm col-span-2">
        {moment(order.created_at).format("Do MMMM YYYY hh:mm")}
      </p>
      <div className="font-semibold  uppercase shadow-xl  w-fit rounded-lg text-white">
        {order.is_paid ? (
          <p className="bg-green-600 px-3 text-sm  w-full">Paid</p>
        ) : (
          <p className="bg-shade-200 px-3 text-sm w-full ">Unpaid</p>
        )}
      </div>
      <div className="flex lg:hidden flex-col gap-1">
        <p>
          <span className="text-shade-300">Total Quantity:</span>{" "}
          <span className="font-semibold">{order.total_quantity}</span>
        </p>
        <p>
          <span className="text-shade-300">Total Cost:</span>{" "}
          <span className="font-semibold">
            {" "}
            {currency}{" "}
            {addCommasToNumber(
              // Number(
              convertPrice(
                order.total_cost ? order.total_cost : 0,
                "GHS",
                currency,
                exchangeRates
              )
              // )
            )}
          </span>
        </p>
      </div>
      <p className="hidden lg:flex">
        {addCommasToNumber(order?.total_quantity)}
      </p>
      <p className="hidden lg:flex">
        {currency}{" "}
        {addCommasToNumber(
          // Number(
          convertPrice(
            order.total_cost ? order.total_cost : 0,
            "GHS",
            currency,
            exchangeRates
          )
          // )
        )}
      </p>
    </div>
  );
}

export default OrderCard;
