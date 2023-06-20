import formidable from "formidable";
import fs from "fs";
import { NextResponse } from "next/server";
export async function POST(req: any) {
  //   const response = await req.json();

  const form = new formidable.IncomingForm();
  form.parse(req, async function (err: any, fields: any, files: any) {
    console.log(fields.folderName);
    const fileName = await saveFile(files.file, fields.folderName);
    // fileName
    //   ? res.status(201).send({ fileName: fileName })
    //   : res.status(401).send("error save image");
  });

  const saveFile = async (file: any, folderName: string) => {
    console.log(`folderName = ${folderName}`);
    const data = fs.readFileSync(file.filepath);
    const fileName = fs.existsSync(
      `./public/img/upload/${folderName}/${file.originalFilename}`
    )
      ? `./public/img/upload/${folderName}/${
          file.originalFilename.split(".")[0]
        }_${Date.now()}.${
          file.originalFilename.split(".")[
            file.originalFilename.split(".").length - 1
          ]
        }`
      : `./public/img/upload/${folderName}/${file.originalFilename}`;

    fs.writeFileSync(fileName, data);
    console.log(`Save File = ${fileName}`);
    await fs.unlinkSync(file.filepath);
    return fileName.split("public")[1];
  };
}
