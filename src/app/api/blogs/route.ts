import { NextResponse } from "next/server";
import mongoose from "mongoose";
import {
  addBlog,
  getBlogSetting,
  editBlog,
  editBlogStatus,
  softDeleteBlog,
  //   editCompany,
  //   editCompanyStatus,
} from "@/service/blogSettingService";

export async function GET() {
  const response = await getBlogSetting();

  return NextResponse.json(response);
}

export async function POST(req: Request) {
  const response = await req.json();
  //

  return NextResponse.json(await addBlog(response));
}

export async function PUT(req: Request) {
  const response = await req.json();

  const filterBy = "_id";
  // const edition = "1";

  if (response.type === "status") {
    return NextResponse.json(
      await editBlogStatus(filterBy, response.filterValue, response.newValue)
    );
  } else if (response.type === "delete") {
    return NextResponse.json(
      await softDeleteBlog(filterBy, response.filterValue, response.newValue)
    );
  } else {
    return NextResponse.json(
      await editBlog(filterBy, response._id, response.newValue)
    );
  }
}
