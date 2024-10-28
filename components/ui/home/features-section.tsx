import { Activity, BarChart2, User, Award, Users, ThumbsUp, TrendingDown } from "lucide-react";

const icons = [
  <Activity key="activity" className="h-6 w-6" />,
  <TrendingDown key="trending-down" className="h-6 w-6" />,
  <BarChart2 key="bar-chart" className="h-6 w-6" />,
  <User key="user" className="h-6 w-6" />,
  <Award key="award" className="h-6 w-6" />,
  <ThumbsUp key="thumbs-up" className="h-6 w-6" />,
];

const featureSection = {
  featuresTitle: "Powerful Tools for Emission Management",
  featuresBody:
    "Track, Analyze, and Optimize. GHG Pro offers Professional-grade features for Streamlined Emission Reduction Strategies.",
  features: [
    {
      featuresSubTitle: "Real-time Emission Tracking",
      featuresSubBody:
        "Track emissions instantaneously, gaining actionable insights for swift reduction strategies",
    },
    {
      featuresSubTitle: "Customizable Reduction Plans",
      featuresSubBody:
        "Tailor plans to fit your goals, ensuring precision and efficiency in emissions reduction.",
    },
    {
      featuresSubTitle: "Comprehensive Reporting & Analytics",
      featuresSubBody:
        "Access detailed reports and analytics, empowering informed decision-making for sustainability initiatives.",
    },
    {
      featuresSubTitle: "Collaborative Team Integration",
      featuresSubBody:
        "Engage teams seamlessly, fostering collaboration for impactful collective emission reduction efforts",
    },
    {
      featuresSubTitle: "Goal-driven Progress Monitoring",
      featuresSubBody:
        "Monitor progress towards targets, staying on course to achieve sustainable objectives effectively.",
    },
    {
      featuresSubTitle: "Actionable Insights & Recommendations",
      featuresSubBody:
        "Receive actionable insights and suggestions, optimizing strategies for maximum environmental impact.",
    },
  ],
};

export default function FeaturesSection({ featureSections }: any) {
  return (
    <section className="sm:my-0 my-10 lg:-mb-[40px]" id="features">
      <div className="sm:w-[80%] w-[90%] m-auto py-10 md:py-20">
        <div className="flex flex-col items-center gap-2 mb-4">
          <p className="text-primary font-medium">Features</p>
          <h3 className="text-2xl text-balance text-center font-medium md:text-3xl text-copy">
            {featureSection?.featuresTitle}
          </h3>
          <p className="text-gray max-w-xl text-balance mx-auto text-center font-normal text-md dark:text-white leading-relaxed">
            {featureSection?.featuresBody}
          </p>
        </div>
        <div className="container grid grid-cols-6 gap-10 gap-y-16 py-10 lg:-mb-[320px] sm:-mb-[340px] -mb-[250px]">
          {featureSection?.features.map((data: any, index: any) => (
            <div key={index} className="md:col-span-2 col-span-6 items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center bg-white h-12 w-12 rounded-full">
                  <div className="flex items-center justify-center bg-[#BBF7D0] text-primary h-10 w-10 rounded-full">
                    {icons[index]}
                  </div>
                </div>
                <h3 className="text-lg text-copy text-center text-balance font-medium leading-tight">
                  {data?.featuresSubTitle}
                </h3>
                <p className="text-gray text-md md:text-sm text-center font-normal leading-normal">
                  {data?.featuresSubBody}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className=" md:min-h-80 sm:min-h-72 min-h-40 w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/line_graphic.png')",
          objectFit: "cover",
          width: "100%",
        }}
      />
    </section>
  );
}
