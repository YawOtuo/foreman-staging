import useOrders from "@/lib/hooks/useOrder";
import usePayStack from "./components/CheckoutButton/usePaystack";
import useCart from "@/lib/hooks/useCart";
import { useRouter } from "next/navigation";
import useEmail from "@/lib/hooks/useEmail";
import {
  fromEmail,
  generalEmailReceipients,
  templateIds,
} from "@/lib/utils/emailTemplateIds";
import { useAppStore } from "@/lib/store/useAppStore";

function useCheckout() {
  const { startPayment } = usePayStack();
  const { handleCreateOrder, handleUpdateOrder } = useOrders();
  const { cart } = useCart();
  const router = useRouter();
  const { clearCart } = useCart();
  const { sendEmail } = useEmail();
  const { DBDetails } = useAppStore();

  const checkout = async (option: "delivery" | "now") => {
    const orderItems = cart.items.map((item) => ({
      product_id: item.product_variant.id, // Assuming 'id' is the product ID
      quantity: item.quantity,
      totalCost: item.totalCost,
    }));

    const totatTotalCost = cart.totalCost + 50;

    try {
      const result = await handleCreateOrder({
        total_order_cost: totatTotalCost,
        total_order_quantity: cart.totalQuantity,
        order_items: orderItems,
      });

      if (result && result.id) {
        if (option === "now") {
          startPayment(totatTotalCost, () => {
            handleUpdateOrder({
              order_id: result.id,
              orderData: { is_paid: true },
            }).then((res) => {

              sendEmail({

                to: [
                  ...(generalEmailReceipients["signup"] || []),
                  DBDetails?.email,
                ],
                from: fromEmail,
                templateId: templateIds["order"],
                templateData: {
                  username: DBDetails?.username,
                },
              });

              router.push(`/checkout-success/${result.id}`);
              // clearCart();
            });
          });
        } else {
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
