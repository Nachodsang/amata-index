import { Schema, model, models, Model, Types } from "mongoose";
import { Interface } from "readline";

export interface IpageSetting {
  _id?: Types.ObjectId;
  pageTitle?: String;
  description?: String;
  coverImage?: String;
  themeColor?: String;
  edition?: Number;
}

const pageSettingSchema = new Schema(
  {
    pageTitle: { type: String, default: "Factory Index" },
    description: { type: String },
    coverImage: { type: String },
    themeColor: { type: String },
    edition: { type: Number },
  },
  { timestamps: true }
);

const pageSettingModel: Model<IpageSetting> =
  models.page_settings || model("page_settings", pageSettingSchema);
export default pageSettingModel;
