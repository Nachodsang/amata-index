import { NextResponse } from "next/server";
import mongoose from "mongoose";
import {
  editPage,
  getPageSetting,
  setPage,
} from "@/service/pageSettingService";

export async function GET() {
  const response = await getPageSetting();

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

  const filterBy = "edition";
  const edition = "1";

  return NextResponse.json(
    await editPage(filterBy, edition, response.updatingField, response.newValue)
  );
}
