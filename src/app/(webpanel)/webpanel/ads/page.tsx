"use client";
import axios from "axios";
import { useState, useEffect, useContext, use } from "react";
import Link from "next/link";
import Search from "@/components/webpanel/Search/Search";
import Table from "@/components/webpanel/Table/Table";
import { AdContext } from "@/contexts/AdContext";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import _ from "lodash";
import { BounceLoader } from "react-spinners";
import { ImBin } from "react-icons/im";
import Swal from "sweetalert2";
import { HiStatusOnline } from "react-icons/hi";

export default function AdList() {
  const {
    ads: a,
    changeStatus,
    // searchAd,
    changeOrder,
    fetchAd,
  }: any = useContext(AdContext);
  const { pageSetting, updatePageSetting, pageSettingWebpanel }: any =
    useContext(PageSettingContext);
  const [numberOfAd, setNumberOfAd] = useState(pageSettingWebpanel?.adAmount);
  const [showDeleted, setShowDeleted] = useState(false);
  const [adListState, setAdListState] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const [searchState, setSearchState] = useState("");
  const [showOnline, setShowOnline] = useState(false);

  const ads = a.sort((a: any, b: any) => {
    const dateA = new Date(a?.updatedAt);
    const dateB = new Date(b?.updatedAt);
    return dateB?.getTime() - dateA?.getTime();
  });
  const fetchDeletedAd = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/ad-setting", {
        method: "GET",
        cache: "no-store",
      });

      const responseData = await response.json();

      const data = responseData?.filter((i: any) => i?.deleted);
      setAdListState(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onMoveItemToRecycleBin = async (id: string, newStatus: boolean) => {
    try {
      const response = await fetch("http://localhost:3000/api/ad-setting", {
        method: "PUT",
        body: JSON.stringify({
          // filterCat: "_id",
          filterValue: id,
          // updatingField: "status",
          newValue: newStatus,
          type: "delete",
        }),
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
    const filteredList = _.filter(ads, (i: any) => {
      return (
        i?.adTitle?.toLowerCase().includes(searchState?.toLowerCase()) ||
        i?.client?.toLowerCase().includes(searchState?.toLowerCase())
      );
    });
    if (!showOnline) {
      !showDeleted
        ? setAdListState(filteredList?.filter((i: any) => !i?.deleted))
        : setAdListState(filteredList?.filter((i: any) => i?.deleted));
    } else {
      setAdListState(filteredList?.filter((i: any) => i.status && !i?.deleted));
    }
  };
  useEffect(() => {
    if (showOnline) {
      setAdListState(ads?.filter((i: any) => i?.status && !i?.deleted));
    } else {
      !showDeleted
        ? setAdListState(ads?.filter((i: any) => !i?.deleted))
        : setAdListState(ads?.filter((i: any) => i?.deleted));
    }
  }, [showOnline, ads]);
  useEffect(() => {
    setLoading(false);
  }, [ads]);

  useEffect(() => {
    searchState?.length === 0 && !showDeleted
      ? fetchAd()
      : searchState?.length === 0 && showDeleted
      ? fetchDeletedAd()
      : "";
    searchState?.length === 0 && !showDeleted && setShowOnline(false);
  }, [searchState]);
  useEffect(() => {
    setShowOnline(false);
    !showDeleted ? fetchAd() : fetchDeletedAd();
  }, [showDeleted]);
  return (
    <div className="min-h-[100vh] rounded-xl bg-white ">
      {/* container */}
      <div className="mx-auto  max-w-[1440px] px-4  py-6">
        <h1 className="mb-4 text-center text-xl font-semibold  ">
          Ad. List{" "}
          {adListState?.length > 0 && (
            <span
              className={`${showOnline ? "text-green-400" : "text-slate-700"}`}
            >
              ({adListState?.length})
            </span>
          )}
        </h1>

        <div className="flex w-full flex-col items-center justify-center gap-2 mb-4  ">
          <div className="w-[30%] ">
            <Search
              searchState={searchState}
              setSearchState={setSearchState}
              onClick={onClickSearch}
            />
          </div>
          <div className="h-8 flex gap-2">
            <label className="text-xl font-bold text-slate-600">
              Ad Displayed: <u className="">{pageSettingWebpanel?.adAmount}</u>
            </label>
            <input
              type="number"
              className="w-10 rounded-xl border border-slate-400 text-center "
              value={numberOfAd}
              onChange={(e) => setNumberOfAd(e.target.value)}
            />
            <button
              className="rounded-md px-4 bg-green-300 text-white font-bold"
              onClick={() => updatePageSetting("adAmount", numberOfAd)}
            >
              SAVE
            </button>
          </div>
          {/* Create new company profile */}
        </div>
        <div className="flex items-center justify-between ">
          <Link href="/webpanel/new-ad">
            <button
              type="button"
              className="shadow-md rounded-md hover:border-primary-600 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 active:border-primary-700 active:text-primary-700 inline-block  border-2 border-primary px-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none focus:ring-0 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
            >
              Create New Ad.
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
                <HiStatusOnline size={20} /> Online
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
        {!loading ? (
          !showDeleted ? (
            <Table
              onChangeOrder={changeOrder}
              onChange={changeStatus}
              list={adListState}
              col2="Ads."
              col3="client"
              col4="description"
              col5="created on"
              onDelete={onSoftDelete}
              recycle={false}
              type="ad"
            />
          ) : (
            <Table
              onChangeOrder={changeOrder}
              onChange={changeStatus}
              list={adListState}
              col2="Ads."
              col3="client"
              col4="description"
              col5="created on"
              onDelete={onSoftDelete}
              recycle={true}
              type="ad"
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
