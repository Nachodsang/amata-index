import Ad from "@/app/components/Ad/Ad";
import CompanyCard from "../CompanyCard/CompanyCard";
// mockdata
import mockCompanies from "../../../../public/mockData/mockCompany";
import { mock } from "node:test";

export default function core() {
  let companies: number[] = [];
  for (let i = 0; i < 100; i++) {
    companies.push(i);
  }
  return (
    <div className=" h-[1200px]  px-6">
      <div className="mx-auto max-w-[1270px]  h-full overflow-hidden rounded-2xl shadow-md   flex ">
        <div className=" desktop0:w-[75%] h-full ">
          <div className="w-full h-20 bg-[#192f48] p-6">
            {/* list title and amount */}
            <h1 className="text-2xl font-bold text-white">Company List</h1>
          </div>

          <div className="w-full h-full bg-[#044ea2] px-4 pb-16 pt-10   flex-col overflow-scroll">
            {mockCompanies.map((i, index) => {
              // deconstruct from mockCompanies
              const {
                id,
                name,
                details,
                thumbnail,
                image1,
                image2,
                image3,
                image4,
                location,
                nationality,
                facebook,
                line,
                website,
              } = i;
              return (
                <CompanyCard
                  key={id}
                  name={name}
                  location={location}
                  nationality={nationality}
                  website={website}
                  line={line}
                  facebook={facebook}
                  image1={image1}
                  image2={image2}
                  image3={image3}
                  image4={image4}
                  thumbnail={thumbnail}
                  details={details}
                />
              );
            })}
          </div>
        </div>
        {/* ad */}
        <div className=" desktop0:w-[25%] h-full bg-[#044ea2] p-4 hidden desktop0:block  ">
          {companies.map((i, index) => (
            <Ad key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
