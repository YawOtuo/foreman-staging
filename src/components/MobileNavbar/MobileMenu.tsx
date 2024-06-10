import Link from "next/link";
import { useMobileNavStore } from "./components/useMobileNavStore";

export const MobileMenu = (props: any) => {
  // const { setToggle } = useMenuStore();
  const { setMobileMenuStore } = useMobileNavStore();

  return (
    <div className={`px-8 pt-10 ${props?.className}`}>

      <div>
        {props?.data &&
          props?.data?.map((category: any, index: number) => (
            <Link
              href={`/terms-of-service/${category.slug}`}
              key={index}
              className="mb-10 block"
              onClick={() => setMobileMenuStore(false)}
            >
              <p className={"text-2xl !font-semibold uppercase text-[#fff]"}>
                {category.title}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};
