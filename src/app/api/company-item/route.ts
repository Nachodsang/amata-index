import { NextRequest, NextResponse } from "next/server";
import { getSingleCompanySetting } from "@/service/companyProfileService";

export async function GET(req: NextRequest, res: any) {
  const companyLink = req.nextUrl.searchParams.get("id");

  //   (req.nextUrl.searchParams.get("id"));
  //   (typeof req.nextUrl.searchParams.get("id"));

  //   res.status(200).json(companyLink);
  const response = await getSingleCompanySetting(companyLink);
  return NextResponse.json(response);
}
