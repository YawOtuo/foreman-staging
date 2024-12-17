"use client";

import EditAccountDetailsModal from "@/components/modals/EditAccoutDetailsModal";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store/useAppStore";
import Link from "next/link";

function Page() {
  const { DBDetails } = useAppStore();
  return (
    <div className="flex flex-col gap-5 items-start p-5 w-full">
      <h4 className="text-2xl font-semibold border-b-[1px] w-full">
        My Account
      </h4>
      <div className="flex flex-col gap-1 items-start">
        <div className="flex gap-1 items-start">
          <p>Username: </p>
          <p>{DBDetails?.username}</p>
        </div>
        <div className="flex gap-1 items-start">
          <p>Email: </p>
          <p>{DBDetails?.email}</p>
        </div>
      </div>

      <div>
        {DBDetails && <EditAccountDetailsModal user={DBDetails} />}
      </div>
      <div>
        <Link href="/forgot-password">
          <Button variant={"link"}>Reset Password </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
