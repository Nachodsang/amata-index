import { NextResponse } from "next/server";
import mongoose from "mongoose";
import {
  addCompany,
  getCompanySetting,
  editCompany,
  editCompanyStatus,
} from "@/service/companyProfileService";

export async function GET() {
  const response = await getCompanySetting();

  return NextResponse.json(response);
}

export async function POST(req: Request) {
  const response = await req.json();
  //

  return NextResponse.json(await addCompany(response));
}

// update page setting
export async function PUT(req: Request) {
  const response = await req.json();

  const filterBy = "_id";
  // const edition = "1";

  if (response.type === "status") {
    return NextResponse.json(
      await editCompanyStatus(filterBy, response.filterValue, response.newValue)
    );
  } else {
    return NextResponse.json(
      await editCompany(filterBy, response._id, response.newValue)
    );
  }
}
