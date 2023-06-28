import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { addCompany, getCompanySetting } from "@/service/companyProfileService";

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
// export async function PUT(req: Request) {
//   const response = await req.json();
//   console.log(response);

//   const filterBy = "edition";
//   const edition = "1";

//   return NextResponse.json(
//     await editPage(filterBy, edition, response.updatingField, response.newValue)
//   );
// }
