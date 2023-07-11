import { Schema, model, models, Model, Types } from "mongoose";
import { Interface } from "readline";

export interface IblogSetting {
  _id?: Types.ObjectId;
  blogTitle?: String;
  generalInfo?: IblogGeneralInfo;
  //   filters?: IfilterInfo;
  details?: IdetailsInfo;
  //   contacts?: IcontactData;
  //   seo?: IseoInfo;
  //   gallery?: String[];

  edition?: Number;
}
// export interface IgalleryInfo {
//   _id?: Types.ObjectId;
//   URL?: String;
//   order?: Number;
// }
export interface IblogGeneralInfo {
  blogUrl?: String;
  coverImage?: String;
  type?: String;
  video?: String;
  logo?: String;
  companyReview?: String;

  industry?: String;
  language?: String;
}
// export interface IfilterInfo {
//   _id?: Types.ObjectId;
//   filterTitle?: String;
//   filterType?: String;
// }
export interface IdetailsInfo {
  recommendation?: Irecommendation[];
  content?: IGroup;
  references?: Iref[];
  tags?: Itag;
  facebook?: String;
  article?: String;
}
export interface Itag {
  title?: String;
}
export interface Iref {
  title?: String;
  link?: String;
}

export interface Irecommendation {
  title?: String;
  items?: Iitems[];
}
export interface Iitems {
  itemTitle?: String;
  link?: String;
}
// export interface IcontactData {
//   businessHour?: IbusinessHour;
//   tel?: String;
//   sms?: String;
//   email?: String;
//   website?: String;
//   facebook?: String;
//   line?: String;
//   addressTh?: String;
//   addressEn?: String;
//   addressJp?: String;
//   addressCn?: String;
//   googleMap?: String;
//   postcode?: String;
//   tambol?: String;
//   district?: String;
//   province?: String;
// }
// export interface IbusinessHour {
//   _id?: Types.ObjectId;
//   day?: String;
//   status?: Boolean;
//   time?: String;
// }
export interface IseoInfo {
  keyword?: String;
  description?: String;
}

// export interface IHomePage {
//   title?: string;
//   title2?: string;
//   group: IGroup[];
// }

export interface IGroup {
  className?: string;
  grid: IGrid[];
}

export interface IGrid {
  className?: string;
  contents: IContent[];
}
export interface IContent {
  type?: string;
  className?: string;
  contentHTML?: string;
  url?: string;
  show?: boolean;
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
}
const blogSettingSchema = new Schema(
  {
    blogTitle: { type: String, required: true },
    company: { type: String },
    // description: { type: String },
    // image: { type: String, required: true },
    // client: { type: String, required: true },
    status: { type: Boolean, default: false },
    // link: { type: String, required: true },

    edition: { type: Number },
    // gallery: [{ URL: { type: String }, order: { type: Number } }],
    seo: {
      keyword: { type: String },
      description: { type: String },
    },

    // filters: [
    //   {
    //     filterTitle: { type: String },
    //     filterType: { type: String },
    //   },
    // ],
    generalInfo: {
      blogUrl: { type: String },

      coverImage: { type: String },
      type: { type: String },

      video: { type: String },
      companyReview: { type: String },
      industry: { type: String },
      language: { type: String },
    },
    // gallery: [{ type: String }],
    details: {
      recommendation: [
        {
          title: { type: String },
          items: [{ itemTitle: { type: String }, link: { type: String } }],
        },
      ],
      references: [{ title: { type: String }, link: { type: String } }],
      //   shortDescription: { type: String },
      tags: [{ title: { type: String } }],
      facebook: { type: String },
      article: { type: String },
      content: {
        grid: [
          {
            className: { type: String },
            contents: [
              {
                type: { type: String },
                className: { type: String },
                contentHTML: { type: String },
                url: { type: String },
                width: { type: String },

                maxwidth: { type: String },
                height: { type: String, default: "200px" },
                maxHeight: { type: String },
              },
            ],
          },
        ],
      },
    },

    // contacts: {
    //   businessHour: [
    //     {
    //       day: { type: String },
    //       status: { type: Boolean },
    //       time: { type: String },
    //     },
    //   ],
    //   tel: { type: String },
    //   sms: { type: String },
    //   email: { type: String },
    //   website: { type: String },
    //   facebook: { type: String },
    //   line: { type: String },

    //   addressTh: { type: String },
    //   addressEn: { type: String },
    //   addressJp: { type: String },
    //   addressCn: { type: String },
    //   googleMap: { type: String },
    //   postcode: { type: String },
    //   tambol: { type: String },
    //   district: { type: String },
    //   province: { type: String },
    // },
  },
  { timestamps: true }
);

const blogSettingModel: Model<IblogSetting> =
  models.blog_lists || model("blog_lists", blogSettingSchema);
export default blogSettingModel;
