import { Schema, model, models, Model, Types } from "mongoose";
import { Interface } from "readline";

export interface Iaccount {
  _id?: Types.ObjectId;
  companyTitle?: String;
  companyID?: String;
  firstName?: String;
  lastName?: String;
  userName?: String;
  password?: Ipassword;
  email?: String;

  image?: String;
  status?: Boolean;

  deleted?: Boolean;
}

export interface Ipassword {
  iv?: String;
  encryptedData?: String;
}

const accountSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    password: {
      iv: { type: String, required: true },
      encryptedData: { type: String, required: true },
    },
    email: { type: String, required: true },
    companyTitle: { type: String },
    companyID: { type: String },

    image: { type: String, required: false },

    status: { type: Boolean, default: false },

    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const accountSettingModel: Model<Iaccount> =
  models.account_lists || model("account_lists", accountSchema);
export default accountSettingModel;
