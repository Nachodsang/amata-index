import mongoose from "mongoose";
import bannerSettingModel, {
  IbannerSetting,
} from "./models/bannerSetting.model";
mongoose.connect(`${process.env.DB_CONNECTION_STRING}`);
// mongoose.connect(
//   "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
// );
export const getBanner = async () => {
  const ads = await bannerSettingModel.find();
  return ads;
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

export const softDeleteBanner = async (
  filterBy: any,
  filterValue: string,
  newValue: boolean
) => {
  const filter = { [filterBy]: filterValue };
  const update = { deleted: newValue };

  try {
    //
    const doc = await bannerSettingModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    //
    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};

export const deleteBanner = async (_id: any) => {
  try {
    const doc = await bannerSettingModel.findByIdAndDelete(_id);

    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};
