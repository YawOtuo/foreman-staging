import Image from "next/image";

type Props = {
  product: {
    name: string;
    price: number;
    image: string
  };
};
function ProductCard({ product }: Props) {
  return (
    <div className="flex flex-col items-start justify-center border-2 rounded-md">
      <div className="relative w-full aspect-[3/2] min-w-[200px] ">
        <Image src={product?.image} alt="Logo" fill objectFit="cover" />
      </div>
      <div className="flex flex-col gap-5 px-5 py-3">
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <p className="font-semibold">{product?.name}</p>
          <p>{product?.price}</p>
        </div>

        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
