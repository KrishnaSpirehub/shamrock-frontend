import Image from "next/image";
import React from "react";

export const TextmediaSection = () => {
  return (
    <div className="flex flex-col justify-start h-full bg-zinc-50 py-16">
      <div className="flex flex-col items-center gap-2 mb-10">
        <p className="text-primary">
          <Image src="/images/logo.png" width={120} height={100} alt="logo" />
        </p>
        <h3 className="text-xl text-center font-bold md:text-2xl">
          The future of the planet starts with you.
        </h3>
        <p className="text-base text-center font-normal md:text-base dark:text-white leading-7 px-4 text-[#9FA2A4]">
          Leading GHG Monitoring in the Caribbean
        </p>
      </div>
      <div>
        <div className="relative w-full h-[550px] xl:-mb-[150px] md:-mb-[120px] sm:-mb-[200px] -mb-[100px] z-40">
          <Image
            src="/images/sign-up.png"
            fill
            quality={100}
            alt="sign-up"
            className="m-auto object-contain"
          />
        </div>
        <div
          className="min-h-40 w-full bg-no-repeat z-30 absolute bottom-0"
          style={{
            backgroundImage: "url('/images/sign-up.svg')",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};
