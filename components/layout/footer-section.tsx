import Container from "../ui/container";

const footerPageData = {
  footerTitle: "Copyright GHG Pro. All rights reserved.",
};

export default function FooterSection({ footerPageDatas }: any) {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray text-center font-normal px-4">
            {footerPageData?.footerTitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
