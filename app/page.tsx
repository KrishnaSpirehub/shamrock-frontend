import HeroSection from "@/components/ui/home/hero-section";
import AchieveMediaSection from "@/components/ui/home/achieve-media-section";
import AnalyticsMediaSection from "@/components/ui/home/analytics-media-section";
import FeaturesSection from "@/components/ui/home/features-section";
import FaqSection from "@/components/ui/home/faq-section";
import ContactUsSection from "@/components/ui/home/contact-us-section";
import FooterSection from "@/components/layout/footer-section";
import { client } from "@/sanity/lib/client";

const homeQuery = `*\[_type == "newHomePage"\][0]`;
export const revalidate = 5; // revalidate this page every 5 seconds

export default async function Home() {
  const homePageHeroSection = await client.fetch(homeQuery);

  return (
    <>
      <HeroSection homePageHeroSection={homePageHeroSection} />
      <AchieveMediaSection achieveMediaSection={homePageHeroSection} />
      <FeaturesSection featureSection={homePageHeroSection} />
      <AnalyticsMediaSection analyticsMediaSection={homePageHeroSection} />
      <FaqSection faqPageSection={homePageHeroSection} />
      <ContactUsSection contactusPageData={homePageHeroSection} />
      <FooterSection footerPageData={homePageHeroSection} />
    </>
  );
}
