"use client";
import { useState } from "react";
import Input from "../Input/Input";
import DayBox from "../DayBox/DayBox";

export default function ContactInfo({ state, setState }: any) {
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
  // const onCheckBusinessHour = (box: any) => {
  //   const newBusinessHour = {
  //     day: box?.day,
  //     time: box?.time,
  //     status: box?.status,
  //   };

  //   if (
  //     contactInfoState?.businessHour.find(
  //       (i: any) => i?.day === newBusinessHour.day
  //     )
  //   ) {
  //     setContactInfoState((prevState) => ({
  //       ...prevState,
  //       businessHour: prevState.businessHour.map((i) =>
  //         i?.day === newBusinessHour.day
  //           ? {
  //               ...i,
  //               time: newBusinessHour?.time,
  //               status: newBusinessHour.status,
  //             }
  //           : {
  //               day: box?.day,
  //               time: box?.time,
  //               status: box?.status,
  //             }
  //       ),
  //     }));
  //     console.log("exists");
  //   } else {
  //     console.log("new");
  //     setContactInfoState((prevState) => ({
  //       ...prevState,
  //       businessHour: [...prevState.businessHour, newBusinessHour],
  //     }));
  //   }

  //   // setContactInfoState((prevState) => ({
  //   //   ...prevState,
  //   //   businessHour: prevState.businessHour.map((item) => {
  //   //     if (item.day === newBusinessHour.day) {
  //   //       console.log("change only time and stat");
  //   //       console.log(item.day);
  //   //       return {
  //   //         ...item,
  //   //         time: newBusinessHour.time,
  //   //         status: newBusinessHour.status,
  //   //       };
  //   //     } else {
  //   //       console.log("change whole");
  //   //       console.log(item.day);
  //   //       return newBusinessHour;
  //   //     }
  //   //   }
  //   //   ),
  //   // })
  //   // );

  //   // setContactInfoState((prevState) => ({
  //   //   ...prevState,
  //   //   businessHour: [...prevState.businessHour, newBusinessHour],
  //   // }));
  // };
  const onCheckBusinessHour = (box: any) => {
    const { day, time, status } = box;

    if (day !== "") {
      const existingIndex = contactInfoState.businessHour.findIndex(
        (item) => item.day === day
      );

      if (existingIndex !== -1) {
        console.log("exists");
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

  console.log(contactInfoState);
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
            <DayBox day="Sunday" onCheck={onCheckBusinessHour} />
            <DayBox day="Monday" onCheck={onCheckBusinessHour} />
            <DayBox day="Tuesday" onCheck={onCheckBusinessHour} />
            <DayBox day="Wednesday" onCheck={onCheckBusinessHour} />
            <DayBox day="Thursday" onCheck={onCheckBusinessHour} />
            <DayBox day="Friday" onCheck={onCheckBusinessHour} />
            <DayBox day="Saturday" onCheck={onCheckBusinessHour} />
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-2">
          <div className="flex flex-col w-[400px] gap-2 items-start">
            <Input
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
            <Input
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
            <Input
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
            <Input
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
            <Input
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
            <Input
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
