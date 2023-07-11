import mongoose from "mongoose";
import blogSettingModel, { IblogSetting } from "./models/blogSetting.model";
mongoose.connect(
  "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
);
export const getBlogSetting = async () => {
  const blogSetting = await blogSettingModel.find();

  return { blogSetting };
  //
  //   mongoose.disconnect();
};

export const addBlog = async (req: IblogSetting) => {
  const blogSetting = new blogSettingModel(req);
  let status: any = "";
  try {
    await blogSetting.save();
    console.log(req);
    console.log(blogSetting);
    return { status: "200", message: "complete", addedValue: blogSetting };
  } catch (err) {
    console.log("error");
    return (status = err);
  }
};

// edit company
// export const editCompany = async (
//   filterBy: string,
//   filterValue: any,

//   newValue: any
// ) => {
//   const filter = { [filterBy]: filterValue };
//   const update = newValue;

//   try {
//     //
//     const doc = await companySettingModel.findOneAndUpdate(filter, update, {
//       new: true,
//     });

//     //
//     return { status: "200", message: "complete", updatedObj: doc };
//   } catch (err) {
//     return err;
//   }
// };

// change company status
// export const editCompanyStatus = async (
//   filterBy: any,
//   filterValue: string,
//   newValue: boolean
// ) => {
//   const filter = { [filterBy]: filterValue };
//   const update = { status: newValue };

//   try {
//     //
//     const doc = await companySettingModel.findOneAndUpdate(filter, update, {
//       new: true,
//     });

//     //
//     return { status: "200", message: "complete", updatedObj: doc };
//   } catch (err) {
//     return err;
//   }
// };
