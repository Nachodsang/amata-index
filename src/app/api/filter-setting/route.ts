import {
  getFilter,
  addFilter,
  activeFilter,
  deleteFilter,
} from "@/service/filterSettingService";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getFilter();

  // res.status(200).json({ getTitle });
  return NextResponse.json(response);

  // return NextResponse.json(getTitle());
}

export async function POST(req: Request) {
  // const a = await req.json();
  // console.log(a);
  const response = await req.json();
  // console.log(response);

  return NextResponse.json(await addFilter(response));
}

// on active filter
export async function PUT(req: Request) {
  const response = await req.json();
  // console.log(response);

  const filterBy = "filterTitle";
  // const edition = req.filterTitle;

  return NextResponse.json(
    await activeFilter(
      filterBy,
      response.filterTitle,
      "active",
      response.newValue
    )
  );
}

// deletion
export async function DELETE(req: Request) {
  console.log("delete function");
  const response = await req.json();
  // console.log(response);

  return NextResponse.json(
    await deleteFilter(response.deleteBy, response.deleteValue)
  );
}
