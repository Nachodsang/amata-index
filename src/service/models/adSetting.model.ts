import { Schema, model, models, Model, Types } from "mongoose";
import { Interface } from "readline";

export interface IadSetting {
  _id?: Types.ObjectId;
  adTitle?: String;
  client?: String;
  description?: String;
  image?: String;

  edition?: Number;
}

const adSettingSchema = new Schema(
  {
    adTitle: { type: String },
    description: { type: String },
    image: { type: String },
    client: { type: String },

    edition: { type: Number },
  },
  { timestamps: true }
);

const adSettingModel: Model<IadSetting> =
  models.ad_lists || model("ad_lists", adSettingSchema);
export default adSettingModel;
