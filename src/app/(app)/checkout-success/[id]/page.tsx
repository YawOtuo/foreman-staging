"use client";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store/useAppStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page({ params }: { params: { id: number } }) {
  const { DBDetails } = useAppStore();
  const router = useRouter();
  // Get the id from the URL parameters
  return (
    <div className="flex items-center justify-center bg-slate-100 w-full min-h-[80vh]">
      <div className="w-[80%] flex flex-col gap-5 px-5 lg:px-10  py-10 bg-white ">
        <p className="text-green-600 text-xl  font-semibold">Successful Order</p>{" "}
        <div className="flex flex-col gap-5">
          <p className="text-3xl lg:text-5xl">Thank you for choosing <span className="font-bold text-primary">FOREMAN</span></p>
          <p className="text-text-3xl">Your order number is #{params.id} </p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="/store">
            <Button>Continue Shopping</Button>
          </Link>
          <Link href={"/dashboard/orders"}>
            {" "}
            <Button variant={"secondary"}>Go to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div >
  );
}

export default Page;
