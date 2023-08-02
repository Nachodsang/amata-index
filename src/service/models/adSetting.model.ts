import { Schema, model, models, Model, Types } from "mongoose";
import { Interface } from "readline";

export interface IadSetting {
  _id?: Types.ObjectId;
  companyTitle?: String;
  contact?: String;
  description?: String;
  image?: String;
  status?: Boolean;
  link?: String;
  companyPage?: String;
  deleted?: Boolean;

  edition?: Number;
}

const adSettingSchema = new Schema(
  {
    adTitle: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    client: { type: String, required: true },
    status: { type: Boolean, default: false },
    link: { type: String, required: true },
    deleted: { type: Boolean, default: false },
    edition: { type: Number },
  },
  { timestamps: true }
);

const adSettingModel: Model<IadSetting> =
  models.ad_lists || model("ad_lists", adSettingSchema);
export default adSettingModel;
