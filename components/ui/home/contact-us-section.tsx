"use client";
import { _trackEvent } from "@/lib/analytics";
import { MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
// import { toast } from "sonner";

export default function ContactUsSection({ contactusPageData }: any) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast("Email copied to your clipboard", {
          description: "Paste it anywhere you'd like",
        });
      })
      .catch((error) => {});
  };

  return (
    <section id="contact-us">
      <div className="container max-w-6xl grid md:grid-cols-3 grid-cols-1 justify-around">
        <div className=" flex flex-col gap-2 px-4 py-4">
          <p className="text-primary">{contactusPageData?.footerContactusTitle}</p>
          <h3 className="text-xl font-medium md:text-3xl">{contactusPageData?.getinTitle}</h3>
          <p className="text-md text-gray font-normal leading-7">
            {contactusPageData?.getinDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 col-span-2">
          <div className="flex-col bg-[#7cd8591a] p-5 md:min-w-[200px] w-full text-green-950">
            <Phone
              className="text-primary h-6 w-6"
              onClick={() => _trackEvent("contact clicked", { source: "contact-us" })}
            />
            <div className="my-5">
              <h3 className="text-md font-medium">{contactusPageData?.contactUsTitle}</h3>
              <p className="font-normal text-sm">{contactusPageData?.contactUsDescription}</p>
            </div>
            <p className="font-normal text-sm mb-1">{contactusPageData?.contactusTime}</p>
            <p
              className="font-medium text-sm cursor-pointer"
              onClick={() => {
                copyToClipboard("enquires@shamrock-hse.com");
                _trackEvent("email clicked", { source: "contact-us" });
              }}
            >
              {contactusPageData?.contactusEmail}
            </p>
            <p
              className="font-medium text-sm"
              onClick={() => _trackEvent("contact number clicked", { source: "contact-us" })}
            >
              <a href={`tel:${contactusPageData?.contactusNumber}`}>
                {contactusPageData?.contactusNumber}
              </a>
            </p>
          </div>
          <div className=" bg-[#7cd8591a] p-5 w-full md:min-w-[200px] text-green-950">
            <a
              href="https://www.google.com/maps/place/Regus+-+Port+of+Spain,+Invaders+Bay/@10.6593099,-61.5370117,17z/data=!3m2!4b1!5s0x8c3608179830f8f3:0xfd5778979adeb1a8!4m6!3m5!1s0x8c36083d56b7c25b:0xe291db0b52ed6b72!8m2!3d10.6593046!4d-61.5344314!16s%2Fg%2F11dfh7lv42?entry=ttu"
              target="_blank"
            >
              <MapPin
                className="text-primary h-6 w-6"
                onClick={() => _trackEvent("map clicked", { source: "contact-us" })}
              />
            </a>
            <div className="my-5">
              <h3 className="text-md font-medium">{contactusPageData?.addressTitle}</h3>
              <p className="font-normal text-sm">{contactusPageData?.addressDescription}</p>
            </div>
            <p
              className="font-medium text-sm"
              onClick={() => _trackEvent("address clicked", { source: "contact-us" })}
            >
              <a
                href="https://www.google.com/maps/place/Regus+-+Port+of+Spain,+Invaders+Bay/@10.6593099,-61.5370117,17z/data=!3m2!4b1!5s0x8c3608179830f8f3:0xfd5778979adeb1a8!4m6!3m5!1s0x8c36083d56b7c25b:0xe291db0b52ed6b72!8m2!3d10.6593046!4d-61.5344314!16s%2Fg%2F11dfh7lv42?entry=ttu"
                target="_blank"
              >
                {contactusPageData?.addressDetails}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
