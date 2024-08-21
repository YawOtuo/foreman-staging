import { Order } from "@/lib/types/order";
import { HiLocationMarker } from "react-icons/hi";
import { FaLandmark } from "react-icons/fa";
import { FaCity } from "react-icons/fa6";
import { MdOutlinePermIdentity } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";

import { FaPhoneAlt } from "react-icons/fa";

type Props = {
  order?: Order;
};

function OrderShippingDetailSummary({ order }: Props) {
  return (
    <div className="flex flex-col gap-2 border-2 rounded-xl px-5 py-5">
      <div className="flex items-center gap-3 text-primary text-lg font-bold">
        <MdOutlineLocalShipping className="text-3xl" />
        <p>Shipping Details</p>
      </div>

      <div>
        <div className="flex items-center gap-2">
          {/* <MdLocationCity className="text-lg" /> */}
          <p>Constituency: {order?.shipping_address.constituency}</p>
        </div>
        <div className="flex items-center gap-2">
          {/* <FaCity className="text-lg"/> */}

          <p>City: {order?.shipping_address.area}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <HiLocationMarker className="text-xl" />

        <p>{order?.shipping_address.location}</p>
      </div>

      {order?.shipping_address?.nearest_landmark && (
        <div className="flex items-center gap-2">
          <FaLandmark className="text-lg" />
          <p>Nearest Landmark: {order?.shipping_address.nearest_landmark}</p>
        </div>
      )}

      <div className="flex items-center gap-2">
        <MdOutlinePermIdentity className="text-2xl" />
        <p>Recipient Name: {order?.shipping_address.recipient_name}</p>
      </div>
      <div className="flex items-center gap-2">
        <FaPhoneAlt className="text-xl" />
        <p>Recipient Phone: {order?.shipping_address.recipient_phone}</p>
      </div>
    </div>
  );
}

export default OrderShippingDetailSummary;
