"use client";
import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const FilterContext = createContext({});
const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/filter-setting`;
const FilterContextProvider = ({ children, filtersFromMain }: any) => {
  const [filtersState, setFiltersState] = useState([]);
  const [locationState, setLocationState] = useState("Chonburi");
  const [nationalityState, setNationalityState] = useState("");
  const onCheckFilter = async (filterSet: any) => {
    const response = await axios.put(URL, filterSet);
  };

  const fetchFilter = async () => {
    const response = await axios.get(URL);
    const data = await response.data.filters;

    setFiltersState(data);

    return data;
  };

  //   Add Filter
  const addFilter = async (type: any, title: any, category: any) => {
    try {
      const response = await axios.post(URL, {
        filterType: type,
        filterTitle: title,
        filterCategory: category,
      });

      fetchFilter();
    } catch (err) {}
  };

  useEffect(() => {
    fetchFilter();
  }, []);

  const onDeleteFilter = async (_id: any) => {
    try {
      const response = await axios.put(URL, {
        _id: _id,
        type: "delete",
      });
    } catch {}
  };

  const onDeleteWithConfirmation = (_id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#64748B",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDeleteFilter(_id);
        Swal.fire(
          "Deleted!",
          "Filter removed! Refresh for the latest result!",
          "success"
        );
      }
    });
  };

  const onEditfilter = async (_id: any, updatingField: any, newValue: any) => {
    const response = await axios.put(URL, {
      _id: _id,
      type: "edit",
      updatingField: updatingField,
      newValue: newValue,
    });
  };

  const onEditWithConfirmation = (
    _id: any,
    updatingField: any,
    newValue: any
  ) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#37D399",
      cancelButtonColor: "#64748B",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        onEditfilter(_id, updatingField, newValue);
        Swal.fire(
          "Done!",
          "Filter Edited! Refresh for the latest result!",
          "success"
        );
      }
    });
  };

  return (
    <FilterContext.Provider
      value={{
        filtersState,
        onCheckFilter,
        addFilter,
        filtersFromMain,
        locationState,
        setLocationState,
        nationalityState,
        setNationalityState,
        onDeleteFilter,
        onDeleteWithConfirmation,
        onEditfilter,
        onEditWithConfirmation,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export default FilterContextProvider;
