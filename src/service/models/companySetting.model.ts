import { Schema, model, models, Model, Types } from "mongoose";
import { Interface } from "readline";

export interface IcompanySetting {
  _id?: Types.ObjectId;
  companyTitle?: String;
  generalInfo?: IcompanyGeneralInfo;
  filters?: IfilterInfo;
  details?: IdetailsInfo;
  contacts?: IcontactData;
  seo?: IseoInfo;

  edition?: Number;
}
export interface IcompanyGeneralInfo {
  profileUrl?: String;
  coverImage?: String;
  video?: String;
  logo?: String;
  companyNameTh?: String;
  companyNameEn?: String;
  companyNameJp?: String;
  companyNameCn?: String;
  industry?: String;
  nationality?: String;
}
export interface IfilterInfo {
  filterTitle?: String;
  filterType?: String;
}
export interface IdetailsInfo {}
export interface IcontactData {
  businessHour?: IbusinessHour;
  tel?: String;
  sms?: String;
  email?: String;
  website?: String;
  facebook?: String;
  line?: String;
  addressTh?: String;
  addressEn?: String;
  addressJp?: String;
  addressCn?: String;
  googleMap?: String;
  postcode?: String;
  tambol?: String;
  district?: String;
  province?: String;
}
export interface IbusinessHour {
  day?: String;
  status?: Boolean;
  time?: String;
}
export interface IseoInfo {
  th?: IthSeo;
  en?: IenSeo;
  jp?: IjpSeo;
  cn?: IcnSeo;
}
export interface IthSeo {
  keyword: String;
}
export interface IenSeo {
  keyword: String;
}
export interface IjpSeo {
  keyword: String;
}
export interface IcnSeo {
  keyword: String;
}
const companySettingSchema = new Schema(
  {
    companyTitle: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    client: { type: String, required: true },
    status: { type: Boolean, default: false },
    link: { type: String, required: true },

    edition: { type: Number },
    seo: [
      {
        th: [{ keyword: { type: String } }],
        en: [{ keyword: { type: String } }],
        jp: [{ keyword: { type: String } }],
        cn: [{ keyword: { type: String } }],
      },
    ],
    filters: [
      {
        filterTitle: { type: String },
        filterType: { type: String },
      },
    ],
    generalInfo: [
      {
        profileUrl: { type: String },
        coverImage: { type: String },
        video: { type: String },
        logo: { type: String },
        companyNameTh: { type: String },
        companyNameEn: { type: String },
        companyNameJp: { type: String },
        companyNameCn: { type: String },
        industry: { type: String },
        nationality: { type: String },
      },
    ],

    contacts: [
      {
        businessHour: [
          {
            day: { type: String },
            status: { type: Boolean },
            time: { type: String },
          },
        ],
        tel: { type: String },
        sms: { type: String },
        email: { type: String },
        website: { type: String },
        facebook: { type: String },
        line: { type: String },

        addressTh: { type: String },
        addressEn: { type: String },
        addressJp: { type: String },
        addressCn: { type: String },
        googleMap: { type: String },
        postcode: { type: String },
        tambol: { type: String },
        district: { type: String },
        province: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const companySettingModel: Model<IcompanySetting> =
  models.company_lists || model("company_lists", companySettingSchema);
export default companySettingModel;
