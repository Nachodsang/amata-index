import mongoose from "mongoose";
import filterSettingModel, {
  IfilterSetting,
} from "./models/filterSettng.model";
mongoose.connect(
  "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
);
export const getFilter = async () => {
  //   await mongoose.connect(
  //     "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
  //   );
  const filters = await filterSettingModel.find();
  return { filters };
  //   console.log("title", pageSetting);
  //   mongoose.disconnect();
};

export const addFilter = async (req: IfilterSetting) => {
  // console.log(req);
  const response = new filterSettingModel(req);
  let status: any = "";
  try {
    await response.save();
    return { status: "200", message: "complete", addedValue: response };
  } catch (err) {
    console.log(err);
    return (status = err);
  }
};

// // activate filter
export const activeFilter = async (
  filterBy: string,
  filterValue: any,
  updatingField: any,
  newValue: boolean
) => {
  const filter = { [filterBy]: filterValue };
  const update = { [updatingField]: newValue };

  try {
    const doc = await filterSettingModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};

// delete Filter
export const deleteFilter = async (filterBy: string, filterValue: string) => {
  try {
    const del = await filterSettingModel.findOneAndDelete({
      [filterBy]: filterValue,
    });
    return { status: "200", message: "deletion complete", deletedValue: del };
  } catch (err) {
    console.log("here");
    console.log(err);
  }
};
