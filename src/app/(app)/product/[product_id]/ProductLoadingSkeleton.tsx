import { Skeleton } from "@/components/ui/skeleton";

function ProductLoadingSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-start justify-center gap-10">
      <Skeleton className="w-full h-[400px] " />
      <div className="flex flex-col gap-5 w-full">
        <Skeleton className=" w-[50%] h-[40px]  " />

        <Skeleton className="w-[95%]  h-[120px]" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[70%]  h-[40px]" />
          <Skeleton className="w-[70%]  h-[40px]" />
          <Skeleton className="w-[70%]  h-[40px]" />
        </div>
      </div>
    </div>
  );
}

export default ProductLoadingSkeleton;
