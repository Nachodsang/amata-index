import { NextResponse } from "next/server";
import mongoose from "mongoose";
import {
  editPage,
  getPageSetting,
  setPage,
} from "@/service/pageSettingService";

export async function GET() {
  console.log("in");
  const response = await getPageSetting();
  console.log("out");

  return NextResponse.json(response);
}

export async function POST(req: Request) {
  const response = await req.json();
  // console.log(a);

  return NextResponse.json(await setPage(response));
}

// update page setting
export async function PUT(req: Request) {
  const response = await req.json();
  console.log(response);

  const filterBy = "_id";
  const uniqueId = "64911a567476a2ad0d344070";

  return NextResponse.json(
    await editPage(
      filterBy,
      uniqueId,
      response.updatingField,
      response.newValue
    )
  );
}
