import mongoose from "mongoose";
import pageSettingModel, { IpageSetting } from "./models/pageSetting.model";
mongoose.connect(
  "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
);
export const getPageSetting = async () => {
  //   await mongoose.connect(
  //     "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
  //   );
  const pageSetting = await pageSettingModel.findOne({
    _id: "64911a567476a2ad0d344070",
  });

  console.log(pageSetting);
  return { pageSetting };
  //   console.log("title", pageSetting);
  //   mongoose.disconnect();
};

export const setPage = async (req: IpageSetting) => {
  console.log(req);
  const pageSetting = new pageSettingModel(req);
  let status: any = "";
  try {
    await pageSetting.save();
    return { status: "200", message: "complete", addedValue: pageSetting };
  } catch (err) {
    console.log(err);
    return (status = err);
  }
};

// edit banner
export const editPage = async (
  filterBy: string,
  filterValue: any,
  updatingField: any,
  newValue: string
) => {
  const filter = { [filterBy]: filterValue };
  const update = { [updatingField]: newValue };

  try {
    const doc = await pageSettingModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};
