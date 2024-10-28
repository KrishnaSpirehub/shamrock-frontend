import FaqSection from "@/components/ui/pricing/faq-section";
import PricingSection from "@/components/ui/pricing/pricing-section";
import { PricingCardSection } from "@/components/ui/pricing/pricing-card-section";
import FooterSection from "@/components/layout/footer-section";
import ContactUsSection from "@/components/ui/home/contact-us-section";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";

const pricingQuery = `*\[_type == "pricingPage"\][0]`;
export const revalidate = 5; // revalidate this page every 5 seconds
export const metadata: Metadata = {
  title: "Pricing | Shamrock HSE",
  description:
    "Our Vision is to be the preferred Engineering Consultancy for Risk Management, Process Safety and Environmental Engineering Services for the Energy Sector.",
};

export default async function Pricing() {
  const pricingPageData = await client.fetch(pricingQuery);

  return (
    <>
      <PricingSection pricingPageDatas={pricingPageData} />
      <PricingCardSection pricingPageDatas={pricingPageData} />
      <FaqSection pricingPageData={pricingPageData} />
      <ContactUsSection contactusPageData={pricingPageData} />
      <FooterSection footerPageData={pricingPageData} />
    </>
  );
}
