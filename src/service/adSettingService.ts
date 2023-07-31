import mongoose from "mongoose";
import adSettingModel, { IadSetting } from "./models/adSetting.model";
mongoose.connect(
  "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
);
export const getAd = async () => {
  //   await mongoose.connect(
  //     "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
  //   );
  const ads = await adSettingModel.find();
  return ads;
  //
  //   mongoose.disconnect();
};

export const setAd = async (req: IadSetting) => {
  const ad = new adSettingModel(req);
  let status: any = "";
  try {
    await ad.save();
    return (status = {
      status: "200",
      message: "complete",

      saveAd: ad,
    });
  } catch (err) {
    return (status = err);
  }
};

// edit ad and change ad status
export const editAd = async (
  filterBy: string,
  filterValue: any,
  updatingField: any,
  newValue: string
) => {
  const filter = { [filterBy]: filterValue };
  const update = { [updatingField]: newValue };

  try {
    const doc = await adSettingModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};

export const softDeleteAd = async (
  filterBy: any,
  filterValue: string,
  newValue: boolean
) => {
  const filter = { [filterBy]: filterValue };
  const update = { deleted: newValue };

  try {
    const doc = await adSettingModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};

export const deleteAd = async (_id: any) => {
  try {
    const doc = await adSettingModel.findByIdAndDelete(_id);

    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};
