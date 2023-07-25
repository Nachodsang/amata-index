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
  //
  //   mongoose.disconnect();
};