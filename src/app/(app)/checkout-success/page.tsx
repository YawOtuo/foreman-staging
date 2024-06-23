"use client";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store/useAppStore";
import Link from "next/link";

function Page() {
  const { DBDetails } = useAppStore();
  return (
    <div className="flex flex-col gap-10 px-5 lg:px-10 h-[50vh] ">
      <p className="text-primary text-5xl  font-semibold">Successful Order</p>{" "}
      <div className="flex  gap-5">
        <Link href="/store">
          <Button>Continue Shopping</Button>
        </Link>
        <Link href={"/dashboard"}>
          {" "}
          <Button variant={"secondary"}>Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
