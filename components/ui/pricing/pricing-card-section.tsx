"use client";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "../container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { _trackEvent } from "@/lib/analytics";

interface PricingCardSectionProps {
  className?: string;
  pricingPageData: any; // Adjust the type as per your data structure
}

export function PricingCardSection({
  className,
  pricingPageData,
  ...props
}: PricingCardSectionProps) {
  return (
    <section style={{ zIndex: "98 !important" }}>
      <Container>
        <Tabs defaultValue="monthly">
          <div className="flex flex-col gap-12">
            <div className="flex flex-row justify-center gap-4 -mt-[90px]">
              <TabsList>
                <TabsTrigger
                  value="monthly"
                  onClick={() => _trackEvent("price-monthly clicked", { source: "pricing" })}
                >
                  {pricingPageData?.cardButton}
                </TabsTrigger>
                <TabsTrigger
                  value="yearly"
                  onClick={() => _trackEvent("price-yearly clicked", { source: "pricing" })}
                >
                  {pricingPageData?.cardButton1}
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="monthly">
              <div className="flex flex-row flex-wrap lg:flex-nowrap gap-4">
                {pricingPageData?.cardsMonthly &&
                  pricingPageData?.cardsMonthly?.map((data: any, index: number) => {
                    let borderColor = "border-t-[#C8C7C8]";
                    if (index === 1) {
                      borderColor = "border-t-[#0499AF]";
                    } else if (index === 2) {
                      borderColor = "border-t-[#7CD859]";
                    }
                    return (
                      <Card
                        className={cn(
                          "w-full flex flex-col justify-start border-4",
                          `${borderColor}`,
                          "border-b-0 border-l-0 border-r-0",
                          className
                        )}
                        key={index}
                        {...props}
                      >
                        <CardHeader className="flex flex-col items-center gap-2">
                          <CardDescription className="text-black text-md font-medium">
                            {data?.cardTitle}
                          </CardDescription>
                          <div className="flex flex-col items-center gap-1">
                            <CardTitle className="text-3xl text-[#101828]">
                              {data?.cardPrice}
                              <sub className="font-medium text-sm">/month</sub>
                            </CardTitle>
                            <CardDescription className="text-gray text-md text-center">
                              {data?.cardDescription}
                            </CardDescription>
                          </div>
                        </CardHeader>
                        <div className="mb-4 ">
                          <CardContent className="">
                            <div className="space-y-2">
                              {data?.cardPoints.map((notification: any, index: number) => (
                                <div
                                  key={index}
                                  className="px-2 gap-4 grid grid-cols-[25px_1fr] pb-2 items-center justify-center "
                                >
                                  <span className="flex h-6 w-6 translate-y-1 mr-3 rounded-full bg-[#D1FADF] justify-center items-center">
                                    <Check className="text-primary h-4 w-4" />
                                  </span>
                                  <div>
                                    <p className="text-gray text-sm font-normal leading-normal">
                                      {notification.pointsDescription}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </div>
                        <div className="mt-auto">
                          <CardFooter>
                            <Button
                              asChild
                              className="w-full text-white"
                              onClick={() =>
                                _trackEvent(`${data?.cardTitle} button clicked`, {
                                  source: "pricing",
                                })
                              }
                            >
                              <Link href="/pricing">{data?.cardButton}</Link>
                            </Button>
                          </CardFooter>
                        </div>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="flex flex-row flex-wrap lg:flex-nowrap  gap-4">
                {pricingPageData?.cardsYearly &&
                  pricingPageData?.cardsYearly?.map((data: any, index: number) => {
                    let borderColor = "border-t-[#C8C7C8]";
                    if (index === 1) {
                      borderColor = "border-t-[#0499AF]";
                    } else if (index === 2) {
                      borderColor = "border-t-[#7CD859]";
                    }
                    return (
                      <Card
                        className={cn(
                          "w-full flex flex-col justify-start border-4",
                          `${borderColor}`,
                          "border-b-0 border-l-0 border-r-0",
                          className
                        )}
                        key={index}
                        {...props}
                      >
                        <CardHeader className="flex flex-col items-center gap-2">
                          <CardDescription className="text-black text-md font-medium">
                            {data?.cardTitle}
                          </CardDescription>
                          <div className="flex flex-col items-center gap-1">
                            <CardTitle className="text-3xl">
                              {data?.cardPrice}
                              <sub className="font-medium text-sm">/year</sub>
                            </CardTitle>
                            <CardDescription className="text-gray text-md text-center">
                              {data?.cardDescription}
                            </CardDescription>
                          </div>
                        </CardHeader>
                        <div className="mb-4">
                          <CardContent>
                            <div className="space-y-2">
                              {data?.cardPoints?.map((notification: any, index: number) => (
                                <div
                                  key={index}
                                  className="px-2 gap-4 grid grid-cols-[25px_1fr] pb-2 items-center justify-center"
                                >
                                  <span className="flex h-6 w-6 translate-y-1 mr-3 rounded-full bg-[#D1FADF] justify-center items-center">
                                    <Check className="text-primary h-4 w-4" />
                                  </span>
                                  <div className="space-y-2 ">
                                    <p className="text-sm font-normal leading-normal text-gray">
                                      {notification.pointsDescription}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </div>
                        <div className="mt-auto">
                          <CardFooter>
                            <Button
                              asChild
                              disabled={true}
                              className="w-full text-white"
                              onClick={() =>
                                _trackEvent(`${data?.cardTitle} button clicked`, {
                                  source: "pricing",
                                })
                              }
                            >
                              <Link href="/pricing">{data?.cardButton}</Link>
                            </Button>
                          </CardFooter>
                        </div>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </Container>
    </section>
  );
}
