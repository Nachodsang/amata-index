"use client";
import BounceLoader from "react-spinners/BounceLoader";

import _, { divide } from "lodash";
import { useState, useEffect, useContext } from "react";
import Search from "@/components/webpanel/Search/Search";
import Table from "@/components/webpanel/Table/Table";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";
import { HiStatusOnline } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { FaClipboardList } from "react-icons/fa";
import { FilterContext } from "@/contexts/FilterContext";
import { MdCreateNewFolder } from "react-icons/md";
import DropDown from "@/components/webpanel/DropDown/DropDown";
export default function CompanyProfile() {
  const { filtersState }: any = useContext(FilterContext);
  const [typeState, setTypeState] = useState("ALL TYPE");
  const [showDeleted, setShowDeleted] = useState(false);
  const [companyList, setCompanyList] = useState([] as any);
  const [searchState, setSearchState] = useState("");
  const [loading, setLoading] = useState(true);
  const [showOnline, setShowOnline] = useState(false);
  const [initialCompanyList, setInitialCompanyList] = useState([] as any);
  //  Categories Array
  const uniqueFilterCategories = new Set(
    filtersState.map((i: any) => i?.filterCategory)
  );
  const filterCategories = Array.from(uniqueFilterCategories);
  filterCategories.unshift("ALL TYPE");

  const fetchCompany = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/company-setting"
    );

    setInitialCompanyList(
      response.data.companySetting
        .sort((a: any, b: any) => {
          const dateA = new Date(a.updatedAt);
          const dateB = new Date(b.updatedAt);
          return dateB.getTime() - dateA.getTime();
        })
        .filter((i: any) => i?.deleted === false)
    );
  };
  const fetchDeletedCompany = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/company-setting"
    );

    setInitialCompanyList(
      response.data.companySetting
        .sort((a: any, b: any) => {
          const dateA = new Date(a.updatedAt);
          const dateB = new Date(b.updatedAt);
          return dateB.getTime() - dateA.getTime();
        })
        .filter((i: any) => i?.deleted)
    );
  };

  // const companyList = await fetchCompany();
  const onClickSearch = () => {
    const filteredList = _.filter(companyList, (i: any) => {
      return (
        i?.generalInfo?.companyNameTh
          ?.toLowerCase()
          .includes(searchState.toLowerCase()) ||
        i?.generalInfo?.companyNameEn
          ?.toLowerCase()
          .includes(searchState.toLowerCase())
      );
    });

    !showOnline
      ? setCompanyList(filteredList)
      : setCompanyList(filteredList.filter((i: any) => i.status));
  };
  // change company status
  const onChangeStatus = async (id: string, newStatus: boolean) => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/company-setting",
        {
          // filterCat: "_id",
          filterValue: id,
          // updatingField: "status",
          newValue: newStatus,
          type: "status",
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onMoveItemToRecycleBin = async (id: string, newStatus: boolean) => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/company-setting",
        {
          // filterCat: "_id",
          filterValue: id,
          // updatingField: "status",
          newValue: newStatus,
          type: "delete",
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onSoftDelete = (id: string, newStatus: boolean, isRestore: boolean) => {
    if (!isRestore) {
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
          onMoveItemToRecycleBin(id, newStatus);
          Swal.fire("Deleted!", "Item has been removed.", "success");
        }
      });
    } else {
      onMoveItemToRecycleBin(id, newStatus);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item Restored, Please refresh the page",
        showConfirmButton: true,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    showDeleted ? fetchDeletedCompany() : fetchCompany();
  }, [showDeleted]);
  useEffect(() => {
    fetchCompany();
    setTypeState("");
  }, [showOnline]);
  useEffect(() => {
    searchState.length === 0 && !showDeleted
      ? fetchCompany()
      : searchState.length === 0 && showDeleted
      ? fetchDeletedCompany()
      : "";
    searchState.length === 0 && !showDeleted && setShowOnline(false);
  }, [searchState]);
  useEffect(() => {
    fetchCompany();
    setLoading(false);
  }, []);
  useEffect(() => {
    !showOnline
      ? setCompanyList(initialCompanyList)
      : setCompanyList(initialCompanyList?.filter((i: any) => i.status));
  }, [initialCompanyList]);
  useEffect(() => {
    if (typeState !== "ALL TYPE") {
      showOnline
        ? setCompanyList(
            initialCompanyList?.filter(
              (i: any) => i?.generalInfo?.industry === typeState && i?.status
            )
          )
        : setCompanyList(
            initialCompanyList?.filter(
              (i: any) => i?.generalInfo?.industry === typeState
            )
          );
    } else {
      showOnline
        ? setCompanyList(initialCompanyList?.filter((i: any) => i?.status))
        : setCompanyList(initialCompanyList);
    }
  }, [typeState]);
  return (
    <div className="bg-white rounded-xl min-h-[100vh] ">
      {/* container */}
      <div className="max-w-[1440px]  px-4 py-6  mx-auto">
        <h1
          className={`${
            showDeleted ? "text-red-400" : "text-slate-500"
          } flex items-center  gap-2 justify-center  font-semibold text-4xl mb-4  `}
        >
          {showDeleted ? <ImBin size={40} /> : <FaClipboardList size={40} />}
          {!showDeleted ? "Company List" : "Recycle Bin"}
          {companyList.length > 0 && (
            <span
              className={`${showOnline ? "text-green-400" : "text-slate-300"}`}
            >
              ({companyList.length})
            </span>
          )}
        </h1>

        <div className="w-full ">
          <div className="w-[30%] mx-auto ">
            <Search
              searchState={searchState}
              setSearchState={setSearchState}
              onClick={onClickSearch}
            />
          </div>
          {/* Create new company profile */}
        </div>

        <div className="w-full bg-slate-100/40 py-4 rounded-xl   flex justify-between">
          <Link href="/webpanel/company/new">
            <button
              type="button"
              className="shadow-lg gap-2 items-center rounded-md flex  border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
            >
              <MdCreateNewFolder size={20} />
              Create New Profile
            </button>
          </Link>
          <div className="flex gap-[2px]">
            <DropDown
              filterList={filterCategories}
              title={typeState || "ALL TYPE"}
              checkBox={false}
              type="dropdown"
              onChange={setTypeState}
              selected={undefined}
              edit={undefined}
              category={undefined} // onChange: any
              // selected: any
              // edit: any
              // category: any;
            />
            {!showDeleted && (
              <button
                onClick={() => {
                  setShowOnline(!showOnline);
                }}
                className={`${
                  showOnline ? "bg-green-300" : "bg-slate-500"
                } flex items-center gap-1 rounded-md bg-green-300 text-white font-semibold px-4 py-2 transition-all shadow-md`}
              >
                <HiStatusOnline size={20} /> <h1>Online</h1>
              </button>
            )}

            <button
              onClick={() => {
                setShowDeleted(!showDeleted);
              }}
              className={`${
                showDeleted ? "bg-red-300" : "bg-slate-500"
              } rounded-md flex items-center gap-1 text-white font-semibold px-4 py-2 transition-all shadow-md`}
            >
              <ImBin size={20} /> <h1>Recycle Bin</h1>
            </button>
          </div>
        </div>
        {!loading && !showDeleted ? (
          <Table
            recycle={false}
            list={companyList}
            type="company"
            col2="Factory / Machine"
            col3="Type"
            col4="Last Edited"
            col5="Actions"
            onChange={onChangeStatus}
            onDelete={onSoftDelete}
          />
        ) : !loading && showDeleted ? (
          <Table
            recycle={true}
            list={companyList}
            type="company"
            col2="Factory / Machine"
            col3="Type"
            col4="Last Edited"
            col5="Actions"
            onChange={onChangeStatus}
            onDelete={onSoftDelete}
          />
        ) : (
          <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] ">
            <BounceLoader
              color="rgb(87,12,248)"
              size={100}
              speedMultiplier={3}
            />
          </div>
        )}
      </div>
    </div>
  );
}
