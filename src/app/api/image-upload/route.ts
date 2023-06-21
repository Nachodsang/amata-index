import formidable from "formidable";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  console.log(data.get("file1"));
  // const body = Object.fromEntries(data);
  // console.log(`body: ${JSON.stringify(body)}`);

  const fileName = await saveFile(
    data.get("file1"),
    data.get("folderName")?.toString() ?? ""
  );
  // console.log(fileName);

  // console.log(body.folderName);
  // const response = await req.json();

  //   const form = new formidable.IncomingForm();
  //   form.parse(req, async function (err: any, fields: any, files: any) {
  //     console.log(fields.folderName);
  //     const fileName = await saveFile(files.file, fields.folderName);
  // fileName
  //   ? res.status(201).send({ fileName: fileName })
  //   : res.status(401).send("error save image");
}

const saveFile = async (file: any, folderName: string) => {
  console.log(`file = ${file}`);
  console.log(`folderName = ${folderName}`);
  console.log(`./public/upload/${folderName}/${file.originalFilename}`);

  const data = fs.readFileSync(file.filepath);
  const fileName = fs.existsSync(
    `./public/upload/${folderName}/${file.originalFilename}`
  )
    ? `./public/upload/${folderName}/${
        file.originalFilename.split(".")[0]
      }_${Date.now()}.${
        file.originalFilename.split(".")[
          file.originalFilename.split(".").length - 1
        ]
      }`
    : `./public/upload/${folderName}/${file.originalFilename}`;

  console.log(`fileName: ${fileName}`);

  fs.writeFileSync(fileName, data);
  console.log(`Save File = ${fileName}`);
  await fs.unlinkSync(file.filepath);
  return fileName.split("public")[1];
};
