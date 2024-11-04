import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.webp";

const Logo = () => {
  return (
    <Link
      href={`/`}
      prefetch={false}
      // className="flex justify-center items-center w-[50px] h-[50px] bg-white rounded-xl"
    >
      <div className="flex justify-center items-center w-[50px] h-[50px] bg-white rounded-lg z-10">
        <Image
          src={logo}
          alt={"Dream To App"}
          width={40}
          height={40}
          // className="w-auto h-auto object-cover"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
