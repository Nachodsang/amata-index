import mongoose from "mongoose";
import pageSettingModel, { IpageSetting } from "./models/pageSetting.model";
mongoose.connect(`${process.env.DB_CONNECTION_STRING}`);
// mongoose.connect(
//   "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
// );
export const getPageSetting = async () => {
  const pageSetting = await pageSettingModel.findOne({
    edition: 1,
  });

  return { pageSetting };
};

export const setPage = async (req: IpageSetting) => {
  const pageSetting = new pageSettingModel(req);
  let status: any = "";
  try {
    await pageSetting.save();
    return { status: "200", message: "complete", addedValue: pageSetting };
  } catch (err) {
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
