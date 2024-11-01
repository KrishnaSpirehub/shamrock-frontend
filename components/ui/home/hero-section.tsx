"use client";
import { Button } from "../button";
import { PlayCircle } from "lucide-react";
import { _trackEvent } from "@/lib/analytics";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import { Input } from "../input";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const builder = imageUrlBuilder(client);

export default function HeroSection({ homePageHeroSection }: any) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();
  function urlFor(source: string) {
    return builder.image(source);
  }

  const handleSubmit = () => {
    if (email) {
      setIsLoading(true);
      axios
        .post("/api/users", { email: email })
        .then((res) => {
          console.log(res, "res");
          if (res?.status === 200) {
            toast.success(res?.data?.message);
            setEmail("");
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err, "err");
          toast.error(err?.message);
          setIsLoading(false);
        });
    }
  };

  return (
    <section
      style={{
        backgroundImage: "url('/images/hero_section.png')",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "90vh", // Changed height to minHeight for better responsiveness
      }}
    >
      <div className="grid lg:grid-cols-2 gap-8 mx-auto h-[90vh]">
        <div className="grid lg:grid-cols-1 sm:text-left text-center content-center lg:px-16 px-8 py-8">
          <h1 className="text-white text-2xl font-medium md:text-4xl dark:text-white">
            Be the first to access to the future of GHG emission monitoring in the Caribbean
          </h1>
          {/* <h3 className="text-primary mb-4 text-xl font-medium md:text-xl xl:text-2xl sm:leading-8 leading-6">
            {homePageHeroSection?.heroSubTitle}
          </h3> */}
          <p className="text-white text-md font-normal lg:text-md xl:text-md dark:text-gray-400 text-balance leading-relaxed  max-w-md">
            Achieve Net Zero. Monitor, Reduce & Lead with Our Professional-grade Tools. Start Your
            Green Journey Today!
          </p>
          <div className="mt-4 space-x-2 flex items-center sm:justify-start justify-center flex-col xs:flex-row gap-4 xs:gap-2">
            <div className="flex flex-col xs:flex-row max-w-sm items-center ">
              <Input
                required
                type="email"
                id="email"
                placeholder="Enter your email"
                className="rounded-b-none xs:rounded-l-md xs:rounded-r-none sm:w-3/5 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                // type="submit"
                onClick={handleSubmit}
                className="text-white rounded-t-none xs:rounded-l-none  xs:rounded-r-md sm:w-2/5 w-full truncate"
                style={{
                  background: "linear-gradient(90deg, #0097B2, #6FD162, #7CD858)",
                  whiteSpace: "nowrap",
                }}
              >
                {isLoading ? "Loading..." : "Get early access"}
              </Button>
            </div>
            <Button
              variant="outline"
              color="white"
              onClick={() => {
                _trackEvent("demo clicked", { source: "hero" });
                const newWindow = window.open("", "_blank");
                if (newWindow && homePageHeroSection?.heroButtonURL) {
                  newWindow.document.write(`
                    <html>
                      <body style="margin: 0;">
                        <video controls autoplay muted style="width: 100%; height: 100%;">
                          <source src="/video/GHGPro_teaser_video.Audio.mov" type="video/mp4">
                          Your browser does not support the video tag.
                        </video>
                      </body>
                    </html>
                  `);
                  newWindow.document.close();
                }
              }}
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              View our Demo
            </Button>
          </div>
        </div>
        <div className="grid-cols-1 lg:text-right lg:flex items-end justify-end hidden">
          <img
            src={homePageHeroSection && urlFor(homePageHeroSection?.heroImage?.asset?._ref)}
            style={{ width: 700, objectFit: "cover" }}
            className=" object-cover ml-auto"
            alt="herosection_child"
          />
        </div>
      </div>
    </section>
  );
}
