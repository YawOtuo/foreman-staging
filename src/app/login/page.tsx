import Image from "next/image";

type LoginButtonProps = {
  name: string;
};

const LoginButton = ({ name }: LoginButtonProps) => {
  return (
    <button className="flex items-center justify-center gap-5 py-4 w-[80%] px-3 rounded-xl border-2 hover:bg-brand-200 transition-all hover:scale-[1.02]  hover:border-brand-200 ">
      icon
      <p className="uppercase lg:text-2xl">{name}</p>
    </button>
  );
};

const loginOptions = ["google", "facebook", ];
function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="relative w-full  ">
        <Image src={"/login3.png"} alt="Logo" fill objectFit="cover" />
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-5">
        {loginOptions.map((r, index) => (
          <LoginButton name={r} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Page;
