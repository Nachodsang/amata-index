import mongoose from "mongoose";
import crypto from "crypto";
import accountSettingModel, { Iaccount } from "./models/account.model";
mongoose.connect(`${process.env.DB_CONNECTION_STRING}`);

// Defining algorithm
const algorithm = "aes-256-cbc";

// Defining key
const key = crypto.randomBytes(32);

// Defining iv
const iv = crypto.randomBytes(16);

// An encrypt function
function encrypt(text: any) {
  // Creating Cipheriv with its parameter
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);

  // Updating text
  let encrypted = cipher.update(text);

  // Using concatenation
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  // Returning iv and encrypted data
  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}

// A decrypt function
async function decrypt(text: any) {
  let iv = Buffer.from(await text.iv, "hex");
  let encryptedText = Buffer.from(await text.encryptedData, "hex");

  // Creating Decipher
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);

  // Updating encrypted text
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  // returns data after decryption
  return decrypted.toString();
}

export const createAccount = async (req: Iaccount) => {
  const encryptedPassword = encrypt(req?.password);
  const data = req;
  const account = new accountSettingModel(data);

  let status: any = "";
  try {
    await account.save();
    return { status: "200", message: "complete", addedValue: account };
  } catch (err) {
    console.log(err);
    return (status = err);
  }
  //   try {
  //     await account.save();
  //     console.log(1234);
  //     return (status = {
  //       status: "200",
  //       message: "complete",

  //       account: account,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     return (status = { err: err });
  //   }
};

export const logIn = async (userName: any, password: any) => {
  const checkUserName = await accountSettingModel.findOne({
    userName: userName,
    // password: password,
    deleted: false,
  });

  if (checkUserName) {
    // const decryptedPassword = await decrypt(checkUserName?.password);
    // console.log(decryptedPassword);
    if (checkUserName?.password == password) {
      return { checkUserName };
    } else {
      return { error: "incorrect password" };
    }
  } else {
    return { error: "user not found" };
  }
};
// Encrypts output

// Decrypts output

// export const getAd = async () => {
//   const ads = await adSettingModel.find();
//   return ads;
// };

// export const setAd = async (req: IadSetting) => {
//   const ad = new adSettingModel(req);
//   let status: any = "";
//   try {
//     await ad.save();
//     return (status = {
//       status: "200",
//       message: "complete",

//       saveAd: ad,
//     });
//   } catch (err) {
//     return (status = err);
//   }
// };

// // edit ad and change ad status
// export const editAd = async (
//   filterBy: string,
//   filterValue: any,
//   updatingField: any,
//   newValue: string
// ) => {
//   const filter = { [filterBy]: filterValue };
//   const update = { [updatingField]: newValue };

//   try {
//     const doc = await adSettingModel.findOneAndUpdate(filter, update, {
//       new: true,
//     });

//     return { status: "200", message: "complete", updatedObj: doc };
//   } catch (err) {
//     return err;
//   }
// };

// export const softDeleteAd = async (
//   filterBy: any,
//   filterValue: string,
//   newValue: boolean
// ) => {
//   const filter = { [filterBy]: filterValue };
//   const update = { deleted: newValue };

//   try {
//     const doc = await adSettingModel.findOneAndUpdate(filter, update, {
//       new: true,
//     });

//     return { status: "200", message: "complete", updatedObj: doc };
//   } catch (err) {
//     return err;
//   }
// };

// export const deleteAd = async (_id: any) => {
//   try {
//     const doc = await adSettingModel.findByIdAndDelete(_id);

//     return { status: "200", message: "complete", updatedObj: doc };
//   } catch (err) {
//     return err;
//   }
// };
