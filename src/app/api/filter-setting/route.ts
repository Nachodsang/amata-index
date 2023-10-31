import {
  getFilter,
  addFilter,
  activeFilter,
  deleteFilter,
  onDeleteFilter,
  editFilterTitle,
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
  //
  const response = await req.json();
  //

  return NextResponse.json(await addFilter(response));
}

// on active filter
export async function PUT(req: Request) {
  const response = await req.json();
  //

  const filterBy = "_id";

  if (response.type === "edit") {
    return NextResponse.json(
      await editFilterTitle(
        filterBy,
        response._id,
        response?.updatingField,
        response.newValue
      )
    );
  } else if (response.type === "delete") {
    return NextResponse.json(await onDeleteFilter(response?._id));
  } else {
    return NextResponse.json(
      await activeFilter(filterBy, response._id, "active", response.newValue)
    );
  }
}

// deletion
export async function DELETE(req: Request) {
  const response = await req.json();
  //

  return NextResponse.json(
    await deleteFilter(response.deleteBy, response.deleteValue)
  );
}
