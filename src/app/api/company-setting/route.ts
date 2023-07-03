import { NextResponse } from "next/server";
import mongoose from "mongoose";
import {
  addCompany,
  getCompanySetting,
  editCompany,
} from "@/service/companyProfileService";

export async function GET() {
  const response = await getCompanySetting();

  return NextResponse.json(response);
}

export async function POST(req: Request) {
  const response = await req.json();
  // console.log(a);

  return NextResponse.json(await addCompany(response));
}

// update page setting
export async function PUT(req: Request) {
  const response = await req.json();
  console.log("in put function");
  console.log(response);

  const filterBy = "_id";
  // const edition = "1";

  return NextResponse.json(
    await editCompany(filterBy, response._id, response.newValue)
  );
}
