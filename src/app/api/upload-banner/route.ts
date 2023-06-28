import bannerSettingModel from "@/service/models/bannerSetting.model";
import pageSettingModel from "@/service/models/pageSetting.model";
import { editPage } from "@/service/pageSettingService";
import axios from "axios";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const path = `public/banners/${Date.now() + file.name}`;

  await writeFile(path, buffer);
  const imgPath = path.slice(6);

  //   const response = await axios.put("http://localhost:3000/api/banner-setting", {
  //     updatingField: "image",
  //     newValue: imgPath,
  //   });

  return NextResponse.json({ success: true, image: imgPath });
}

export async function GET(req: Request) {
  const response = await bannerSettingModel.find();
  return NextResponse.json(response);
}
// update page setting
// export async function PUT(req: Request) {
//   const response = await req.json();
//   console.log(response);

//   const filterBy = "edition";
//   const edition = "1";

//   return NextResponse.json(
//     await editPage(filterBy, edition, response.updatingField, response.newValue)
//   );
// }
