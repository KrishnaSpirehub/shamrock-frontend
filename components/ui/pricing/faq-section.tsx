import Container from "../container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection({ pricingPageData }: any) {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl text-center font-medium md:text-3xl">
            {pricingPageData?.faqTitle}
          </h3>
          <p className="text-sm text-gray text-center font-normal md:text-sm dark:text-white leading-7 px-4">
            {pricingPageData?.faqBody}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Container>
            {pricingPageData?.faqs &&
              pricingPageData?.faqs?.map((data: any, index: number) => (
                <Accordion type="single" key={index} collapsible>
                  <AccordionItem value={"id-" + index}>
                    <AccordionTrigger>{data?.question}</AccordionTrigger>
                    <AccordionContent>{data?.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
          </Container>
        </div>
      </Container>
    </section>
  );
}
