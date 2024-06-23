import { PaystackButton } from "react-paystack";

function PayStackPay() {
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_dsdfghuytfd2345678gvxxxxxxxxxx",
  };

  const handlePaystackSuccessAction = (reference : string) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference : string) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };
  return <PaystackButton {...componentProps} />;
}

export default PayStackPay;
