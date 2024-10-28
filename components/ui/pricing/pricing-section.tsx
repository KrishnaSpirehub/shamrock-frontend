const pricingPageData = {
  heroTitle: "Pricing",
  heroSubTitle: "Simple, transparent pricing",
  heroBody: "We believe GHGPro should be accessible to all companies, no matter the size.",
};

export default function PricingSection({ pricingPageDatas }: any) {
  return (
    <section
      style={{
        objectFit: "cover",
        width: "100%",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/line_graphic.png')",
        minHeight: "250px",
      }}
    >
      <div className="sm:w-[80%] w-[90%] m-auto min-h-[250px]">
        <div className="flex flex-col gap-8 justify-between min-h-[250px]">
          <div className="flex flex-col gap-3 pt-4">
            <p className="text-[#3db510] text-sm text-medium">{pricingPageData?.heroTitle}</p>
            <h3 className="text-xl font-medium text-gray-900 md:text-4xl">
              {pricingPageData?.heroSubTitle}
            </h3>
            <p className="text-md text-gray font-normal  dark:text-white leading-7">
              {pricingPageData?.heroBody}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
