"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../button";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export const FormSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();
  const { signIn } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      route.push("/");
    } catch (error: any) {
      toast.error(error?.message || error?.msg || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-[100vh] flex flex-col items-center bg-[#F7F6F7] justify-center">
      <form
        onSubmit={handleSubmit}
        style={{ zIndex: "0 !important" }}
        className="-mb-[50px] relative mx-3"
      >
        <div className="bg-white flex flex-col justify-center max-w-[560px] my-5 m-auto gap-6 p-6 shadow-2xl rounded-lg ">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-medium text-copy">Log in</h3>
            <p className="font-normal text-md text-[#6B7280]">
              GHGPro allows organisations of any level to start tracking their Greenhouse gas
              emissions
            </p>
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Enter email here</Label>
              <Input
                required
                type="email"
                id="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Enter password here </Label>
              <Input
                required
                type="password"
                id="password"
                placeholder="Enter your password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-[14px] font-medium text-center md:mt-1 mt-0 md:mb-4 mb-2 text-primary cursor-pointer">
              Forgot your password?
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full items-center sm:justify-start justify-center">
            <Button className="py-4 text-white w-full" type="submit">
              Log in
            </Button>
            <Button variant="outline" className="w-full border border-slate-300">
              <Image
                src="/images/social-icon.png"
                width={21}
                height={21}
                className="mr-2"
                objectFit="cover"
                alt="social-icon"
              />
              Log in with Google
            </Button>
          </div>
        </div>
      </form>
      <div
        className="min-h-60 w-full bg-no-repeat "
        style={{
          backgroundImage: "url('/images/line_graphic.png')",
          width: "100%",
          position: "static",
          backgroundPosition: "center",
          backgroundSize: "auto",
        }}
      />
    </div>
  );
};
