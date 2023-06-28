import mongoose from "mongoose";
import companySettingModel, {
  IcompanySetting,
} from "./models/companySetting.model";
mongoose.connect(
  "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
);
export const getCompanySetting = async () => {
  //   await mongoose.connect(
  //     "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
  //   );
  const companySetting = await companySettingModel.find();

  return { companySetting };
  //   console.log("title", pageSetting);
  //   mongoose.disconnect();
};

export const addCompany = async (req: IcompanySetting) => {
  console.log(req);
  const companySetting = new companySettingModel(req);
  let status: any = "";
  try {
    await companySetting.save();
    return { status: "200", message: "complete", addedValue: companySetting };
  } catch (err) {
    console.log(err);
    return (status = err);
  }
};

// edit banner
// export const editPage = async (
//   filterBy: string,
//   filterValue: any,
//   updatingField: any,
//   newValue: string
// ) => {
//   const filter = { [filterBy]: filterValue };
//   const update = { [updatingField]: newValue };

//   try {
//     const doc = await pageSettingModel.findOneAndUpdate(filter, update, {
//       new: true,
//     });

//     return { status: "200", message: "complete", updatedObj: doc };
//   } catch (err) {
//     return err;
//   }
// };
