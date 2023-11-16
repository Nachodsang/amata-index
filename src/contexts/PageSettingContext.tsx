"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  use,
} from "react";

import axios from "axios";

export const PageSettingContext = createContext({});
const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/page-setting`;

export default function PageSettingProvider({ children, pageSetting }: any) {
  const [pageSettingWebpanel, setPageSettingWebpanel] = useState([]);
  //   updating page setting
  const updatePageSetting = async (updatingField: any, newValue: any) => {
    const response = await axios.put(URL, {
      updatingField: updatingField,
      newValue: newValue,
    });

    //
  };

  const pageSettingFetch = async () => {
    const response = await axios.get(URL);
    const data = response.data;
    setPageSettingWebpanel(data?.pageSetting);
  };
  useEffect(() => {
    pageSettingFetch();
  }, []);

  //   const pageSettingCon = { pageSetting, updatePageSetting, testContext };
  return (
    <PageSettingContext.Provider
      value={{ updatePageSetting, pageSetting, pageSettingWebpanel }}
    >
      {children}
    </PageSettingContext.Provider>
  );
}
