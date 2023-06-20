import { Schema, model, models, Model, Types } from "mongoose";
import { Interface } from "readline";

export interface IbannerSetting {
  _id?: Types.ObjectId;
  bannerTitle?: String;
  client?: String;
  description?: String;
  image?: String;

  edition?: Number;
}

const bannerSettingSchema = new Schema(
  {
    bannerTitle: { type: String },
    client: { type: String },

    description: { type: String },
    image: { type: String },

    edition: { type: Number },
  },
  { timestamps: true }
);

const bannerSettingModel: Model<IbannerSetting> =
  models.banner_lists || model("banner_lists", bannerSettingSchema);
export default bannerSettingModel;