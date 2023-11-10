import { createAccount, getUser, logIn } from "@/service/accountService";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // connecting db
  const response = await getUser(req);
  // setTitle();

  // res.status(200).json({ getTitle });

  return NextResponse.json(response);

  // return NextResponse.json(getTitle());
}

export async function POST(req: Request) {
  const res = await req.json();
  //
  if (res?.type == "register") {
    // const response = await req.json();

    return NextResponse.json(await createAccount(res));
  } else if (res?.type == "checkLogIn") {
    return NextResponse.json(await getUser(res));
  } else {
    return NextResponse.json(await logIn(res?.userName, res?.password));
  }
}

// export async function PUT(req: Request) {
//   const response = await req.json();
//   const filterBy = "_id";

//   if (response.type === "status" || response.type === "order") {
//     return NextResponse.json(
//       await editAd(
//         response.filterCat,
//         response.filterValue,
//         response.updatingField,
//         response.newValue
//       )
//     );
//   } else if (response.type === "delete") {
//     return NextResponse.json(
//       await softDeleteAd(filterBy, response.filterValue, response.newValue)
//     );
//   } else if (response.type === "deleteF") {
//     return NextResponse.json(await deleteAd(response?._id));
//   }
// }
