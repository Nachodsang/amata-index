import { Schema, model, models, Model, Types } from "mongoose";
import { Interface } from "readline";

export interface IcompanySetting {
  _id?: Types.ObjectId;
  companyTitle?: String;
  generalInfo?: IcompanyGeneralInfo;
  filters?:IfilterInfo;
 
  edition?: Number;
}
export interface IcompanyGeneralInfo{
  profileUrl?:String;
  coverImage?:String;
  video?:String;
  logo?:String;
  companyNameTh?:String;
  companyNameEn?:String;
  companyNameJp?:String;
  companyNameCn?:String;
  industry?:String;
  nationality?:String;
}
export interface IfilterInfo{
filters?:String[];
}
export interface IdetailsInfo{

}
export interface IcontactData{
  businessHour?: IbusinessHour;
}
export interface IbusinessHour{
  day?:String;
  status?:Boolean;
  time?:String
}

const companySettingSchema = new Schema(
  {
    adTitle: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    client: { type: String, required: true },
    status: { type: Boolean, default: false },
    link: { type: String, required: true },

    edition: { type: Number },
  },
  { timestamps: true }
);

const adSettingModel: Model<IadSetting> =
  models.ad_lists || model("ad_lists", adSettingSchema);
export default adSettingModel;
