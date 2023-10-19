"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";

export const AdContext = createContext({});
const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/ad-setting`;

export default function AdProvider({ children, adsPage }: any) {
  const path = usePathname();
  const [ads, setAds] = useState([]);
  // temp active ad list?
  const [activatedAds, setActivatedAds] = useState([]);

  //   fetch Ad
  const fetchAd = async () => {
    try {
      const response = await fetch(URL, { cache: "no-store" });
      const responseData = await response.json();
      setAds(responseData);
      //
      // ads with active status
      const activeAds = responseData.filter((i: any) => {
        return i?.status;
      });
      setActivatedAds(activeAds);
    } catch (err) {}
  };

  //   Add new ad
  const addAd = async (
    client: string,
    adTitle: string,
    description: string,
    image: string,
    link: string
  ) => {
    try {
      // console.log(client, adTitle, description, image, link);
      // if (
      //   client.length >= 3 &&
      //   adTitle.length >= 3
      //   && description.length > 3
      // ) {
      const pushData = { client, adTitle, description, image, link };
      const response = await axios.post(URL, pushData);
      // console.log(response);
      // } else {

      // }
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
        type: "status",
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
        type: "order",
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${title} order has been saved to ${newOrder}`,
        showConfirmButton: false,
        timer: 2500,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
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
        fetchAd,
      }}
    >
      {children}
    </AdContext.Provider>
  );
}
