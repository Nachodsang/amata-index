"use client";
import { Input } from "tw-elements"
import { useEffect, useState } from "react";
import Ip from "../Input/Input";
import DayBox from "../DayBox/DayBox";

export default function ContactInfo({ state, setState, edit }: any) {
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
        // console.log("exists");
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
        console.log("new");
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


  useEffect(() => {
    edit && state && setContactInfoState(state?.contacts)
  }, [state])


  useEffect(() => {



    const telLInput = new Input(document.getElementById("tel"))
    telLInput.update()
    const smsInput = new Input(document.getElementById("sms"))
    smsInput.update()
    const emailInput = new Input(document.getElementById("email"))
    emailInput.update()
    const websiteInput = new Input(document.getElementById("website"))
    websiteInput.update()
    const facebookInput = new Input(document.getElementById("facebook"))
    facebookInput.update()
    const lineInput = new Input(document.getElementById("line"))
    lineInput.update()
  }, [contactInfoState]);


  console.log(contactInfoState);
  console.log("state", state)
  return (
    <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <h1 className="font-bold text-2xl text-slate-700">Contact</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 items-center mt-2">
          <label className="font-semibold text-xl text-slate-700">
            Business Hour
          </label>
          {/* day / time boxes */}
          <div className="flex-col flex gap-2 items-center w-full mb-4">
            <DayBox day="Sunday" edit={true} onCheck={onCheckBusinessHour} state={contactInfoState?.businessHour.find((i: any) => i.day === "Sunday")} />
            <DayBox day="Monday" edit={true} onCheck={onCheckBusinessHour} state={contactInfoState?.businessHour.find((i: any) => i.day === "Monday")} />
            <DayBox day="Tuesday" edit={true} onCheck={onCheckBusinessHour} state={contactInfoState?.businessHour.find((i: any) => i.day === "Tuesday")} />
            <DayBox day="Wednesday" edit={true} onCheck={onCheckBusinessHour} state={contactInfoState?.businessHour.find((i: any) => i.day === "Wednesday")} />
            <DayBox day="Thursday" edit={true} onCheck={onCheckBusinessHour} state={contactInfoState?.businessHour.find((i: any) => i.day === "Thursday")} />
            <DayBox day="Friday " edit={true} onCheck={onCheckBusinessHour} state={contactInfoState?.businessHour.find((i: any) => i.day === "Friday")} />
            <DayBox day="Saturday" edit={true} onCheck={onCheckBusinessHour} state={contactInfoState?.businessHour.find((i: any) => i.day === "Saturday")} />
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-2">
          <div className="flex flex-col w-[400px] gap-2 items-start">
            <Ip
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
          <div className="flex flex-col  w-[400px]  gap-2 items-start">
            <Ip
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
          <div className="flex flex-col  w-[400px]  gap-2 items-start">
            <Ip
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
          <div className="flex flex-col  w-[400px]  gap-2 items-start">
            <Ip
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
          <div className="flex flex-col  w-[400px]  gap-2 items-start">
            <Ip
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
          <div className="flex flex-col  w-[400px]  gap-2 items-start">
            <Ip
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
        </div>
        <div>
          <div className="flex flex-col items-start">
            <label htmlFor="" className="font-semibold text-xl text-slate-700">
              Address
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
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Company Address . . ."
            ></textarea>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="" className="font-semibold text-xl text-slate-700">
              Google Map
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
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Googlemap . . . "
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => {
              setState({
                ...state,
                contacts: contactInfoState,
              });
            }}
            type="button"
            className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
