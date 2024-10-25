import { FormSection } from "@/components/ui/sign-up/form-section";
import { TextmediaSection } from "@/components/ui/sign-up/text-media-section";

export default function SignUp() {
  return (
    <>
      <div className="grid grid-cols-2 max-h-[95vh] justify-center">
        <div className="md:col-span-1 col-span-2 justify-center">
          <FormSection />
        </div>
        <div className="col-span-1 justify-center md:block hidden">
          <TextmediaSection />
        </div>
      </div>
    </>
  );
}
