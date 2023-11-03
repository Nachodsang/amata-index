import mongoose from "mongoose";
import blogSettingModel, { IblogSetting } from "./models/blogSetting.model";
mongoose.connect(`${process.env.DB_CONNECTION_STRING}`);
// mongoose.connect(
//   "mongodb+srv://nachodsang:Factoryindex@cluster0.izqugmj.mongodb.net/factory_index?retryWrites=true&w=majority"
// );
export const getBlogSetting = async () => {
  const blogSetting = await blogSettingModel.find();

  return { blogSetting };
};

export const getSingleBlogSetting = async (link: any) => {
  const blogSetting = await blogSettingModel.findOne({
    "blogGeneralInfo.blogUrl": link,
  });

  return { blogSetting };
};
export const addBlog = async (req: IblogSetting) => {
  const blogSetting = new blogSettingModel(req);
  let status: any = "";
  try {
    await blogSetting.save();
    req;
    blogSetting;
    return { status: "200", message: "complete", addedValue: blogSetting };
  } catch (err) {
    ("error");
    return (status = err);
  }
};

// edit blog
export const editBlog = async (
  filterBy: string,
  filterValue: any,

  newValue: any
) => {
  const filter = { [filterBy]: filterValue };
  const update = newValue;

  try {
    //
    const doc = await blogSettingModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    //
    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};

// change company status
export const editBlogStatus = async (
  filterBy: any,
  filterValue: string,
  newValue: boolean
) => {
  const filter = { [filterBy]: filterValue };
  const update = { status: newValue };

  try {
    //
    const doc = await blogSettingModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    //
    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};

export const softDeleteBlog = async (
  filterBy: any,
  filterValue: string,
  newValue: boolean
) => {
  const filter = { [filterBy]: filterValue };
  const update = { deleted: newValue };

  try {
    //
    const doc = await blogSettingModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    //
    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};

export const deleteBlog = async (_id: any) => {
  try {
    const doc = await blogSettingModel.findByIdAndDelete(_id);

    return { status: "200", message: "complete", updatedObj: doc };
  } catch (err) {
    return err;
  }
};
