"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const AdContext = createContext("");
const URL = "http://localhost:3000/api/ad-setting";

export default function AdProvider({ children, adsPage }: any) {
  const path = usePathname();
  const [ads, setAds] = useState([]);
  // temp active ad list?
  const [activatedAds, setActivatedAds] = useState([]);
  //   fetch Ad
  const fetchAd = async () => {
    try {
      const response = await axios.get(URL);
      const responseData = response.data;
      setAds(responseData);
      // console.log(responseData);
      // ads with active status
      const activeAds = responseData.filter((i: any) => {
        return i?.status;
      });
      setActivatedAds(activeAds);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(activatedAds);
  //   Add new ad
  const addAd = async (
    client: string,
    adTitle: string,
    description: string,
    image: string,
    link: string
  ) => {
    try {
      if (client.length > 3 && adTitle.length > 3 && description.length > 3) {
        const pushData = { client, adTitle, description, image, link };
        const response = await axios.post(URL, pushData);
        console.log(response);
      } else {
        console.log("please input valid value");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAd();
  }, [path]);
  // change ad status
  const changeStatus = async (title: string, newStatus: boolean) => {
    try {
      const response = await axios.put(URL, {
        filterCat: "adTitle",
        filterValue: title,
        updatingField: "status",
        newValue: newStatus,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdContext.Provider
      value={{ ads, addAd, changeStatus, activatedAds, adsPage }}
    >
      {children}
    </AdContext.Provider>
  );
}
