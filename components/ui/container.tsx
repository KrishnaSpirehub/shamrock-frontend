"use client";

function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="sm:w-[80%] w-[90%] m-auto py-10">{children}</div>;
}

export default Container;
