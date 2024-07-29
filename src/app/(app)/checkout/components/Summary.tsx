interface SummaryProps {
  subTotal: number;
  deliveryCharge: number;
}

const Summary: React.FC<SummaryProps> = ({ subTotal, deliveryCharge }) => {
  const grandTotal = subTotal + deliveryCharge;

  return (
    <div className="border p-4 rounded-md space-y-2 h-full">
      <div className="flex justify-between">
        <p>Sub Total</p>
        <p>
          GHS{" "}
          {subTotal.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <div className="flex justify-between">
        <p>Delivery</p>
        <p>
          GHS{" "}
          {deliveryCharge.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <div className="flex justify-between font-bold">
        <p>Grand Total</p>
        <p>
          GHS{" "}
          {grandTotal.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};

export default Summary;
