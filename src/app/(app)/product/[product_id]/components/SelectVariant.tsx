import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product, ProductVariant } from "@/lib/types/product";

type Props = {
  product?: Product;
  selectedVariant: ProductVariant | null;
  handleVariantChange: (value: string) => void;
};

function SelectVariant({
  product,
  selectedVariant,
  handleVariantChange,
}: Props) {
  return (
    <div>
      {Number(product?.variants.length) > 1 ? (
        <Select
          onValueChange={handleVariantChange}
          value={selectedVariant?.id.toString()}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a variant" />
          </SelectTrigger>
          <SelectContent>
            {product?.variants.map((variant) => (
              <SelectItem key={variant.id} value={variant.id.toString()}>
                {variant.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <p>{selectedVariant?.name}</p>
      )}
    </div>
  );
}

export default SelectVariant;
