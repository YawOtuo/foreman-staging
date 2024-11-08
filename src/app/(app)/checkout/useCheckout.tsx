import useOrders from "@/lib/hooks/useOrder";
import usePayStack from "./components/CheckoutButton/usePaystack";
import useCart from "@/lib/hooks/useCart";
import { useRouter } from "next/navigation";
import useEmail from "@/lib/hooks/useEmail";
import {
  fromEmail,
  generalEmailRecipients,
  templateIds,
} from "@/lib/utils/emailTemplateIds";
import { useAppStore } from "@/lib/store/useAppStore";
import { FormFields } from "@/lib/types/form";

function useCheckout() {
  const { startPayment } = usePayStack();
  const { handleCreateOrder, handleUpdateOrder } = useOrders();
  const { cart } = useCart();
  const router = useRouter();
  const { clearCart } = useCart();
  const { sendEmail } = useEmail();
  const { DBDetails } = useAppStore();
  const totatTotalCost = cart.totalCost + 50;

  const sendOrderEmail = (
    order_id: number,
    type: "paid" | "unpaid",
    deliveryDate: Date
  ) => {
    // Get today's date and calculate a week from today
    // const today = new Date();
    // const deliveryDate = new Date(today);
    // deliveryDate.setDate(today.getDate() + 7); // Set delivery date to one week ahead

    const formattedDeliveryDate = new Intl.DateTimeFormat("en-US", {
      weekday: "long", // Saturday
      day: "numeric", // 11
      month: "long", // May
      year: "numeric", // 2023
    }).format(deliveryDate);

    const templateType = type == "paid" ? "order-paid" : "order-unpaid";
    return sendEmail({
      to: [
        ...(generalEmailRecipients["signup"] || []),
        String(DBDetails?.email),
      ],
      from: fromEmail,
      templateId: templateIds[templateType],
      templateData: {
        username: DBDetails?.username,
        cost: totatTotalCost.toFixed(2),
        delivery_date: formattedDeliveryDate, // Add delivery date here
        order_id: order_id,
        button_url: `https://foremangh.com/dashboard/orders/${order_id}`,
      },
    });
  };

  const checkout = async (
    option: "delivery" | "now",
    formValues: FormFields
  ) => {
    const orderItems = cart.items.map((item) => ({
      product_id: item.product_variant.id, // Assuming 'id' is the product ID
      quantity: item.quantity,
      totalCost: item.totalCost,
      unit_of_measurement: item.product_variant.unit_of_measurement?.id,
    }));

    try {
      const result = await handleCreateOrder(
        {
          total_order_cost: totatTotalCost,
          total_order_quantity: cart.totalQuantity,
          order_items: orderItems,
          shipping_address: {
            nearest_landmark: formValues.nearestLandmark,
            recipient_name: formValues.address.name,
            recipient_phone: formValues.address.phone,
            constituency: formValues.address.city,
            area: formValues.address.suburb,
            location: formValues.address.location,
            deliveryDate: formValues.address.deliveryDate,
          },
        },
        option
      );

      if (result && result.id) {
        if (option === "now") {
          startPayment(totatTotalCost, () => {
            handleUpdateOrder({
              order_id: result.id,
              orderData: { is_paid: true },
            }).then((res) => {
              sendOrderEmail(
                result.id,
                "paid",
                formValues.address.deliveryDate as Date
              );
              router.push(`/checkout-success/${result.id}`);
              clearCart();
            });
          });
        } else {
          sendOrderEmail(
            result.id,
            "unpaid",
            formValues.address.deliveryDate as Date
          );

          router.push(`/checkout-success/${result.id}`);
          clearCart();
        }
      } else {
        console.error("Unexpected result or status:", result);
      }
    } catch (error) {
      console.error("Failed to create order:", error);
      // Handle error or show error message to the user
    }
  };

  return {
    checkout,
  };
}

export default useCheckout;
