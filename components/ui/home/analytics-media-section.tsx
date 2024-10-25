import Image from "next/image";
import Container from "../container";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
export default function AnalyticsMediaSection({ analyticsMediaSection }: any) {
  function urlFor(source: any) {
    return builder.image(source).url();
  }
  return (
    <section>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="col-span-1 flex flex-col">
          <Image
            // src="/images/analytics.png"
            src={
              analyticsMediaSection && urlFor(analyticsMediaSection?.analyticsImage?.asset?._ref)
            }
            width={500}
            height={300}
            className="w-full h-full ml-auto md:max-h-full object-cover"
            alt="analytics-media-section"
            quality={95}
          />
        </div>
        <div className="col-span-1 flex flex-col  bg-[#2976A6]">
          <Container>
            <div className="gap-4 flex flex-col content-center h-full">
              <h3 className="text-white text-3xl md:text-4xl font-medium">
                {analyticsMediaSection?.analyticsTitle}
              </h3>
              <p className="text-white text-sm font-normal leading-6">
                {analyticsMediaSection?.analyticsBody}
              </p>
              <p className="text-white text-sm font-normal leading-6">
                {analyticsMediaSection?.analyticsBody1}
              </p>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
