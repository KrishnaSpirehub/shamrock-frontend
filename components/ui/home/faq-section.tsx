import { useEffect, useState } from "react";
import Container from "../container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { client } from "@/sanity/lib/client";

const faqPageSection = {
  faqTitle: "Frequently asked questions",
  faqBody: "Everything you’d want to know about our product.",
  faqs: [
    {
      question: "What is the GHGPro Software Tool?",
      answer:
        "GHGPro is an advanced web-based tool designed to assist heavy industries and SMEs in accurately tracking their greenhouse gas emissions. Utilizing the IPCC 2006 standard, our platform is user-friendly, highly automated, and aims to revolutionize emissions tracking.",
    },
    {
      question: "What distinguishes this tool from others available in the market?",
      answer:
        "Our platform consists of a unique blend of low-cost technical sophistication and user-friendliness, giving the benefits of a professional emissions calculator but with added data analytics, offering revolutionary capabilities to businesses looking to track,verify, report and manage their carbon footprint efficiently and affordably.",
    },
    {
      question: "What features can users expect from the GHGPro Software Tool?",
      answer:
        "Users will have access to a state-of-the-art, real-time data entry system that provides automated data analysis, and reporting functionalities on a monthly or annual basis. Additionally, our platform integrates e-commerce, allowing easy license purchases for access.",
    },
    {
      question: "What future upgrades or enhancements are planned for the tool?",
      answer:
        "GHGPro plans to continually enhance the platform by incorporating additional standards for more granular estimations of emissions data. Moreover, as carbon pricing structures develop in Globally and in Trinidad, we aim to integrate these models into our software, ensuring users always have the latest insights into their emissions and their associated costs.",
    },
    {
      question: "How will the GHGPro Software Tool benefit businesses in the region?",
      answer:
        "Our tool empowers businesses to make informed decisions regarding their environmental impact, helping them understand, monitor, and reduce their carbon footprint. By offering cutting-edge technology at an affordable price, we aim to transform how businesses approach sustainability in the Caribbean Region and wider markets.",
    },
    {
      question:
        "How does GHGPro plan to collaborate with stakeholders in the energy and environmental sectors?",
      answer:
        "GHGPro is committed to fostering collaborations with key stakeholders, including industry organizations, government agencies, and research institutions. By working closely with our partners we aim to jointly promote, enhance, and innovate our GHG emissions inventory platform.",
    },
    {
      question:
        "How does GHGPro ensure the accuracy and reliability of its emissions inventory and reporting?",
      answer:
        "GHGPro engaged a third party, University of Trinidad and Tobago (UTT), as a certified validator, to complete user acceptance testing of our GHG emissions inventory software.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Free software licenses are only available to partnerships and selected charity organizations. A demo is available to show the full functionality and features of the GHG Pro software application.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Please contact support@ghgpro.com for assistance with this.",
    },
    {
      question: "Is my data safe and private when using this service?",
      answer: "All data entered is secure and encrypted. Privacy policy can be found.",
    },
    {
      question: "How do users contact customer support?",
      answer: "For support, you can send an email to support@ghgpro.org",
    },
    {
      question: "What is CO2 Equivalent?",
      answer:
        "GHG emissions can be expressed either in physical units (kilograms, tonnes) or in terms of CO2 equivalent (kilograms CO2 equivalent, tonnes CO2 equivalent). The conversion factor from physical units to CO2 equivalent is the Global Warming Potential of the corresponding GHG.",
    },
    {
      question: "Can I change the emission factors for my company?",
      answer:
        "Default Emission Factors are used, however these can be changed Emission Factors by visiting the relevant tab in the settings page.",
    },
  ],
};

export default function FaqSection({ faqPageSections }: any) {
  return (
    <section id="faq">
      <Container>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl text-copy text-center font-medium md:text-3xl">
            {faqPageSection?.faqTitle}
          </h3>
          <p className="text-md text-grey text-center font-normal leading-relaxed text-balance">
            {faqPageSection?.faqBody}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Container>
            {faqPageSection.faqs &&
              faqPageSection.faqs.map((data: any, index: number) => (
                <Accordion type="single" key={index} collapsible>
                  <AccordionItem value={data?.question}>
                    <AccordionTrigger>{data?.question}</AccordionTrigger>
                    <AccordionContent className="pr-14">{data?.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
          </Container>
        </div>
      </Container>
    </section>
  );
}
