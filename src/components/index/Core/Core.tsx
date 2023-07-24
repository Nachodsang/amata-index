"use client";
import { useContext, useEffect, useState } from "react";
import Ad from "../Ad/Ad";
import CompanyCard from "../CompanyCard/CompanyCard";
// mockdata
import mockData from "../../../../public/mockData/mockData";
import { mock } from "node:test";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { AdContext } from "@/contexts/AdContext";
import { CompanyContext } from "@/contexts/CompanyContext";
export default function core({
  category,
  filters,
}: // companyList,
{
  filters: any;
  category: string;
  // companyList: any;
}) {
  const { pageSetting }: any = useContext(PageSettingContext);
  const { adsPage }: any = useContext(AdContext);
  // const { mockCompanies, mockMachines } = mockData;
  const { companyData: companyList }: any = useContext(CompanyContext);

  const onCompanies = companyList.filter((i: any) => i?.status);

  const [listState, setListState] = useState(onCompanies);
  // console.log(onCompanies);
  useEffect(() => {
    console.log("in Filter");
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
    // filters.length > 0
    //   ? setListState(
    //       onCompanies?.filter((i: any) => {
    //         return filters.includes(i?.filters?.map((j: any) => j?.filterID));
    //       })
    //     )
    //   : setListState(onCompanies);

    // !filters?.category
    //   ? setListState(onCompanies)
    //   : filters?.category && !filters?.filters.length
    //   ? setListState(
    //       onCompanies.filter(
    //         (i: any) => i?.generalInfo?.industry === filters?.category
    //       )
    //     )
    //   : setListState(
    //       onCompanies.filter((i: any) =>
    //         i?.filters.some((j: any) => filters?.filters?.includes(j?.filterID))
    //       )
    //     );
  }, [filters]);
  console.log(filters);
  console.log(listState);
  return (
    <div
      className={`  px-6`}
      style={{ height: `${pageSetting?.adAmount * 299}px` }}
    >
      <div className="mx-auto max-w-[1270px]   h-full overflow-hidden  rounded-2xl shadow-md  relative z-10 flex ">
        <div className=" desktop0:w-[75%] w-full h-full ">
          <div
            style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
            className="w-full h-20 bg-[#192f48] p-6"
          >
            {/* list title and amount */}
            <h1 className="text-2xl font-bold text-white">Company List</h1>
          </div>

          <div
            style={{ backgroundColor: `${pageSetting?.coreColor}` }}
            className="w-full h-full bg-[#044ea2] px-4 pb-16 pt-10   flex-col overflow-scroll"
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
                  />
                );
              })}
            {/* {category === "machine" &&
              mockMachines.map((i, index) => {
                return <CompanyCard props={i} key={i.id} category={category} />;
              })} */}
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
