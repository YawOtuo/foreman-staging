import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductVariant } from "@/lib/types/product";

type Props = {
  product_variant: ProductVariant | null;
  category?: string;
};
function ProductDetailTabs({ product_variant, category }: Props) {
  return (
    <Tabs defaultValue="description">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <p>{product_variant?.detailed_description}</p>
      </TabsContent>
      <TabsContent value="details" className="flex flex-col items-start gap-1">
        <p>
          <span className="text-shade-300">Category: </span>
          {category}
        </p>
        <p>
          <span className="text-shade-300">Availability:</span>{" "}
          {product_variant?.availability}
        </p>
        <div className="flex flex-col md:flex-row items-start gap-5">
          <span className="text-shade-300">Unit of Measurement: </span>
          <div className="flex flex-col md:flex-row items-start gap-3">
            {(product_variant?.price.length ?? 0) > 0 ? (
              product_variant?.price.map((priceEntry, index) => (
                <div key={index}>
                  {priceEntry.unit_of_measurement?.unit || "No unit available"}
                </div>
              ))
            ) : (
              <p className="text-sm">No units of measurement available</p>
            )}
          </div>{" "}
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default ProductDetailTabs;
