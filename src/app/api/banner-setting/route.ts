import {
  editBanner,
  getBanner,
  setBanner,
} from "@/service/bannerSettingService";
import { NextResponse } from "next/server";

export async function GET() {
  // connecting db
  const response = await getBanner();
  // setTitle();

  // res.status(200).json({ getTitle });
  return NextResponse.json(response);

  // return NextResponse.json(getTitle());
}

export async function POST(req: Request, res: Response) {
  // const a = await req.json();
  // console.log(a);
  const response = await req.json();
  console.log(response);

  return NextResponse.json(await setBanner(response));
}

export async function PUT(req: Request) {
  const response = await req.json();
  console.log(response);

  return NextResponse.json(
    await editBanner(
      response.filterCat,
      response.filterValue,
      response.updatingField,
      response.newValue
    )
  );
}
