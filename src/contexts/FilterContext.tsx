"use client";
import axios from "axios";
import { useContext, createContext } from "react";

export const FilterContext = createContext("");
const URL = "http://localhost:3000/api/filter-setting";
const FilterContextProvider = ({ children, filters }: any) => {
  const onCheckFilter = async (filterSet: any) => {
    const response = await axios.put(URL, filterSet);
    console.log(response);
  };

  //   Add Filter
  const addFilter = async (type: any, title: any) => {
    try {
      const response = await axios.post(URL, {
        filterType: type,
        filterTitle: title,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FilterContext.Provider value={{ filters, onCheckFilter, addFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
export default FilterContextProvider;
