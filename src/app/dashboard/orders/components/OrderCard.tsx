import { Order } from "@/lib/types/order";

type Props = {
  order: Order;
};
function OrderCard({ order }: Props) {
  return (
    <div className="grid grid-cols-6 gap-x-5 items-center gap-5 justify-center border-md border-[1px] cursor-pointer hover:scale-[1.01] transition-all hover:bg-primary-200 ease-in  py-4 px-5">
      <p className="text-shade-300 font-semibold">#{order.id}</p>{" "}
      <p className="text-sm col-span-2">
        {order.created_at ? order.created_at.toString() : "No date"}
      </p>
      <div className="font-semibold text-sm uppercase border-2  w-fit rounded-md text-white">
        {order.is_paid ? (
          <p className="bg-green-600 px-3  w-full">Paid</p>
        ) : (
          <p className="bg-shade-200 px-3 w-full ">Unpaid</p>
        )}
      </div>
      <p>{order.total_quantity}</p>
      <p>{order.total_cost}</p>
    </div>
  );
}

export default OrderCard;
