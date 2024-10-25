"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../button";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();
  const { signUp } = useAuth();

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    try {
      await signUp(email, password, name);
      route.push("/sign-in");
    } catch (error: any) {
      toast.error(error?.message || error?.msg || "Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-[90vh]">
      <form onSubmit={handleSignUp}>
        <div className="flex flex-col justify-between max-w-[400px] m-auto gap-8 px-3">
          <h3 className="text-2xl font-medium text-copy">Sign up</h3>
          <div className="flex flex-col  gap-2">
            <div className="grid w-full items-center gap-1.5 mb-5">
              <Label htmlFor="name" className="text-[#344054]">
                Name*
              </Label>
              <Input
                required
                type="text"
                id="name"
                className="focus:outline-none outline-none text-[#667085]"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-1.5 mb-5">
              <Label htmlFor="email">Email*</Label>
              <Input
                required
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Password*</Label>
              <Input
                required
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Label>Must be at least 8 characters.</Label>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full items-center sm:justify-start justify-center">
            <Button className="py-4 text-white w-full" type="submit">
              Create account
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
              Sign up with Google
            </Button>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-center font-normal md:text-sm dark:text-white leading-7 text-[#667085]">
              Already have an account? &nbsp;
              <a href="/sign-in" className="text-primary">
                Log in
              </a>
            </p>
          </div>
        </div>
      </form>
      <div className="flex lg:flex-row flex-col items-center justify-between px-10 mt-20">
        <p className="text-sm text-center font-normal md:text-sm dark:text-white leading-7 text-[#667085]">
          Copyright GHG Pro. All rights reserved.
        </p>
        <div className="flex flex-row items-center text-[#667085]">
          <Mail className="mr-2 h-4 w-4" />
          <p className="text-sm text-center font-normal md:text-sm dark:text-white leading-7 text-[#667085]">
            enquires@shamrock-hse.com
          </p>
        </div>
      </div>
    </div>
  );
};
