import { Schema, model, models, Model, Types } from "mongoose";
import { Interface } from "readline";

export interface IpageSetting {
  _id?: Types.ObjectId;
  pageTitle?: String;
  description?: String;
  coverImage?: String;
  themeColor?: String;
  edition?: Number;
  coreColor?: { type: String };
  coreHeaderColor?: { type: String };
}

const pageSettingSchema = new Schema(
  {
    pageTitle: { type: String, default: "Factory Index" },
    description: { type: String },
    coverImage: { type: String },
    themeColor: { type: String },
    coreColor:{type:String},
    coreHeaderColor:{type:String},

    edition: { type: Number, unique: true },
  },
  { timestamps: true }
);

const pageSettingModel: Model<IpageSetting> =
  models.page_settings || model("page_settings", pageSettingSchema);
export default pageSettingModel;
