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

export default function ProductDetailsCard({ product }: { product: Product }) {

    const { toast } = useToast();

    const { AddToCart } = useCart();
    const { handleAddToFavourites } = useFavourites();

    const [size, setSize] = useState<string>("small");
    const [color, setColor] = useState<string>("red");
    const [quantity, setQuantity] = useState<number>(1);

    function handleAddToCart() {
        AddToCart({
            id: product.id,
            product: product,
            quantity: quantity,
            totalCost: product.price * quantity
        })

        toast({
            title: "Added to Cart",
            description: `${product.name} has been added to cart`,
            variant: "success"
        })
    }

    return <Card className="w-full p-2">
        <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-800">Price: {product?.price}</p>
            <Button onClick={() => {
                handleAddToFavourites(product.id)
            }} className="bg-red-500 text-white">Add to Favourites</Button>
        </div>
        {/* <Separator className="my-2" />
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
                <p>Rating: {4.5}</p>
                <p>Reviews: {100}</p>
            </div>
        </div> */}

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
                <Input type="number" value={quantity} onChange={(e) => setQuantity(+e.target.value)} />
                <Button disabled={quantity == 1} onClick={() => setQuantity(quantity - 1)}>
                    -
                </Button>
                <Button onClick={() => setQuantity(quantity + 1)}>
                    +
                </Button>
            </div>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between gap-4">
            <Button onClick={() => {
                AddToCart({
                    id: product?.id,
                    product: product,
                    quantity: quantity,
                    totalCost: product?.price * quantity
                })
            }} variant={"secondary"} className="w-full">Add to Cart</Button>
            <Button className="w-full">Buy Now</Button>
        </div>
    </Card>
}