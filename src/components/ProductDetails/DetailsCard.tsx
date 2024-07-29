"use client";
import { Product } from "@/lib/types/product";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import useCart from "@/lib/hooks/useCart";
import useFavourites from "@/lib/hooks/useFavourites";
import { useState } from "react";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { convertPrice } from "@/lib/utils/convertPrice";
import { useCurrency } from "@/context/CurrencyContext";
import Link from "next/link";

export default function ProductDetailsCard({ product }: { product: Product }) {
  const { toast } = useToast();

  const { AddToCart } = useCart();
  const { handleAddToFavourites } = useFavourites();

  const [size, setSize] = useState<string>("small");
  const [color, setColor] = useState<string>("red");
  const [quantity, setQuantity] = useState<number>(1);
  const { currency, exchangeRates } = useCurrency();
  const convertedPrice = convertPrice(
    product.price,
    "GHS",
    currency,
    exchangeRates
  );

  return (
    <Card className="w-full p-2">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-gray-800">
          Price: {currency} {Number(convertedPrice)?.toFixed(2)}
        </p>
      </div>
      <Separator className="my-2" />
      <div className="flex items-center gap-4 justify-between">
        <div className="flex flex-col gap-2 w-full">
          <p className="font-semibold">Specifications</p>
          <p>Weight: {43.7} kg</p>
          <p>Height: {43.7} cm</p>
          <p>Width: {43.7} cm</p>
          <p>Length: {43.7} cm</p>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <p className="font-semibold">Reviews</p>
          <p>Rating: {"N/A"}</p>
          <p>Reviews: {"N/A"}</p>
        </div>
      </div>

      <Separator className="my-2" />
      <div className="flex flex-col gap-4 justify-between">
        {/* size selector */}
        <Select>
          <SelectTrigger>Size</SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>

        {/* color selector */}
        <Select>
          <SelectTrigger>Color</SelectTrigger>
          <SelectContent>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="blue">Blue</SelectItem>
            <SelectItem value="green">Green</SelectItem>
          </SelectContent>
        </Select>

        {/* quantity counter */}
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
          />
          <Button
            disabled={quantity == 1}
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </Button>
          <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
        </div>
      </div>
      <Separator className="my-2" />
      <div className="flex items-center justify-between gap-4">
        <Button
          variant={"secondary"}
          onClick={() => {
            handleAddToFavourites(product.id);
          }}
          className=" w-full"
        >
          Add to Favourites
        </Button>{" "}
        <Link href={`product/${product.id}`}>
          <Button
            // onClick={() => {
            //   AddToCart({
            //     id: product?.id,
            //     product_variant: product.,
            //     quantity: quantity,
            //     //the total cost will be update in the AddtoCart function
            //   });
            // }}
            className="w-full"
          >
            View
          </Button>
        </Link>
      </div>
    </Card>
  );
}
