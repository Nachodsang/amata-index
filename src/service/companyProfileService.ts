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

export const getSingleCompanySetting = async (link: any) => {
  const companySetting = await companySettingModel.findOne({
    "generalInfo.profileUrl": link,
  });

  return { companySetting };
  //
  //   mongoose.disconnect();
};
export const addCompany = async (req: IcompanySetting) => {
  const companySetting = new companySettingModel(req);
  let status: any = "";
  try {
    await companySetting.save();
    return { status: "200", message: "complete", addedValue: companySetting };
  } catch (err) {
    return (status = err);
  }
};

// edit company
export const editCompany = async (
  filterBy: string,
  filterValue: any,

  newValue: any
) => {
  const filter = { [filterBy]: filterValue };
  const update = newValue;

  try {
    //
    const doc = await companySettingModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    //
    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};

// change company status
export const editCompanyStatus = async (
  filterBy: any,
  filterValue: string,
  newValue: boolean
) => {
  const filter = { [filterBy]: filterValue };
  const update = { status: newValue };

  try {
    //
    const doc = await companySettingModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    //
    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};

export const softDeleteCompany = async (
  filterBy: any,
  filterValue: string,
  newValue: boolean
) => {
  const filter = { [filterBy]: filterValue };
  const update = { deleted: newValue };

  try {
    //
    const doc = await companySettingModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    //
    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};

export const deleteCompany = async (_id: any) => {
  try {
    //

    const doc = await companySettingModel.findByIdAndDelete(_id);

    //

    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};
