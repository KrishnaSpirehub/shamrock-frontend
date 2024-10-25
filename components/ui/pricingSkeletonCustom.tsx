import { cn } from "@/lib/utils";
import Container from "./container";

function CustomPricingSkeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div
        className={cn("animate-pulse rounded-md bg-gray dark:bg-gray-800", className)}
        {...props}
      >
        {/* <div className="grid grid-cols-2 gap-2 h-full w-full "> */}
        <Container>
          <div className="flex flex-col gap-4 items-start justify-center ">
            <div className="rounded-md bg-white h-4 w-1/4" />
            <div className="rounded-md bg-white h-4 w-1/4" />
            <div className="rounded-md bg-white h-4 w-1/4" />
          </div>
        </Container>
        <div className="flex flex-col gap-4 items-center justify-end ">
          <div className="flex flex-row gap-4">
            <div className="rounded-md  bg-white h-4 w-24" />
            <div className="rounded-md  bg-white h-4 w-24" />
          </div>
        </div>
        {/* </div> */}
      </div>
      <Container>
        <div className="flex flex-row gap-4 items-center justify-center">
          <div className="flex  flex-col gap-2 rounded-md  bg-gray h-[32vh] w-60 items-center justify-center">
            <div className="rounded-md bg-white h-3 w-1/2" />
            <div className="rounded-md bg-white h-3 w-1/2" />
            <div className="rounded-md bg-white h-3 w-1/2" />
          </div>
          <div className="flex  flex-col gap-2 rounded-md  bg-gray h-[32vh] w-60 items-center justify-center">
            <div className="rounded-md bg-white h-3 w-1/2" />
            <div className="rounded-md bg-white h-3 w-1/2" />
            <div className="rounded-md bg-white h-3 w-1/2" />
          </div>
          <div className="flex  flex-col gap-2 rounded-md  bg-gray h-[32vh] w-60 items-center justify-center">
            <div className="rounded-md bg-white h-3 w-1/2" />
            <div className="rounded-md bg-white h-3 w-1/2" />
            <div className="rounded-md bg-white h-3 w-1/2" />
          </div>
        </div>
      </Container>
    </>
  );
}

export { CustomPricingSkeleton };
