"use client";
import { Input } from "tw-elements";
import { useEffect, useState } from "react";
import Ip from "../Input/Input";
import DayBox from "../DayBox/DayBox";
import Swal from "sweetalert2";
import Map from "@/components/companyProfile/Map";
import DropDown from "../DropDown/DropDown";
import {
  provinceTH,
  amataCities,
} from "../../../../public/assets/nationalities";

export default function ContactInfoNew({ state, setState, edit }: any) {
  const envi = process.env.NEXT_PUBLIC_APP_KEY_WORD;
  const defaultContactInfo = {
    businessHour: [] as { day?: any; time?: any; status?: any }[],
    tel: "",
    sms: "",
    website: "",
    facebook: "",
    line: "",
    addressTh: "",
    addressEn: "",
    addressJp: "",
    addressCn: "",
    googleMap: "",
    postcode: "",
    tambol: "",
    district: "",
    province: "",
    email: "",
  };

  const [contactInfoState, setContactInfoState] = useState(defaultContactInfo);

  const onCheckBusinessHour = (box: any) => {
    const { day, time, status } = box;

    if (day !== "") {
      const existingIndex = contactInfoState.businessHour.findIndex(
        (item) => item.day === day
      );

      if (existingIndex !== -1) {
        //
        setContactInfoState((prevState) => {
          const updatedBusinessHour = prevState.businessHour.map(
            (item, index) => {
              if (index === existingIndex) {
                return {
                  ...item,
                  time: time || item.time,
                  status: status !== undefined ? status : item.status,
                };
              }
              return item;
            }
          );

          return {
            ...prevState,
            businessHour: updatedBusinessHour,
          };
        });
      } else {
        const newBusinessHour = {
          day,
          time,
          status,
        };
        setContactInfoState((prevState) => ({
          ...prevState,
          businessHour: [...prevState.businessHour, newBusinessHour],
        }));
      }
    }
  };
  const onHandleSave = () => {
    if (edit) {
      setState({
        ...state,
        contacts: contactInfoState,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Contact info have been updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setState({
        ...state,
        contacts: contactInfoState,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Contact info have been saved!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  useEffect(() => {
    edit && state && setContactInfoState(state?.contacts);
  }, [state]);

  //   difference to edit version
  //   useEffect(() => {
  //     if (edit) {
  //       const telLInput = new Input(document.getElementById("tel"));
  //       telLInput.update();
  //       const smsInput = new Input(document.getElementById("sms"));
  //       smsInput.update();
  //       const emailInput = new Input(document.getElementById("email"));
  //       emailInput.update();
  //       const websiteInput = new Input(document.getElementById("website"));
  //       websiteInput.update();
  //       const facebookInput = new Input(document.getElementById("facebook"));
  //       facebookInput.update();
  //       const lineInput = new Input(document.getElementById("line"));
  //       lineInput.update();
  //       const tambonInput = new Input(document.getElementById("tambon"));
  //       tambonInput.update();
  //       const districtInput = new Input(document.getElementById("district"));
  //       districtInput.update();
  //       const provinceInput = new Input(document.getElementById("province"));
  //       provinceInput.update();
  //       const postcodeInput = new Input(document.getElementById("postcode"));
  //       postcodeInput.update();
  //     }
  //   }, [contactInfoState]);

  return (
    <div className="flex w-full flex-col rounded-md border border-slate-300  bg-white p-4 shadow-sm">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <h1 className="text-2xl font-bold text-slate-700">Contact</h1>
      </div>
      <div className="flex flex-col">
        {envi === "factory" && (
          <div className="mt-2 flex flex-col items-center gap-2">
            <label className="text-xl font-semibold text-slate-700">
              Business Hour
            </label>
            {/* day / time boxes */}
            <div className="mb-4 flex w-full flex-col items-center gap-2">
              <DayBox
                day="Sunday"
                edit={true}
                onCheck={onCheckBusinessHour}
                state={contactInfoState?.businessHour.find(
                  (i: any) => i.day === "Sunday"
                )}
              />
              <DayBox
                day="Monday"
                edit={true}
                onCheck={onCheckBusinessHour}
                state={contactInfoState?.businessHour.find(
                  (i: any) => i.day === "Monday"
                )}
              />
              <DayBox
                day="Tuesday"
                edit={true}
                onCheck={onCheckBusinessHour}
                state={contactInfoState?.businessHour.find(
                  (i: any) => i.day === "Tuesday"
                )}
              />
              <DayBox
                day="Wednesday"
                edit={true}
                onCheck={onCheckBusinessHour}
                state={contactInfoState?.businessHour.find(
                  (i: any) => i.day === "Wednesday"
                )}
              />
              <DayBox
                day="Thursday"
                edit={true}
                onCheck={onCheckBusinessHour}
                state={contactInfoState?.businessHour.find(
                  (i: any) => i.day === "Thursday"
                )}
              />
              <DayBox
                day="Friday"
                edit={true}
                onCheck={onCheckBusinessHour}
                state={contactInfoState?.businessHour.find(
                  (i: any) => i.day === "Friday"
                )}
              />
              <DayBox
                day="Saturday"
                edit={true}
                onCheck={onCheckBusinessHour}
                state={contactInfoState?.businessHour.find(
                  (i: any) => i.day === "Saturday"
                )}
              />
            </div>
          </div>
        )}
        <div className="mt-2 flex flex-wrap gap-6">
          <div className="flex w-[400px] flex-col items-start gap-2">
            <Ip
              required={false}
              placeholder=""
              id="tel"
              value={contactInfoState?.tel}
              label="Tel"
              onChange={(e: any) =>
                setContactInfoState({
                  ...contactInfoState,
                  tel: e.target.value,
                })
              }
            />
          </div>
          <div className="flex w-[400px]  flex-col  items-start gap-2">
            <Ip
              required={false}
              placeholder=""
              id="sms"
              value={contactInfoState?.sms}
              label="SMS"
              onChange={(e: any) =>
                setContactInfoState({
                  ...contactInfoState,
                  sms: e.target.value,
                })
              }
            />
          </div>
          <div className="flex w-[400px]  flex-col  items-start gap-2">
            <Ip
              required={false}
              placeholder=""
              id="email"
              value={contactInfoState?.email}
              label="E-mail"
              onChange={(e: any) =>
                setContactInfoState({
                  ...contactInfoState,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="flex w-[400px]  flex-col  items-start gap-2">
            <Ip
              required={false}
              placeholder=""
              id="website"
              value={contactInfoState?.website}
              label="Website"
              onChange={(e: any) =>
                setContactInfoState({
                  ...contactInfoState,
                  website: e.target.value,
                })
              }
            />
          </div>
          <div className="flex w-[400px]  flex-col  items-start gap-2">
            <Ip
              required={false}
              placeholder=""
              id="facebook"
              value={contactInfoState?.facebook}
              label="Facebook"
              onChange={(e: any) =>
                setContactInfoState({
                  ...contactInfoState,
                  facebook: e.target.value,
                })
              }
            />
          </div>
          <div className="flex w-[400px]  flex-col  items-start gap-2">
            <Ip
              required={false}
              placeholder=""
              id="line"
              value={contactInfoState?.line}
              label="Line"
              onChange={(e: any) =>
                setContactInfoState({
                  ...contactInfoState,
                  line: e.target.value,
                })
              }
            />
          </div>
          <div className="flex w-[400px]  flex-col  items-start gap-2">
            <Ip
              required={false}
              placeholder=""
              id="tambon"
              value={contactInfoState?.tambol}
              label="Tambon"
              onChange={(e: any) =>
                setContactInfoState({
                  ...contactInfoState,
                  tambol: e.target.value,
                })
              }
            />
          </div>
          <div className="flex w-[400px]  flex-col  items-start gap-2">
            <Ip
              required={false}
              placeholder=""
              id="district"
              value={contactInfoState?.district}
              label="District/Ampur"
              onChange={(e: any) =>
                setContactInfoState({
                  ...contactInfoState,
                  district: e.target.value,
                })
              }
            />
          </div>
          {/* <div className="flex w-[400px]  flex-col  items-start gap-2">
            <Ip
              placeholder=""
              id="province"
              value={contactInfoState?.province}
              label="Province"
              onChange={(e: any) =>
                setContactInfoState({
                  ...contactInfoState,
                  province: e.target.value,
                })
              }
            />
          </div> */}
          {/* province selection */}
          <div className="w-[400px] ">
            <DropDown
              category=""
              edit={edit}
              selected={null}
              title={contactInfoState?.province || "Province"}
              checkBox={false}
              filterList={amataCities}
              type="dropdown"
              onChange={(value: any) => {
                setContactInfoState({
                  ...contactInfoState,
                  province: value,
                });
              }}
            />
          </div>
          <div className="flex w-[400px]  flex-col  items-start gap-2">
            <Ip
              required={false}
              placeholder=""
              id="postcode"
              value={contactInfoState?.postcode}
              label="Postcode"
              onChange={(e: any) =>
                setContactInfoState({
                  ...contactInfoState,
                  postcode: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start">
            <label htmlFor="" className="text-xl font-semibold text-slate-700">
              Address(TH)
            </label>
            <textarea
              value={contactInfoState?.addressTh}
              onChange={(e) =>
                setContactInfoState({
                  ...contactInfoState,
                  addressTh: e.target.value,
                })
              }
              id="message"
              rows={2}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Company Address . . ."
            ></textarea>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="" className="text-xl font-semibold text-slate-700">
              Address(EN)
            </label>
            <textarea
              value={contactInfoState?.addressEn}
              onChange={(e) =>
                setContactInfoState({
                  ...contactInfoState,
                  addressEn: e.target.value,
                })
              }
              id="message"
              rows={2}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Company Address . . ."
            ></textarea>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="" className="text-xl font-semibold text-slate-700">
              Address(JP)
            </label>
            <textarea
              value={contactInfoState?.addressJp}
              onChange={(e) =>
                setContactInfoState({
                  ...contactInfoState,
                  addressJp: e.target.value,
                })
              }
              id="message"
              rows={2}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Company Address . . ."
            ></textarea>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="" className="text-xl font-semibold text-slate-700">
              Address(CN)
            </label>
            <textarea
              value={contactInfoState?.addressCn}
              onChange={(e) =>
                setContactInfoState({
                  ...contactInfoState,
                  addressCn: e.target.value,
                })
              }
              id="message"
              rows={2}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Company Address . . ."
            ></textarea>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="" className="text-xl font-semibold text-slate-700">
              Google Map (set width=&quot;100%&quot;)
            </label>
            <textarea
              value={contactInfoState?.googleMap}
              onChange={(e) =>
                setContactInfoState({
                  ...contactInfoState,
                  googleMap: e.target.value,
                })
              }
              id="message"
              rows={4}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Googlemap . . . "
            ></textarea>
          </div>
          <Map companyData={state} />
        </div>
        <div className="mt-4 flex justify-end">
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
