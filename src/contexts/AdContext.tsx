"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const AdContext = createContext("");
const URL = "http://localhost:3000/api/ad-setting";

export default function AdProvider({ children }: any) {
  const path = usePathname();
  const [ads, setAds] = useState([]);
  //   fetch Ad
  const fetchAd = async () => {
    try {
      const response = await axios.get(URL);
      const responseData = response.data;
      setAds(responseData);
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };
  //   Add new ad
  const addAd = async (
    client: string,
    adTitle: string,
    description: string,
    image: string
  ) => {
    try {
      if (client.length > 3 && adTitle.length > 3 && description.length > 3) {
        const pushData = { client, adTitle, description, image };
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

  return (
    <AdContext.Provider value={{ ads, addAd }}>{children}</AdContext.Provider>
  );
}
