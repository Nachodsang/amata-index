"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";

export const CompanyContext = createContext({});

export default function CompanyContextProvider({
  children,
  companyData,
  blogData,
}: any) {
  return (
    <CompanyContext.Provider value={{ companyData, blogData }}>
      {children}
    </CompanyContext.Provider>
  );
}
