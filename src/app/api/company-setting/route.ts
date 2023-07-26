import { NextResponse } from "next/server";
import mongoose from "mongoose";
import {
  addCompany,
  getCompanySetting,
  editCompany,
  editCompanyStatus,
  softDeleteCompany,
  deleteCompany,
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
  } else if (response.type === "delete") {
    return NextResponse.json(
      await softDeleteCompany(filterBy, response.filterValue, response.newValue)
    );
  } else if (response.type === "deleteF") {
    return NextResponse.json(await deleteCompany(response?._id));
  } else {
    return NextResponse.json(
      await editCompany(filterBy, response._id, response.newValue)
    );
  }
}

// export async function DELETE(req: Request) {
//   console.log(req);
//   const response = await req.json();
//   //
//   console.log("route", response?._id);

//   return NextResponse.json(await deleteCompany(response?._id));
// }
