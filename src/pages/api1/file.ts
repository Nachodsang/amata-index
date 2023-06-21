
import formidable from "formidable";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
// import { getServerSession } from "next-auth/next"
// import { authOptions } from './auth/[...nextauth]'
export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  //   const session = await getServerSession(req, res, authOptions);
  //   if (!session) {
  //     res.status(401).json({ message: "You must be logged in." });
  //     return;
  //   }
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err: any, fields: any, files: any) {
    const fileName = await saveFile(files.file, fields.folderName);
    fileName
      ? res.status(201).send({ fileName: fileName })
      : res.status(401).send("error save image");
  });

  // if (resData) return res.status(201).send(resData);
  // else return res.status(401).send("error save image");
  // return res.status(401).send("error save image");
};

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

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};

export default handler;
