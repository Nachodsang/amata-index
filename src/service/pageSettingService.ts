import mongoose from "mongoose";
import pageSettingModel, { IpageSetting } from "./models/pageSetting.model";
mongoose.connect(
  "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
);
export const getTitle = async () => {
  //   await mongoose.connect(
  //     "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
  //   );
  const pageSetting = await pageSettingModel.find();
  return pageSetting;
  //   console.log("title", pageSetting);
  //   mongoose.disconnect();
};

export const setTitle = async (req: IpageSetting) => {
  console.log(req);
  const title = new pageSettingModel(req);
  let status: any = "";
  try {
    await title.save();
    return (status = "complete");
  } catch (err) {
    console.log(err);
    return (status = err);
  }
};
