"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";

export const BannerContext = createContext({});
const URL = "http://localhost:3000/api/banner-setting";

export default function BannerProvider({ children, bannerPage }: any) {
  const path = usePathname();
  const [banners, setBanners] = useState([]);
  // temp active ad list?
  const [activatedBanners, setActivatedBanners] = useState([]);

  //   fetch banner
  const fetchBanner = async () => {
    try {
      const response = await axios.get(URL);
      const responseData = response.data;
      setBanners(responseData);

      // ads with active status
      const activeBanners = responseData.filter((i: any) => {
        return i?.status;
      });
      setActivatedBanners(activeBanners);
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
  //     setBanners(result);
  //   } else {
  //
  //   }
  // };
  //   Add new ad
  const addBanner = async (
    client: string,
    bannerTitle: string,
    description: string,
    image: string,
    link: string
  ) => {
    try {
      if (
        client.length > 3 &&
        bannerTitle.length > 3 &&
        description.length > 3
      ) {
        const pushData = { client, bannerTitle, description, image, link };
        const response = await axios.post(URL, pushData);
      } else {
      }
    } catch (err) {}
  };

  useEffect(() => {
    fetchBanner();
  }, [path]);
  // change ad status
  const changeStatus = async (title: string, newStatus: boolean) => {
    try {
      const response = await axios.put(URL, {
        filterCat: "bannerTitle",
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
        filterCat: "bannerTitle",
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
    } catch (err) {}
  };
  return (
    <BannerContext.Provider
      value={{
        banners,
        addBanner,
        changeStatus,
        activatedBanners,
        bannerPage,
        fetchBanner,

        changeOrder,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
}
