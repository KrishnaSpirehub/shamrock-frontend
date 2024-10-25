"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/client-supabase";
import { toast } from "sonner";

type AuthContextType = {
  userDetails: any;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name?: any) => Promise<void>;
  fetchData: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  userDetails: null,
  signIn: async () => {},
  signUp: async () => {},
  fetchData: async () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [userDetails, setUserDetails] = useState<any>(null);

  useEffect(() => {
    const user = supabase.auth.getUser();
    setUserDetails(user ?? null);

    supabase.auth.onAuthStateChange(async (event, user) => {
      setUserDetails(user ?? null);
    });
  }, []);

  const signIn = async (email: string, password: string) => {
    await supabase.auth
      .signInWithPassword({
        email,
        password,
      })
      .then((response: any) => {
        if (response?.data?.user) {
          toast.success("User sign in successfully");
          fetchData();
        } else {
          toast.error(response?.error?.message || response?.error?.msg || "Something went wrong!");
        }
      })
      .catch((error: any) => {
        toast.error(error?.message || error?.msg || "Something went wrong!");
      });
  };

  const signUp = async (email: string, password: string, name?: any) => {
    await supabase.auth
      .signUp({
        email,
        password,
      })
      .then((response: any) => {
        if (response.data && response.data.user) {
          if (response.data.user.identities && response.data.user.identities?.length > 0) {
            // Insert additional data into the database
            const body: any = {
              user_id: response.data.user?.id,
              name,
              email: response.data.user?.email,
              email_verified: false,
              created_at: new Date(),
            };
            toast.success("You have registered successfully! Please verify your email.");
            supabase.from("users").insert(body);
          } else {
            toast.error("Email address is already taken.");
          }
        } else {
          toast.error(response.error?.message || "Something went wrong!");
        }
      })
      .catch((error: any) => {
        toast.error(error?.message || error?.msg || "Something went wrong!");
      });
  };

  const signOut = async () => {
    await supabase.auth
      .signOut()
      .then((response: any) => {
        if (!response?.error) {
          toast.success("Sign out succesfully");
        } else {
          toast.error("Error: Logout");
        }
      })
      .catch((error: any) => {
        toast.error(error?.msg || error?.message);
      });
  };

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        toast.error(error?.message || "Something went wrong!");
        throw error;
      }
    } catch (error: any) {
      toast.error(error?.message || error?.msg || "Something went wrong!");
    }
  };

  return (
    <AuthContext.Provider value={{ userDetails, signIn, signUp, signOut, fetchData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
