import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  category: {
    name: string;
    image: string;
  };
};

function CategoryCard({ category }: Props) {
  const router = useRouter();
  return (
    <Link href={`/store/?category=${category?.name}`}
      className=" relative flex flex-col items-start justify-center border-[1px] rounded-md hover:scale-[1.02] transition-all cursor-pointer"
      >
      <div className="relative w-full max-h-[300px] md:max-h-fit aspect-[3/4] ">
        <Image
          src={`https://res.cloudinary.com/dajli9sqa/${category?.image}`}
          alt="Logo"
          fill
          objectFit="cover"
        />
      </div>
      <div
        className=" absolute bottom-0 bg-transprent text-white bg-black/40 flex flex-col gap-5 px-3 
      py-2 w-full">
        <div className="flex items-start justify-between w-full gap-1">
          <div className="flex  gap-0 items-center justify-between w-full">
            <p className="text-xs lg:text-base font-semibold capitalize">
              {category?.name}
            </p>
            <FaArrowRightLong className="text-brand-100" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
