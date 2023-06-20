"use client";
import { createContext, useContext, useEffect, useState, useMemo } from "react";

import axios from "axios";

export const PageSettingContext = createContext("");
const URL = "http://localhost:3000/api/page-setting";

export default function PageSettingProvider({ children }: any) {
  const [pageSetting, setPageSetting] = useState({});

  //   fetching page setting
  const fetchPageSetting = async () => {
    const response = await axios.get(URL);
    const responseData = await response?.data;
    console.log(responseData);
    setPageSetting(responseData.pageSetting);
  };

  //   updating page setting
  const updatePageSetting = async (updatingField: any, newValue: any) => {
    const response = await axios.put(URL, {
      updatingField: updatingField,
      newValue: newValue,
    });

    // console.log(response);
  };
  useEffect(() => {
    fetchPageSetting();
  }, []);

  //   const pageSettingCon = { pageSetting, updatePageSetting, testContext };
  return (
    <PageSettingContext.Provider value={{ pageSetting, updatePageSetting }}>
      {children}
    </PageSettingContext.Provider>
  );
}
