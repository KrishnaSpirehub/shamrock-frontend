import Image from "next/image";
import Container from "../container";

export default function TextMediaSection() {
  return (
    <section className="-mb-[40px]">
      <Container>
        <div className=" flex flex-col items-center">
          <div className="flex flex-col items-center gap-4 pb-12">
            <h3 className="text-xl text-center font-medium md:text-3xl dark:text-white">
              Real-time Emission Insights at Your Fingertips
            </h3>
            <div className="gap-5">
              <p className="text-sm text-center font-normal md:text-sm dark:text-white leading-7">
                Access real-time emissions data via a user-friendly dashboard, offering
              </p>
              <p className="text-sm text-center font-normal md:text-sm dark:text-white leading-7">
                downloadable reports and editable fields for tailored analysis and strategic
                planning.
              </p>
            </div>
          </div>
          <div className="border border-[#f2f2f2] lg:-mb-[200px] sm:-mb-[250px] -mb-[150px] drop-shadow-lg">
            <Image
              src="/images/media-section.png"
              width={500}
              height={300}
              alt="text-media-section"
            />
          </div>
        </div>
      </Container>
      <div
        className=" md:min-h-80 sm:min-h-60 min-h-40 w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/line_graphic.png')",
          objectFit: "cover",
          width: "100%",
        }}
      />
    </section>
  );
}
