import { NextRequest, NextResponse } from "next/server";
import { getSingleBlogSetting } from "@/service/blogSettingService";

export async function GET(req: NextRequest, res: any) {
  const blogLink = req.nextUrl.searchParams.get("id");

  //   (req.nextUrl.searchParams.get("id"));
  //   (typeof req.nextUrl.searchParams.get("id"));

  //   res.status(200).json(companyLink);
  const response = await getSingleBlogSetting(blogLink);
  return NextResponse.json(response);
}
