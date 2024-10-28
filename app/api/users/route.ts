import { createServerComponentClient } from "@/lib/server-supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({
        status: 400,
        message: "Wrong payload.",
        hint: "May you forgot to pass the email?",
      });
    }

    const supabase = createServerComponentClient();

    let { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);

    if (userError) {
      return NextResponse.json(userError, { status: 500 });
    }

    if (userData && userData.length > 0) {
      return NextResponse.json({
        status: 400,
        message: "User already exist",
        data: userData,
      });
    }

    const newUser: any = {
      created_at: new Date(),
      email: email,
      email_verified: true,
      name: "Guest",
    };

    const { data: insertData, error: insertError } = await supabase
      .from("users")
      .insert(newUser)
      .select("*");

    if (insertError) {
      return NextResponse.json(insertError, { status: 500 });
    }

    return NextResponse.json({
      status: 200,
      message: "User created successfully",
      data: insertData,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Internal server error", error });
  }
}
