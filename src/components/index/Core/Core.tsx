"use client";
import { useContext, useEffect, useState } from "react";
import Ad from "../Ad/Ad";
import CompanyCard from "../CompanyCard/CompanyCard";
// mockdata

import { PageSettingContext } from "@/contexts/PageSettingContext";
import { AdContext } from "@/contexts/AdContext";
import { FilterContext } from "@/contexts/FilterContext";
import { CompanyContext } from "@/contexts/CompanyContext";
export default function Core({
  category,
  filters,
}: {
  filters: any;
  category: string;
}) {
  const { pageSetting }: any = useContext(PageSettingContext);
  const { adsPage }: any = useContext(AdContext);
  const { locationState, nationalityState }: any = useContext(FilterContext);

  const { companyData: companyList }: any = useContext(CompanyContext);

  const onCompanies = companyList.filter(
    (i: any) =>
      i?.status && !i?.deleted && i?.generalInfo?.amataLocation == locationState
  );

  const [listState, setListState] = useState(onCompanies);

  useEffect(() => {
    // ("in Filter");
    if (!filters?.category) {
      !filters?.search
        ? setListState(onCompanies)
        : setListState(
            onCompanies.filter(
              (i: any) =>
                i?.generalInfo?.companyNameTh?.includes(filters?.search) ||
                i?.generalInfo?.companyNameEn
                  ?.toLowerCase()
                  ?.includes(filters?.search)
            )
          );
    } else {
      if (nationalityState) {
        if (!filters?.search) {
          !filters?.filters.length
            ? setListState(
                onCompanies.filter(
                  (i: any) =>
                    i?.generalInfo?.industry === filters?.category &&
                    i?.generalInfo?.nationality == nationalityState
                )
              )
            : setListState(
                onCompanies.filter((i: any) =>
                  i?.filters.some(
                    (j: any) =>
                      filters?.filters?.includes(j?.filterID) &&
                      i?.generalInfo?.nationality == nationalityState
                  )
                )
              );
        } else {
          !filters?.filters.length
            ? setListState(
                onCompanies.filter(
                  (i: any) =>
                    i?.generalInfo?.industry === filters?.category &&
                    (i?.generalInfo?.companyNameTh?.includes(filters?.search) ||
                      i?.generalInfo?.companyNameEn
                        ?.toLowerCase()
                        ?.includes(filters?.search)) &&
                    i?.generalInfo?.nationality == nationalityState
                )
              )
            : setListState(
                onCompanies.filter(
                  (i: any) =>
                    i?.filters.some((j: any) =>
                      filters?.filters?.includes(j?.filterID)
                    ) &&
                    (i?.generalInfo?.companyNameTh?.includes(filters?.search) ||
                      i?.generalInfo?.companyNameEn
                        ?.toLowerCase()
                        ?.includes(filters?.search)) &&
                    i?.generalInfo?.nationality == nationalityState
                )
              );
        }
      } else {
        if (!filters?.search) {
          !filters?.filters.length
            ? setListState(
                onCompanies.filter(
                  (i: any) => i?.generalInfo?.industry === filters?.category
                )
              )
            : setListState(
                onCompanies.filter((i: any) =>
                  i?.filters.some((j: any) =>
                    filters?.filters?.includes(j?.filterID)
                  )
                )
              );
        } else {
          !filters?.filters.length
            ? setListState(
                onCompanies.filter(
                  (i: any) =>
                    i?.generalInfo?.industry === filters?.category &&
                    (i?.generalInfo?.companyNameTh?.includes(filters?.search) ||
                      i?.generalInfo?.companyNameEn
                        ?.toLowerCase()
                        ?.includes(filters?.search))
                )
              )
            : setListState(
                onCompanies.filter(
                  (i: any) =>
                    i?.filters.some((j: any) =>
                      filters?.filters?.includes(j?.filterID)
                    ) &&
                    (i?.generalInfo?.companyNameTh?.includes(filters?.search) ||
                      i?.generalInfo?.companyNameEn
                        ?.toLowerCase()
                        ?.includes(filters?.search))
                )
              );
        }
      }
    }
  }, [filters, locationState]);
  // filters;
  // listState;
  return (
    <div
      className={`  px-6`}
      style={{ height: `${pageSetting?.adAmount * 299}px` }}
      id="list"
    >
      <div className="mx-auto max-w-[1270px]   h-full overflow-hidden  rounded-2xl shadow-md  relative z-10 flex ">
        <div className=" desktop0:w-[75%] w-full h-full ">
          <div
            style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
            className="w-full h-20  p-6"
          >
            {/* list title and amount */}
            <h1 className="capitalize text-2xl font-bold text-white">
              {process.env.NEXT_PUBLIC_APP_KEY_WORD} List
            </h1>
          </div>

          <div
            style={{ backgroundColor: `${pageSetting?.coreColor}` }}
            className="w-full h-full  px-4 pb-16 pt-10   flex-col overflow-scroll"
          >
            {category === "factory" &&
              listState.map((i: any, index: any) => {
                const { generalInfo, details, _id, contacts, gallery } = i;
                return (
                  <CompanyCard
                    companyTitle={generalInfo?.companyNameEn}
                    logo={generalInfo?.logo}
                    key={_id}
                    category={category}
                    nationality={generalInfo?.nationality}
                    details={details?.shortDescription}
                    location={contacts?.province}
                    website={contacts?.website}
                    line={contacts?.line}
                    facebook={contacts?.facebook}
                    gallery={gallery}
                    profileUrl={generalInfo?.profileUrl}
                    industry={generalInfo?.industry}
                  />
                );
              })}
          </div>
        </div>
        {/* ad */}
        <div
          style={{ backgroundColor: `${pageSetting?.coreColor}` }}
          className=" desktop0:w-[25%]  bg-[#044ea2] p-4 hidden desktop0:flex flex-col gap-4 min-w-[330px]  "
        >
          {adsPage.map((i: any, index: number) => (
            <Ad key={index} image={i?.image} link={i?.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
