import useOrders from "@/lib/hooks/useOrder";
import usePayStack from "./components/CheckoutButton/usePaystack";
import useCart from "@/lib/hooks/useCart";

function useCheckout() {
  const { startPayment } = usePayStack();
  const { handleCreateOrder, handleUpdateOrder } = useOrders();
  const { cart } = useCart();

  const checkout = async () => {
    const orderItems = cart.items.map((item) => ({
      product_id: item.product.id, // Assuming 'id' is the product ID
      quantity: item.quantity,
      totalCost: item.totalCost,
    }));

    try {
      const result = await handleCreateOrder({
        total_order_cost: cart.totalCost,
        total_order_quantity: cart.totalQuantity,
        order_items: orderItems,
      });

      if (result && result.id) {
        startPayment(cart?.totalCost, () => {
          handleUpdateOrder({
            order_id: result.id,
            orderData: { is_paid: true }
          });
        });
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

export default useCheckout
