import { Skeleton } from "@/components/ui/skeleton";

function OrderCardSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-2">
      <Skeleton className="w-full lg:w-[50px] h-[100px] lg:h-[40px] " />

      <Skeleton className="w-full h-[50px] lg:h-[40px] " />
      <Skeleton className="lg:hidden w-[80%] h-[20px]  " />

      

    </div>
  );
}

export default OrderCardSkeleton;
