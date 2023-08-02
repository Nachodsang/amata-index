"use client";
import Link from "next/link";
import Search from "@/components/webpanel/Search/Search";
import Table from "@/components/webpanel/Table/Table";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { BannerContext } from "@/contexts/bannerContext";
import _ from "lodash";
import { BounceLoader } from "react-spinners";
import Swal from "sweetalert2";
import { ImBin } from "react-icons/im";
import { HiStatusOnline } from "react-icons/hi";

export default function BannerList() {
  const [searchState, setSearchState] = useState("");
  const {
    banners: b,
    changeStatus,
    changeOrder,
    fetchBanner,
  }: any = useContext(BannerContext);
  const [bannerState, setBannerState] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const [showOnline, setShowOnline] = useState(false);
  const [showDeleted, setShowDeleted] = useState(false);

  const banners = b.sort((a: any, b: any) => {
    const dateA = new Date(a.updatedAt);
    const dateB = new Date(b.updatedAt);
    return dateB.getTime() - dateA.getTime();
  });
  const fetchDeletedBanner = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/banner-setting"
    );

    const data = response?.data?.filter((i: any) => i?.deleted);
    setBannerState(data);
  };
  const onMoveItemToRecycleBin = async (id: string, newStatus: boolean) => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/banner-setting",
        {
          // filterCat: "_id",
          filterValue: id,
          // updatingField: "status",
          newValue: newStatus,
          type: "delete",
        }
      );
    } catch (err) {
      err;
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
    const filteredList = _.filter(banners, (i: any) => {
      return (
        i?.bannerTitle?.toLowerCase().includes(searchState.toLowerCase()) ||
        i?.client?.toLowerCase().includes(searchState.toLowerCase())
      );
    });

    // !showOnline
    //   ? setBannerState(filteredList)
    //   : setBannerState(filteredList.filter((i: any) => i.status));

    if (!showOnline) {
      !showDeleted
        ? setBannerState(filteredList?.filter((i: any) => !i?.deleted))
        : setBannerState(filteredList?.filter((i: any) => i?.deleted));
    } else {
      setBannerState(filteredList.filter((i: any) => i.status && !i?.deleted));
    }
  };
  useEffect(() => {
    fetchBanner();
  }, [showOnline]);

  useEffect(() => {
    // show offline and set state to initial list
    // or filter banner to show online only
    // then set loading to false
    !showOnline
      ? setBannerState(banners?.filter((i: any) => !i?.deleted))
      : setBannerState(banners.filter((i: any) => i.status && !i?.deleted));
    setLoading(false);
  }, [banners]);
  useEffect(() => {
    setShowOnline(false);
    !showDeleted ? fetchBanner() : fetchDeletedBanner();
  }, [showDeleted]);
  useEffect(() => {
    searchState.length === 0 && !showDeleted
      ? fetchBanner()
      : searchState.length === 0 && showDeleted
      ? fetchDeletedBanner()
      : "";
    searchState.length === 0 && !showDeleted && setShowOnline(false);
  }, [searchState]);
  return (
    <div className="min-h-[100vh] rounded-xl bg-white ">
      {/* container */}
      <div className="mx-auto  max-w-[1440px] px-4  py-6">
        <h1 className="mb-4 text-center text-xl font-semibold  ">
          Banner List{" "}
          {bannerState.length > 0 && (
            <span
              className={`${showOnline ? "text-green-400" : "text-slate-700"}`}
            >
              ({bannerState.length})
            </span>
          )}
        </h1>

        <div className="w-full ">
          <div className="mx-auto w-[30%] ">
            <Search
              searchState={searchState}
              setSearchState={setSearchState}
              onClick={onClickSearch}
            />
          </div>
          {/* Create new company profile */}
        </div>
        <Link href="/webpanel/new-banner">
          <button
            type="button"
            className="hover:border-primary-600 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 active:border-primary-700 active:text-primary-700 inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none focus:ring-0 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            Create New Banner
          </button>
        </Link>
        <div className="w-full  flex justify-end gap-[2px]">
          {!showDeleted && (
            <button
              onClick={() => {
                setShowOnline(!showOnline);
              }}
              className={`${
                showOnline ? "bg-green-300" : "bg-slate-500"
              } flex items-center gap-1 rounded-md bg-green-300 text-white font-semibold px-4 py-2 transition-all`}
            >
              <HiStatusOnline size={20} />
              Online
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
        {!loading ? (
          !showDeleted ? (
            <Table
              list={bannerState}
              col2="banner"
              col3="client"
              col4="description"
              col5="created on"
              onChange={changeStatus}
              onChangeOrder={changeOrder}
              onDelete={onSoftDelete}
              recycle={false}
              type="banner"
            />
          ) : (
            <Table
              list={bannerState}
              col2="banner"
              col3="client"
              col4="description"
              col5="created on"
              onChange={changeStatus}
              onChangeOrder={changeOrder}
              onDelete={onSoftDelete}
              recycle={true}
              type="banner"
            />
          )
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
