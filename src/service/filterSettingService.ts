import mongoose from "mongoose";
import filterSettingModel, {
  IfilterSetting,
} from "./models/filterSettng.model";
mongoose.connect(`${process.env.DB_CONNECTION_STRING}`);
// mongoose.connect(
//   "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
// );
export const getFilter = async () => {
  const filters = await filterSettingModel.find();
  return { filters };
};

export const addFilter = async (req: IfilterSetting) => {
  const response = new filterSettingModel(req);
  let status: any = "";
  try {
    await response.save();
    return { status: "200", message: "complete", addedValue: response };
  } catch (err) {
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
export const editFilterTitle = async (
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
  } catch (err) {}
};

export const onDeleteFilter = async (_id: any) => {
  try {
    //

    const doc = await filterSettingModel.findByIdAndDelete(_id);

    //

    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};

// edit filter type
export const editFilterType = async (
  filterBy: string,
  filterValue: any,
  updatingField: any,
  newValue: boolean
) => {
  const filter = { [filterBy]: filterValue };
  const update = { [updatingField]: newValue };

  try {
    const doc = await filterSettingModel.updateMany(filter, { $set: update });

    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};
