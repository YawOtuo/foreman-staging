"use client"
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store/useAppStore";

function Page() {
  const { DBDetails } = useAppStore();
  return (
    <div>
      Contact Us
      <p
      >
       Welcome {DBDetails?.username}
        
      </p>
    </div>
  );
}

export default Page;
