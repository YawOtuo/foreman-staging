import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCurrency } from "@/context/CurrencyContext";
import { Product, ProductVariant } from "@/lib/types/product";
import { UnitOfMeasurement } from "@/lib/types/unit_of_measurement";
import { convertPrice } from "@/lib/utils/convertPrice";
import { Plus, Minus } from "lucide-react";

type Props = {
  product?: Product;
  selectedVariant: ProductVariant;
  decrementQuantity: () => void;
  incrementQuantity: () => void;
  quantity: number;
  selectedUnitOfPricing: {
    unit_of_measurement: UnitOfMeasurement | null;
    price: number;
    min_order_quantity: number;
    min_order_value: number;
  } | null;
  handleQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddToCart: () => void;
  handleUnitChange: (value: string) => void;
};

function QuantitySelection({
  product,
  selectedVariant,
  decrementQuantity,
  incrementQuantity,
  quantity,
  selectedUnitOfPricing,
  handleQuantityChange,
  handleAddToCart,
  handleUnitChange,
}: Props) {
  const { exchangeRates, currency } = useCurrency();

  return (
    <div className="mt-4">
      {selectedUnitOfPricing && (
        <p className="font-semibold">
          Price: {currency}{" "}
          {convertPrice(
            +selectedUnitOfPricing?.price,
            "GHS",
            currency,
            exchangeRates
          )?.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      )}
      {/* <p className="text-sm text-gray-700s">SKU: {selectedVariant.sku}</p> */}
      {/* <p>{selectedVariant.brief_description}</p> */}
      <div className="flex items-center gap-2 mt-4">
        <label htmlFor="quantity" className="mr-2">
          Quantity:
        </label>
        <div className="flex items-center">
          <Button
            onClick={decrementQuantity}
            variant="outline"
            size="icon"
            className="h-10 w-10"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            id="quantity"
            type="text"
            min={0}
            // defaultValue={
            //   selectedUnitOfPricing?.min_order_quantity
            //     ? Math.floor(selectedUnitOfPricing?.min_order_quantity) // Convert to integer
            //     : 10
            // }
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 mx-2 text-center"
          />
          <Button
            onClick={incrementQuantity}
            variant="outline"
            size="icon"
            className="h-10 w-10"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {selectedVariant.price.length > 1 ? (
          <Select
            onValueChange={handleUnitChange}
            value={selectedUnitOfPricing?.unit_of_measurement?.unit}
          >
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Select a unit" />
            </SelectTrigger>
            <SelectContent>
              {selectedVariant?.price.map((priceEntry) => (
                <SelectItem
                  key={priceEntry.unit_of_measurement.unit}
                  value={priceEntry.unit_of_measurement.unit}
                >
                  {priceEntry.unit_of_measurement.unit}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <p className="ml-4">
            {selectedUnitOfPricing?.unit_of_measurement?.unit}
          </p>
        )}
      </div>

      {selectedUnitOfPricing?.min_order_quantity &&
        quantity < Number(selectedUnitOfPricing?.min_order_quantity) && (
          <p className="text-[0.7rem] text-gray-500">
            Minimum order quantity:{" "}
            {`${selectedUnitOfPricing?.min_order_quantity}`.split(".")[0]}
          </p>
        )}
      <Button onClick={handleAddToCart} className="mt-4 rounded-sm px-5">
        Add to Cart
      </Button>
    </div>
  );
}

export default QuantitySelection;
