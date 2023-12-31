import mongoose from "mongoose";
import companySettingModel, {
  IcompanySetting,
} from "./models/companySetting.model";
// mongoose.connect(
//   "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
// );
mongoose.connect(`${process.env.DB_CONNECTION_STRING}`);

export const getCompanySetting = async () => {
  const companySetting = await companySettingModel.find();

  return { companySetting };
};
