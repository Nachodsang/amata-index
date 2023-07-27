import {
  deleteAd,
  editAd,
  getAd,
  setAd,
  softDeleteAd,
} from "@/service/adSettingService";
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
  //
  const response = await req.json();

  return NextResponse.json(await setAd(response));
}

export async function PUT(req: Request) {
  const response = await req.json();
  const filterBy = "_id";

  if (response.type === "status" || response.type === "order") {
    return NextResponse.json(
      await editAd(
        response.filterCat,
        response.filterValue,
        response.updatingField,
        response.newValue
      )
    );
  } else if (response.type === "delete") {
    return NextResponse.json(
      await softDeleteAd(filterBy, response.filterValue, response.newValue)
    );
  } else if (response.type === "deleteF") {
    return NextResponse.json(await deleteAd(response?._id));
  }
}
