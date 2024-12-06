import Image from "next/image";

export default function CaGoogleColoured() {
  return (
    <div>
      <Image
        src={"/svgs/google.svg"}
        alt="Google Icon"
        width={20}
        height={20}
      />
    </div>
  );
}
