"use client";
import { createContext, useContext, useEffect, useState, useMemo } from "react";

import axios from "axios";

export const PageSettingContext = createContext("");
const URL = "http://localhost:3000/api/page-setting";

export default function PageSettingProvider({ children, pageSetting }: any) {
  //   updating page setting
  const updatePageSetting = async (updatingField: any, newValue: any) => {
    const response = await axios.put(URL, {
      updatingField: updatingField,
      newValue: newValue,
    });

    // console.log(response);
  };

  const testtest = 1234;

  //   const pageSettingCon = { pageSetting, updatePageSetting, testContext };
  return (
    <PageSettingContext.Provider value={{ updatePageSetting, pageSetting }}>
      {children}
    </PageSettingContext.Provider>
  );
}
