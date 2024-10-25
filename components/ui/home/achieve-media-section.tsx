import Image from "next/image";
import Container from "../container";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
export default function AchieveMediaSection({ achieveMediaSection }: any) {
  function urlFor(source: any) {
    return builder.image(source).url();
  }

  return (
    <section>
      <div className="grid lg:grid-cols-5 grid-cols-4 items-center bg-[#0499AF]">
        <div className="lg:col-span-3 md:col-span-2  col-span-5	 flex justify-center sm-py-10 py-0">
          <Container>
            <div className="gap-4 flex flex-col content-center py-24">
              <h3 className="text-white text-3xl md:text-4xl font-medium">Achieve Net Zero</h3>
              <p className="text-white text-md font-normal leading-relaxed">
                GHGPro is an advanced web-based tool designed to assist heavy industries and SMEs in
                accurately tracking their greenhouse gas emissions. Utilizing the IPCC 2006
                standard, our platform is user-friendly, highly automated, and aims to revolutionize
                emissions tracking.
              </p>
            </div>
          </Container>
        </div>
        <div className="bg-white relative w-full lg:col-span-2 md:col-span-2 col-span-5 h-64 md:h-full">
          <Image
            src={achieveMediaSection && urlFor(achieveMediaSection?.achieveImage?.asset?._ref)}
            //src="/images/achieve-net-zero.png"
            // width={500}
            // height={300}
            fill
            className="w-full ml-auto md:max-h-full sm:max-h-[400px] max-h-[300px] object-cover"
            alt="text-media-section"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
