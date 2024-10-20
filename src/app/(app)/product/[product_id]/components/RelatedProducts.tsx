import FetchingState from "@/components/FetchingState";
import ProductCard from "@/components/ProductCard";
import { useGetRelatedProducts } from "@/lib/hooks/useProducts";
import { Product, ProductVariant, RelatedProduct } from "@/lib/types/product";
import SkeletonRelatedProducts from "./SkeletonRelatedProducts";

type Props = {
  product: ProductVariant | null;
};

function RelatedProducts({ product }: Props) {
  const { relatedProducts, isLoadingRelatedProducts, errorRelatedProducts } =
    useGetRelatedProducts(Number(product?.id));
  ("");
  return (
    <div className="w-full flex flex-col mt-5 gap-10">
      {relatedProducts && (
        <h2 className="text-xl font-semibold ">Related Products</h2>
      )}

      <FetchingState
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 "
        success={relatedProducts?.map((relatedProduct: RelatedProduct) => (
          <ProductCard key={relatedProduct.id} product={relatedProduct} />
        ))}
        loading={<SkeletonRelatedProducts />}
        skeletonCount={3}
        isLoading={isLoadingRelatedProducts}
        isError={errorRelatedProducts}
      />
    </div>
  );
}

export default RelatedProducts;
