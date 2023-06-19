import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getTitle, setTitle } from "@/service/pageSettingService";

export async function GET() {
  // connecting db
  const response = await getTitle();
  // setTitle();

  // res.status(200).json({ getTitle });
  return NextResponse.json(response);

  // return NextResponse.json(getTitle());
}

export async function POST(req: Request) {
  const response = await req.json();
  // console.log(a);

  return NextResponse.json(await setTitle(response));
}
