"use client";
import { useEffect, useState } from "react";
import Ip from "../Input/Input";
import InputGroup from "../InputGroup/InputGroup";
import FileInput from "../FileInput/FileInput";
import DropDown from "../DropDown/DropDown";
import Swal from "sweetalert2";
const mockData = [1, 2, 3, 4, 5, 6, 7];
const nationalities = [
  { NationalityID: 1, CountryCode: "GB", Nationality: "British" },
  { NationalityID: 34, CountryCode: "AF", Nationality: "Afghan" },
  { NationalityID: 35, CountryCode: "AL", Nationality: "Albanian" },
  { NationalityID: 36, CountryCode: "DZ", Nationality: "Algerian" },
  { NationalityID: 158, CountryCode: "US", Nationality: "American" },
  { NationalityID: 38, CountryCode: "AD", Nationality: "Andorran" },
  { NationalityID: 39, CountryCode: "AO", Nationality: "Angolan" },
  { NationalityID: 40, CountryCode: "AM", Nationality: "Armenian" },
  { NationalityID: 41, CountryCode: "AT", Nationality: "Austrian" },
  { NationalityID: 42, CountryCode: "AZ", Nationality: "Azerbaijani" },
  { NationalityID: 2, CountryCode: "AR", Nationality: "Argentinian" },
  { NationalityID: 3, CountryCode: "AU", Nationality: "Australian" },
  { NationalityID: 43, CountryCode: "BH", Nationality: "Bahraini" },
  { NationalityID: 44, CountryCode: "BD", Nationality: "Bangladeshi" },
  { NationalityID: 45, CountryCode: "BB", Nationality: "Barbadian" },
  { NationalityID: 46, CountryCode: "BY", Nationality: "Belarusian" },
  { NationalityID: 47, CountryCode: "BZ", Nationality: "Belizean" },
  { NationalityID: 48, CountryCode: "BJ", Nationality: "Beninese" },
  { NationalityID: 49, CountryCode: "BM", Nationality: "Bermudian" },
  { NationalityID: 50, CountryCode: "BT", Nationality: "Bhutanese" },
  { NationalityID: 51, CountryCode: "BO", Nationality: "Bolivian" },
  { NationalityID: 52, CountryCode: "BA", Nationality: "Bosnian" },
  { NationalityID: 53, CountryCode: "BW", Nationality: "Botswanan" },
  { NationalityID: 54, CountryCode: "BG", Nationality: "Bulgarian" },
  { NationalityID: 55, CountryCode: "BF", Nationality: "Burkinese" },
  { NationalityID: 56, CountryCode: "BI", Nationality: "Burundian" },
  { NationalityID: 7, CountryCode: "CA", Nationality: "Canadian" },
  { NationalityID: 8, CountryCode: "CN", Nationality: "Chinese" },
  { NationalityID: 9, CountryCode: "CO", Nationality: "Colombian" },
  { NationalityID: 10, CountryCode: "CU", Nationality: "Cuban" },
  { NationalityID: 57, CountryCode: "KH", Nationality: "Cambodian" },
  { NationalityID: 58, CountryCode: "CM", Nationality: "Cameroonian" },
  { NationalityID: 59, CountryCode: "CV", Nationality: "Cape Verdean" },
  { NationalityID: 60, CountryCode: "TD", Nationality: "Chadian" },
  { NationalityID: 61, CountryCode: "CL", Nationality: "Chilean" },
  { NationalityID: 62, CountryCode: "CG", Nationality: "Congolese" },
  { NationalityID: 63, CountryCode: "CR", Nationality: "Costa Rican" },
  { NationalityID: 64, CountryCode: "HR", Nationality: "Croat" },
  { NationalityID: 65, CountryCode: "CY", Nationality: "Cypriot" },
  { NationalityID: 66, CountryCode: "CZ", Nationality: "Czech" },
  { NationalityID: 67, CountryCode: "DK", Nationality: "Danish" },
  { NationalityID: 11, CountryCode: "DO", Nationality: "Dominican" },
  { NationalityID: 68, CountryCode: "DJ", Nationality: "Djiboutian" },
  { NationalityID: 69, CountryCode: "DM", Nationality: "Dominican" },
  { NationalityID: 26, CountryCode: "NL", Nationality: "Dutch" },
  { NationalityID: 12, CountryCode: "EC", Nationality: "Ecuadorean" },
  { NationalityID: 70, CountryCode: "EG", Nationality: "Egyptian" },
  { NationalityID: 71, CountryCode: "ER", Nationality: "Eritrean" },
  { NationalityID: 72, CountryCode: "EE", Nationality: "Estonian" },
  { NationalityID: 73, CountryCode: "ET", Nationality: "Ethiopian" },
  { NationalityID: 74, CountryCode: "FJ", Nationality: "Fijian" },
  { NationalityID: 75, CountryCode: "FI", Nationality: "Finnish" },
  { NationalityID: 76, CountryCode: "PF", Nationality: "French Polynesian" },
  { NationalityID: 14, CountryCode: "FR", Nationality: "French" },
  { NationalityID: 77, CountryCode: "GA", Nationality: "Gabonese" },
  { NationalityID: 78, CountryCode: "GM", Nationality: "Gambian" },
  { NationalityID: 79, CountryCode: "GE", Nationality: "Georgian" },
  { NationalityID: 15, CountryCode: "DE", Nationality: "German" },
  { NationalityID: 16, CountryCode: "GT", Nationality: "Guatemalan" },
  { NationalityID: 80, CountryCode: "GH", Nationality: "Ghanaian" },
  { NationalityID: 81, CountryCode: "GR", Nationality: "Greek" },
  { NationalityID: 82, CountryCode: "GD", Nationality: "Grenadian" },
  { NationalityID: 83, CountryCode: "GN", Nationality: "Guinean" },
  { NationalityID: 84, CountryCode: "GY", Nationality: "Guyanese" },
  { NationalityID: 17, CountryCode: "HT", Nationality: "Haitian" },
  { NationalityID: 18, CountryCode: "HN", Nationality: "Honduran" },
  { NationalityID: 85, CountryCode: "HU", Nationality: "Hungarian" },
  { NationalityID: 19, CountryCode: "IN", Nationality: "Indian" },
  { NationalityID: 20, CountryCode: "IE", Nationality: "Ireland" },
  { NationalityID: 21, CountryCode: "IL", Nationality: "Israeli" },
  { NationalityID: 22, CountryCode: "IT", Nationality: "Italian" },
  { NationalityID: 86, CountryCode: "IS", Nationality: "Icelandic" },
  { NationalityID: 87, CountryCode: "ID", Nationality: "Indonesian" },
  { NationalityID: 88, CountryCode: "IR", Nationality: "Iranian" },
  { NationalityID: 89, CountryCode: "IQ", Nationality: "Iraqi" },
  { NationalityID: 23, CountryCode: "JP", Nationality: "Japanese" },
  { NationalityID: 90, CountryCode: "JM", Nationality: "Jamaican" },
  { NationalityID: 91, CountryCode: "JO", Nationality: "Jordanian" },
  { NationalityID: 92, CountryCode: "KZ", Nationality: "Kazakh" },
  { NationalityID: 93, CountryCode: "KE", Nationality: "Kenyan" },
  { NationalityID: 94, CountryCode: "KP", Nationality: "North Korean" },
  { NationalityID: 95, CountryCode: "KW", Nationality: "Kuwaiti" },
  { NationalityID: 96, CountryCode: "LV", Nationality: "Latvian" },
  { NationalityID: 97, CountryCode: "LB", Nationality: "Lebanese" },
  { NationalityID: 98, CountryCode: "LR", Nationality: "Liberian" },
  { NationalityID: 99, CountryCode: "LY", Nationality: "Libyan" },
  { NationalityID: 100, CountryCode: "LT", Nationality: "Lithuanian" },
  { NationalityID: 101, CountryCode: "LU", Nationality: "LUXEMBOURG" },
  { NationalityID: 102, CountryCode: "MG", Nationality: "Madagascan" },
  { NationalityID: 103, CountryCode: "MW", Nationality: "Malawian" },
  { NationalityID: 104, CountryCode: "MY", Nationality: "Malaysian" },
  { NationalityID: 105, CountryCode: "MV", Nationality: "Maldivian" },
  { NationalityID: 106, CountryCode: "ML", Nationality: "Malian" },
  { NationalityID: 107, CountryCode: "MT", Nationality: "Maltese" },
  { NationalityID: 108, CountryCode: "MR", Nationality: "Mauritanian" },
  { NationalityID: 109, CountryCode: "MU", Nationality: "Mauritian" },
  { NationalityID: 110, CountryCode: "MC", Nationality: "Monacan" },
  { NationalityID: 111, CountryCode: "MN", Nationality: "Mongolian" },
  { NationalityID: 112, CountryCode: "ME", Nationality: "Montenegrin" },
  { NationalityID: 113, CountryCode: "MA", Nationality: "Moroccan" },
  { NationalityID: 114, CountryCode: "MZ", Nationality: "Mozambican" },
  { NationalityID: 25, CountryCode: "MX", Nationality: "Mexican" },
  { NationalityID: 115, CountryCode: "NA", Nationality: "Namibian" },
  { NationalityID: 116, CountryCode: "NP", Nationality: "Nepalese" },
  { NationalityID: 117, CountryCode: "NZ", Nationality: "New Zealand" },
  { NationalityID: 118, CountryCode: "NI", Nationality: "Nicaraguan" },
  { NationalityID: 119, CountryCode: "NE", Nationality: "Nigerien" },
  { NationalityID: 120, CountryCode: "NG", Nationality: "Nigerian" },
  { NationalityID: 121, CountryCode: "NO", Nationality: "Norwegian" },
  { NationalityID: 122, CountryCode: "OM", Nationality: "Omani" },
  { NationalityID: 123, CountryCode: "PK", Nationality: "Pakistani" },
  { NationalityID: 124, CountryCode: "PA", Nationality: "Panamanian" },
  { NationalityID: 125, CountryCode: "PG", Nationality: "Guinean" },
  { NationalityID: 126, CountryCode: "PY", Nationality: "Paraguayan" },
  { NationalityID: 127, CountryCode: "PE", Nationality: "Peruvian" },
  { NationalityID: 27, CountryCode: "PH", Nationality: "Philippine" },
  { NationalityID: 128, CountryCode: "PL", Nationality: "Polish" },
  { NationalityID: 129, CountryCode: "PT", Nationality: "Portuguese" },
  { NationalityID: 130, CountryCode: "QA", Nationality: "Qatari" },
  { NationalityID: 131, CountryCode: "RO", Nationality: "Romanian" },
  { NationalityID: 132, CountryCode: "RW", Nationality: "Rwandan" },
  { NationalityID: 13, CountryCode: "SV", Nationality: "Salvadorean" },
  { NationalityID: 37, CountryCode: "AS", Nationality: "Samoan" },
  { NationalityID: 133, CountryCode: "SA", Nationality: "Saudi Arabian" },
  { NationalityID: 134, CountryCode: "SN", Nationality: "Senegalese" },
  { NationalityID: 135, CountryCode: "RS", Nationality: "Serbian" },
  { NationalityID: 136, CountryCode: "SL", Nationality: "Sierra Leonian" },
  { NationalityID: 137, CountryCode: "SG", Nationality: "Singaporean" },
  { NationalityID: 138, CountryCode: "SK", Nationality: "Slovak" },
  { NationalityID: 139, CountryCode: "SI", Nationality: "Slovenian" },
  { NationalityID: 140, CountryCode: "SB", Nationality: "Slomoni" },
  { NationalityID: 141, CountryCode: "SO", Nationality: "Somali" },
  { NationalityID: 142, CountryCode: "ZA", Nationality: "South African" },
  { NationalityID: 24, CountryCode: "KR", Nationality: "South Korean" },
  { NationalityID: 28, CountryCode: "ES", Nationality: "Spanish" },
  { NationalityID: 29, CountryCode: "SE", Nationality: "Swedish" },
  { NationalityID: 30, CountryCode: "CH", Nationality: "Swiss" },
  { NationalityID: 143, CountryCode: "LK", Nationality: "Sri Lankan" },
  { NationalityID: 144, CountryCode: "SD", Nationality: "Sudanese" },
  { NationalityID: 145, CountryCode: "SR", Nationality: "Surinamese" },
  { NationalityID: 146, CountryCode: "SZ", Nationality: "Swazi" },
  { NationalityID: 31, CountryCode: "TW", Nationality: "Taiwanese" },
  { NationalityID: 147, CountryCode: "TJ", Nationality: "Tajik" },
  { NationalityID: 148, CountryCode: "TH", Nationality: "Thai" },
  { NationalityID: 149, CountryCode: "TG", Nationality: "Togolese" },
  { NationalityID: 150, CountryCode: "TT", Nationality: "Trinidadian" },
  { NationalityID: 151, CountryCode: "TN", Nationality: "Tunisian" },
  { NationalityID: 152, CountryCode: "TR", Nationality: "Turkish" },
  { NationalityID: 153, CountryCode: "TM", Nationality: "Turkoman" },
  { NationalityID: 154, CountryCode: "TV", Nationality: "Tuvaluan" },
  { NationalityID: 155, CountryCode: "UG", Nationality: "Ugandan" },
  { NationalityID: 156, CountryCode: "UA", Nationality: "Ukrainian" },
  { NationalityID: 157, CountryCode: "AE", Nationality: "Emirati" },
  { NationalityID: 32, CountryCode: "VE", Nationality: "Venezuelan" },
  { NationalityID: 33, CountryCode: "VN", Nationality: "Vietnamese" },
  { NationalityID: 159, CountryCode: "UY", Nationality: "Uruguayan" },
  { NationalityID: 160, CountryCode: "UZ", Nationality: "Uzbek" },
  { NationalityID: 161, CountryCode: "VU", Nationality: "Vanuatuan" },
  { NationalityID: 162, CountryCode: "YE", Nationality: "Yemeni" },
  { NationalityID: 163, CountryCode: "ZM", Nationality: "Zambian" },
];
const nationalityList = nationalities.map((i: any) => i.Nationality);

// Initialization for ES Users
import { Input } from "tw-elements";
export default function GeneralInfo({ state, setState, edit }: any) {
  const defaultGeneralInfoState: any = {
    profileUrl: "",
    logo: "",
    coverImage: "",
    video: "",
    companyNameTh: "",
    companyNameEn: "",
    companyNameJp: "",
    companyNameCn: "",
    industry: "",
    nationality: "",
  };
  const [generalInfoState, setGeneralInfoState] = useState(
    edit ? state : defaultGeneralInfoState
  );

  const [imgState, setImgState] = useState({
    logoImg: undefined,
    coverImg: undefined,
  });
  const logoImageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setImgState({
        ...imgState,
        logoImg: e.target.files[0],
      });
    }
  };
  const coverImageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setImgState({
        ...imgState,
        coverImg: e.target.files[0],
      });
    }
  };

  const onHandleSave = () => {
    if (edit) {
      setState({
        ...state,
        generalInfo: generalInfoState,
        companyTitle: generalInfoState?.companyNameEn,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "General Info. has been updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (
      !edit &&
      generalInfoState?.profileUrl &&
      generalInfoState?.companyNameTh &&
      generalInfoState?.companyNameEn
    ) {
      setState({
        ...state,
        generalInfo: generalInfoState,
        companyTitle: generalInfoState?.companyNameEn,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "General Info. has been saved!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Please enter Profile URL, Company Name(TH) and Company Name(EN)",
        timer: 2500,
      });
    }
  };

  useEffect(() => {
    if (state != null) {
      setGeneralInfoState(state?.generalInfo);
    }
  }, [state]);

  useEffect(() => {
    const videoURLInput = new Input(document.getElementById("videoURL"));
    videoURLInput.update();
    const profileUrlInput = new Input(document.getElementById("profileURL"));
    profileUrlInput.update();
    const companyNameEnInput = new Input(
      document.getElementById("companyNameEn")
    );
    companyNameEnInput.update();
    const companyNameThInput = new Input(
      document.getElementById("companyNameTh")
    );
    companyNameThInput.update();
    const companyNameJpInput = new Input(
      document.getElementById("companyNameJp")
    );
    companyNameJpInput.update();
    const companyNameCnInput = new Input(
      document.getElementById("companyNameCn")
    );
    companyNameCnInput.update();
  }, [generalInfoState]);

  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-slate-300 bg-white p-4 shadow-sm">
      <div>
        <div className="flex justify-start border-b border-slate-300 py-2">
          <div className="text-2xl font-bold text-slate-600">General</div>
        </div>
        <div className="flex w-full justify-between">
          {/* logo */}
          <div className="w-[25%]">
            {imgState?.logoImg ? (
              <img
                src={URL.createObjectURL(imgState?.logoImg)}
                className="h-[300px] w-[300px] object-cover"
              />
            ) : edit && generalInfoState?.logo ? (
              <img
                src={generalInfoState?.logo}
                className="h-[300px] w-[300px] object-cover"
              />
            ) : (
              <img
                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                className="h-[300px] w-[300px] object-cover"
              />
            )}
            <div className="mb-3">
              <p className="mb-2 inline-block text-xs text-red-500 dark:text-neutral-200 ">
                Dimension: 500 x 500 pixel (auto resize & crop)
              </p>
              <FileInput
                imageChange={logoImageChange}
                objectState={true}
                state={generalInfoState}
                setState={setGeneralInfoState}
                path="company-logo-upload"
                stateValue={"logo"}
                multiple={false}
              />
            </div>
            {/* logo upload */}
          </div>
          {/* cover */}
          <div className="w-[75%]">
            {imgState?.coverImg ? (
              <img
                src={URL.createObjectURL(imgState?.coverImg)}
                className="h-[300px] w-[1500px] object-cover"
              />
            ) : edit && generalInfoState?.coverImage ? (
              <img
                src={generalInfoState?.coverImage}
                className="h-[300px] w-[1500px] object-cover"
              />
            ) : (
              <img
                src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png"
                className="h-[300px] w-[1500px] object-cover"
              />
            )}

            <label className="mb-2 inline-block  text-xs text-red-500 dark:text-neutral-200">
              Dimension: 1920 x 500 pixel (auto resize & crop)
            </label>
            <FileInput
              imageChange={coverImageChange}
              objectState={true}
              state={generalInfoState}
              setState={setGeneralInfoState}
              path="company-cover-upload"
              stateValue={"coverImage"}
              multiple={false}
            />
            {/* video */}

            <Ip
              id="videoURL"
              label="Video URL"
              onChange={(e: any) => {
                setGeneralInfoState({
                  ...generalInfoState,
                  video: e.target.value,
                });
              }}
              value={generalInfoState?.video || ""}
              placeholder="...."
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {/* <InputGroup /> */}

          <div className="rounded-md border-l-4 border-red-400 bg-slate-100/60 p-4">
            <Ip
              id="profileURL"
              placeholder="...."
              value={generalInfoState?.profileUrl || ""}
              label="*Profile URL:eg.factory-name-thailand"
              onChange={(e: any) => {
                setGeneralInfoState({
                  ...generalInfoState,
                  profileUrl: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex-flow flex w-full justify-between">
            <div className="w-[30%]">
              <Ip
                id="companyNameTh"
                placeholder="...."
                value={generalInfoState?.companyNameTh || ""}
                label="*Company Name(TH)"
                onChange={(e: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    companyNameTh: e.target.value,
                  });
                }}
              />
            </div>

            <div className="w-[30%]">
              <Ip
                id="companyNameEn"
                placeholder="...."
                value={generalInfoState?.companyNameEn || ""}
                label="*Company Name(EN)"
                onChange={(e: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    companyNameEn: e.target.value,
                  });
                }}
              />
            </div>
            <div className="w-[30%] flex-col ">
              <Ip
                id="companyNameJp"
                placeholder="...."
                value={generalInfoState?.companyNameJp || ""}
                label="Company Name(JP)"
                onChange={(e: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    companyNameJp: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex-flow flex w-full justify-between">
            <div className="w-[30%]">
              <Ip
                id="companyNameCn"
                placeholder="...."
                value={generalInfoState?.companyNameCn || ""}
                label="Company Name(CN)"
                onChange={(e: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    companyNameCn: e.target.value,
                  });
                }}
              />
            </div>
            <div className="w-[30%]">
              <DropDown
                edit={edit}
                selected={null}
                title={generalInfoState?.industry || "Industry"}
                checkBox={false}
                filterList={mockData}
                type="dropdown"
                onChange={(value: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    industry: value,
                  });
                }}
              />
            </div>
            <div className="w-[30%]">
              <DropDown
                edit={edit}
                selected={null}
                title={generalInfoState?.nationality || "Nationality"}
                checkBox={false}
                filterList={nationalityList}
                type="dropdown"
                onChange={(value: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    nationality: value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        {/* save button */}
        <div className="flex justify-end">
          <button
            onClick={onHandleSave}
            type="button"
            className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
