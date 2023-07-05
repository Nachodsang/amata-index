import mongoose from "mongoose";
import bannerSettingModel, {
  IbannerSetting,
} from "./models/bannerSetting.model";
mongoose.connect(
  "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
);
export const getBanner = async () => {
  //   await mongoose.connect(
  //     "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
  //   );
  const ads = await bannerSettingModel.find();
  return ads;
  //
  //   mongoose.disconnect();
};

export const setBanner = async (req: IbannerSetting) => {
  const banner = new bannerSettingModel(req);
  let status: any = "";
  try {
    await banner.save();
    return (status = {
      status: "200",
      message: "complete",
      savedBanner: banner,
    });
    // (status = "complete");
  } catch (err) {
    return (status = err);
  }
};

// edit banner
export const editBanner = async (
  filterBy: string,
  filterValue: any,
  updatingField: any,
  newValue: string
) => {
  const filter = { [filterBy]: filterValue };
  const update = { [updatingField]: newValue };

  try {
    const doc = await bannerSettingModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};
