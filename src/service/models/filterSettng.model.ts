import { Schema, model, models, Model, Types } from "mongoose";
import { Interface } from "readline";

export interface IfilterSetting {
  _id?: Types.ObjectId;
  filterCategory?: String;
  filterType?: String;
  filterTitle?: String;
  active?: Boolean;
}

const filterSettingSchema = new Schema(
  {
    // pageTitle: { type: String, default: "Factory Index" },
    // description: { type: String },
    // coverImage: { type: String },
    // themeColor: { type: String },
    // coreColor: { type: String },
    // coreHeaderColor: { type: String },
    filterCategory: { type: String, required: true },
    filterType: { type: String, required: true },
    filterTitle: { type: String, required: true },
    active: { type: Boolean, default: false },

    // edition: { type: Number, unique: true },
  },
  { timestamps: true }
);

const filterSettingModel: Model<IfilterSetting> =
  models.filter_settings || model("filter_settings", filterSettingSchema);
export default filterSettingModel;
