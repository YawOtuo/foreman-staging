"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import ProductRow from "./components/ProductRow";
import DeliveryAddressForm from "./components/DeliveryAddress";
import Summary from "./components/Summary";
import { FaShoppingCart } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";

export default function CheckOutPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Iron Rod",
      size: "20mm",
      unitPrice: 53.33,
      unit: "Pieces",
      quantity: 20,
    },
    {
      id: 2,
      name: "Nails",
      size: "4mm",
      unitPrice: 1.33,
      unit: "Pieces",
      quantity: 600,
    },
  ]);

  const [address, setAddress] = useState({
    city: "",
    suburb: "",
    name: "",
    phone: "",
  });

  const [deliveryCharge, setDeliveryCharge] = useState(50.0);

  const updateQuantity = (index: number, quantity: number) => {
    const newProducts = [...products];
    newProducts[index].quantity = quantity;
    setProducts(newProducts);
  };

  const updateAddress = (field: string, value: string) => {
    setAddress({ ...address, [field]: value });
  };

  const subTotal = products.reduce(
    (sum, product) => sum + product.unitPrice * product.quantity,
    0
  );

  const handleDelete = (prodId: number) => {
    const prods = [...products];
    const updatedArr = prods.filter((item, index) => prodId !== index);
    setProducts(updatedArr);
  };

  return (
    <div className="w-full flex-1">
      <div className="bg-[#e8e8e8] w-screen flex-1 p-6">
        <div className="flex justify-between items-center flex-row w-full">
          <h6 className="font-semibold text-4xl">Cart</h6>
          <div className="flex flex-row w-1/3 sm:w-1/6 md:w-[10%]  items-center justify-evenly text-gray-400">
            <Link href="/">Home</Link>
            <AiOutlineRight />
            <Link href="/store">Store</Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="mt-16 w-full b flex text-sm sm:text-base font-bold">
          <div className=" w-1/3 sm:w-1/2 ">
            <p className="text-center">Products</p>
          </div>
          <div className="flex-1 flex justify-evenly flex-row min-w-[200px]">
            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
        </div>
        {products.length > 0 ? (
          <div className="mt-4">
            {products?.map((product, index) => (
              <ProductRow
                product={product}
                updateQuantity={(quantity) => updateQuantity(index, quantity)}
                key={index}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-32 p-6 mt-6 text-gray-400 italic flex justify-center items-center border-y-[1px] border-gray-500">
            <p>Add a product to your cart</p>
          </div>
        )}
      </div>
      <div className="flex flex-col sm:flex-row items-start w-full mt-10 p-5 ">
        <div className="p-3 sm:p-0 sm:w-1/2 flex flex-col justify-center  h-full md:h-[250px]">
          <DeliveryAddressForm
            address={address}
            updateAddress={updateAddress}
          />
          <div className="w-full flex justify-center items-center">
            <button className="mt-4 p-4 bg-black text-white rounded-md hover:bg-white hover:text-black  hover:border-[1px] hover:border-black transition-all w-full duration-300 ease-in flex items-center justify-center md:w-1/2">
              <FaShoppingCart className="mr-2 text-xl" />
              Cotinue Shopping
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 h-full flex flex-col mt-10 sm:mt-0">
          <Summary subTotal={subTotal} deliveryCharge={deliveryCharge} />
          <div className="flex w-full justify-center">
            <button className="mt-4 w-1/2 p-4 bg-red-600 text-white rounded-md hover:bg-white hover:text-red-600  hover:border-[1px] hover:border-red-600 transition-all duration-300 ease-in flex justify-center items-center">
              <IoArrowRedo className="mr-2 text-2xl" />
              Buy Now
            </button>
          </div>
          <Link
            href="/warehousing"
            className="text-yellow-400 uppercase text-center mt-6 underline"
          >
            Try warehousing
          </Link>
        </div>
      </div>
    </div>
  );
}
