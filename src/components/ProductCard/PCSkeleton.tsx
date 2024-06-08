import { Skeleton } from "../ui/skeleton";

function PCSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="w-full h-[180px] " />
      <Skeleton className="w-full h-[30px] " />
      <Skeleton className="w-[70%] h-[30px] " />
    </div>
  );
}

export default PCSkeleton;
