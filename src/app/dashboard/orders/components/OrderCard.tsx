import { Order } from "@/lib/types/order";
import moment from 'moment'

type Props = {
  order: Order;
};
function OrderCard({ order }: Props) {
  return (
    <div className="flex flex-col items-start lg:grid grid-cols-6 gap-x-5 lg:items-center gap-3 lg;gap-5 justify-center border-md border-[1px] cursor-pointer  border-primary lg:border-slate-100  rounded-md  transition-all hover:bg-primary-200 ease-in  py-4 px-5">
      <p
        className="lg:text-shade-300 font-semibold text-primary 
      text-2xl lg:text-base
      ">
        #{order.id}
      </p>{" "}
      <p className="text-sm col-span-2">
        {moment(order.created_at).format("Do MMMM YYYY hh:mm")}
      </p>
      <div className="font-semibold text-sm uppercase border-2  w-fit rounded-md text-white">
        {order.is_paid ? (
          <p className="bg-green-600 px-3  w-full">Paid</p>
        ) : (
          <p className="bg-shade-200 px-3 w-full ">Unpaid</p>
        )}
      </div>
      <div className="flex lg:hidden flex-col gap-1">
        <p>
          <span className="text-shade-300">Total Quantity:</span>{" "}
          <span className="font-semibold">{order.total_quantity}</span>
        </p>
        <p>
          <span className="text-shade-300">Total Cost:</span>{" "}
          <span className="font-semibold">{order.total_cost}</span>
        </p>
      </div>
      <p className="hidden lg:flex">{order.total_quantity}</p>
      <p className="hidden lg:flex">{order.total_cost}</p>
    </div>
  );
}

export default OrderCard;
