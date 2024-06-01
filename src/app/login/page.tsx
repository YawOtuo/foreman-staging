import Image from "next/image";

type LoginButtonProps = {
  name: string;
};

const LoginButton = ({ name }: LoginButtonProps) => {
  return (
    <button className="flex items-center justify-center gap-5 py-3 w-full sm:w-[60%] px-5 rounded-xl border-2  transition-all hover:scale-[1.02]  hover:border-brand-300 text-white">
      icon
      <p className="uppercase 2xl:text-2xl">{name}</p>
    </button>
  );
};

const loginOptions = ["google", "facebook"];
function Page() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[url('/login4.png')] px-5 lg:px-0 bg-no-repeat bg-cover bg-bottom  lg:bg-center text-white">
      {/* Blur and darken overlay */}
      <div className="absolute insert-0 backdrop-blur-lg bg-black bg-opacity-75 w-full h-full z-[1]"></div>

      {/* Content container */}
      <div className="relative z-[1] flex flex-col items-center justify-center w-full md:w-[40%] gap-5 border-2  border-white rounded-xl min-h-[50vh] shadow-sm px-5 ">
        <p className="text-left sm:text-center w-full">
          Login with the following options
        </p>

        <div className="flex flex-col w-full items-center gap-5">
          {loginOptions.map((r, index) => (
            <LoginButton name={r} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
