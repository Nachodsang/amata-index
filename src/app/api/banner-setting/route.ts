import {
  deleteBanner,
  editBanner,
  getBanner,
  setBanner,
  softDeleteBanner,
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
  //
  const response = await req.json();

  return NextResponse.json(await setBanner(response));
}

export async function PUT(req: Request) {
  const response = await req.json();
  const filterBy = "_id";
  // return NextResponse.json(
  //   await editBanner(
  //     response.filterCat,
  //     response.filterValue,
  //     response.updatingField,
  //     response.newValue
  //   )
  // );

  if (response.type === "status" || response.type === "order") {
    return NextResponse.json(
      await editBanner(
        response.filterCat,
        response.filterValue,
        response.updatingField,
        response.newValue
      )
    );
  } else if (response.type === "delete") {
    return NextResponse.json(
      await softDeleteBanner(filterBy, response.filterValue, response.newValue)
    );
  } else if (response.type === "deleteF") {
    response;

    return NextResponse.json(await deleteBanner(response?._id));
  }
}
