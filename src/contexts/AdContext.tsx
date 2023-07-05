"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";

export const AdContext = createContext({});
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
      //
      // ads with active status
      const activeAds = responseData.filter((i: any) => {
        return i?.status;
      });
      setActivatedAds(activeAds);
    } catch (err) {}
  };
  //  search Ad
  // const searchAd = (search: any) => {
  //   if (search.length > 1) {
  //     const result = ads.filter((i) => {
  //       const { adTitle, client, description }: any = i;
  //       return (
  //         adTitle.includes(search) ||
  //         client.includes(search) ||
  //         description.includes(search)
  //       );
  //     });
  //     setAds(result);
  //   } else {
  //
  //   }
  // };
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
      } else {
      }
    } catch (err) {}
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
    } catch (err) {}
  };
  // change order
  const changeOrder = async (title: string, newOrder: number) => {
    try {
      const response = await axios.put(URL, {
        filterCat: "adTitle",
        filterValue: title,
        updatingField: "edition",
        newValue: newOrder,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${title} order has been saved to ${newOrder}`,
        showConfirmButton: false,
        timer: 2500,
      });
      return response;
    } catch (err) {}
  };
  return (
    <AdContext.Provider
      value={{
        ads,
        addAd,
        changeStatus,
        activatedAds,
        adsPage,
        // searchAd,
        changeOrder,
      }}
    >
      {children}
    </AdContext.Provider>
  );
}
