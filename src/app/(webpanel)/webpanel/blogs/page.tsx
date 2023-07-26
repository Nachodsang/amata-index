"use client";
import { find, filter, initial } from "lodash";
import Search from "@/components/webpanel/Search/Search";
import Table from "@/components/webpanel/Table/Table";
import axios from "axios";

import { useContext, useEffect, useState } from "react";
import _ from "lodash";
import Link from "next/link";
import BounceLoader from "react-spinners/BounceLoader";
import Swal from "sweetalert2";
import { ImBin } from "react-icons/im";
import { FaClipboardList } from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";
import { MdCreateNewFolder } from "react-icons/md";
import DropDown from "@/components/webpanel/DropDown/DropDown";
import { FilterContext } from "@/contexts/FilterContext";
export default function BlogList() {
  const { filtersState }: any = useContext(FilterContext);
  const [typeState, setTypeState] = useState("ALL TYPE");
  const [showDeleted, setShowDeleted] = useState(false);
  const [blogListState, setBlogListState] = useState([] as any);
  const [searchState, setSearchState] = useState("");
  const [loading, setLoading] = useState(true);
  const [showOnline, setShowOnline] = useState(false);
  const [initialBlogState, setInitialBlogState] = useState([] as any);
  //  Categories Array
  const uniqueFilterCategories = new Set(
    filtersState.map((i: any) => i?.filterCategory)
  );
  const filterCategories = Array.from(uniqueFilterCategories);
  filterCategories.unshift("ALL TYPE");
  const fetchBlog = async () => {
    const response = await fetch("http://localhost:3000/api/blogs", {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    setInitialBlogState(
      data?.blogSetting
        ?.sort((a: any, b: any) => {
          const dateA = new Date(a.updatedAt);
          const dateB = new Date(b.updatedAt);
          return dateB.getTime() - dateA.getTime();
        })
        .filter((i: any) => i?.deleted === false)
    );
    // console.log(data?.blogSetting);
  };
  const fetchDeletedBlog = async () => {
    const response = await axios.get("http://localhost:3000/api/blogs");

    setInitialBlogState(
      response.data.blogSetting
        .sort((a: any, b: any) => {
          const dateA = new Date(a.updatedAt);
          const dateB = new Date(b.updatedAt);
          return dateB.getTime() - dateA.getTime();
        })
        .filter((i: any) => i?.deleted)
    );
  };

  // change blog status
  const onChangeStatus = async (id: string, newStatus: boolean) => {
    try {
      const response = await axios.put("http://localhost:3000/api/blogs", {
        // filterCat: "_id",
        filterValue: id,
        // updatingField: "status",
        newValue: newStatus,
        type: "status",
      });
    } catch (err) {
      console.log(err);
    }
  };
  // const onSoftDelete = async (id: string, newStatus: boolean) => {
  //   try {
  //     const response = await axios.put("http://localhost:3000/api/blogs", {
  //       // filterCat: "_id",
  //       filterValue: id,
  //       // updatingField: "status",
  //       newValue: newStatus,
  //       type: "delete",
  //     });
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "Item Removed Please refresh the page",
  //       showConfirmButton: true,
  //       timer: 1500,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const onMoveItemToRecycleBin = async (id: string, newStatus: boolean) => {
    try {
      const response = await axios.put("http://localhost:3000/api/blogs", {
        // filterCat: "_id",
        filterValue: id,
        // updatingField: "status",
        newValue: newStatus,
        type: "delete",
      });
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
  const onClickSearch = () => {
    const filteredList = _.filter(blogListState, (i: any) => {
      return (
        i?.blogTitle?.toLowerCase().includes(searchState.toLowerCase()) ||
        i?.company?.toLowerCase().includes(searchState.toLowerCase())
      );
    });

    !showOnline
      ? setBlogListState(filteredList)
      : setBlogListState(filteredList.filter((i: any) => i.status));
  };
  useEffect(() => {
    showDeleted ? fetchDeletedBlog() : fetchBlog();
  }, [showDeleted]);
  useEffect(() => {
    fetchBlog();
  }, [showOnline]);
  useEffect(() => {
    fetchBlog();
    setLoading(false);
  }, []);

  useEffect(() => {
    !showOnline
      ? setBlogListState(initialBlogState)
      : setBlogListState(initialBlogState.filter((i: any) => i.status));
  }, [initialBlogState]);
  useEffect(() => {
    searchState.length === 0 && !showDeleted
      ? fetchBlog()
      : searchState.length === 0 && showDeleted
      ? fetchDeletedBlog()
      : "";
    searchState.length === 0 && !showDeleted && setShowOnline(false);
  }, [searchState]);
  useEffect(() => {
    if (typeState !== "ALL TYPE") {
      showOnline
        ? setBlogListState(
            initialBlogState?.filter(
              (i: any) => i?.generalInfo?.industry === typeState && i?.status
            )
          )
        : setBlogListState(
            initialBlogState?.filter(
              (i: any) => i?.generalInfo?.industry === typeState
            )
          );
    } else {
      showOnline
        ? setBlogListState(initialBlogState?.filter((i: any) => i?.status))
        : setBlogListState(initialBlogState);
    }
  }, [typeState]);
  return (
    <div className="bg-white rounded-xl min-h-[100vh] ">
      {/* container */}
      <div className="max-w-[1440px]  px-4 py-6  mx-auto">
        <h1
          className={`${
            showDeleted ? "text-red-400" : "text-slate-500"
          } flex items-center  gap-2 justify-center font-semibold text-4xl mb-4  `}
        >
          {showDeleted ? <ImBin size={40} /> : <FaClipboardList size={40} />}
          {!showDeleted ? "Blog List" : "Recycle Bin"}
          {blogListState.length > 0 && (
            <span
              className={`${showOnline ? "text-green-400" : "text-slate-300"}`}
            >
              ({blogListState.length})
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

        <div className="w-full bg-slate-100/40 py-4 rounded-xl flex justify-between">
          <Link href="/webpanel/blogs/new">
            <button
              type="button"
              className=" items-center rounded-md flex gap-1 shadow-lg  border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
            >
              <MdCreateNewFolder size={20} />
              Create New Blog
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
            list={blogListState}
            col2={"Blog Title"}
            col3={"Industry"}
            col5={"Actions"}
            col4={"Updated On"}
            type="blog"
            onChange={onChangeStatus}
            onDelete={onSoftDelete}
            recycle={false}
          />
        ) : !loading && showDeleted ? (
          <Table
            list={blogListState}
            col2={"Blog Title"}
            col3={"Industry"}
            col5={"Actions"}
            col4={"Updated On"}
            type="blog"
            onChange={onChangeStatus}
            onDelete={onSoftDelete}
            recycle={true}
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
