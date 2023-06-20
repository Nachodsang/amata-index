import { editAd, getAd, setAd } from "@/service/adSettingService";
import { NextResponse } from "next/server";

export async function GET() {
  // connecting db
  const response = await getAd();
  // setTitle();

  // res.status(200).json({ getTitle });
  return NextResponse.json(response);

  // return NextResponse.json(getTitle());
}

export async function POST(req: Request) {
  // const a = await req.json();
  // console.log(a);
  const response = await req.json();
  console.log(response);

  return NextResponse.json(await setAd(response));
}

export async function PUT(req: Request) {
  const response = await req.json();
  console.log(response);
  return NextResponse.json(
    await editAd(
      response.filterCat,
      response.filterValue,
      response.updatingField,
      response.newValue
    )
  );
}
