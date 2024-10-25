import { cn } from "@/lib/utils";
import Container from "./container";

function CustomSkeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("animate-pulse rounded-md bg-gray dark:bg-gray-800", className)} {...props}>
      <div className="grid grid-cols-2 gap-2 h-full w-full ">
        <div className="flex flex-col gap-4 items-center justify-center ">
          <div className="rounded-md bg-white h-4 w-2/4" />
          <div className="rounded-md bg-white h-4 w-2/4" />
          <div className="rounded-md bg-white h-4 w-2/4" />
        </div>
        <div className="flex flex-col gap-4 items-end justify-end ">
          <div className="rounded-md  bg-white h-96 w-10/12" />
        </div>
      </div>
    </div>
  );
}

export { CustomSkeleton };
