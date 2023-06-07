import { FaGlobe, FaFacebookSquare, FaLine } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function CompanyCard({
  name,
  thumbnail,
  nationality,
  location,
  image1,
  image2,
  image3,
  image4,
  website,
  line,
  facebook,
  details,
}: {
  name: string;
  thumbnail: string;
  location: string;
  nationality: string;
  details: string;
  facebook: string | null;
  line: string | null;
  website: string | null;
  image1: string;
  image2: string | null;
  image3: string | null;
  image4: string | null;
}) {
  return (
    <div className="w-full   bg-white rounded-xl mb-4 relative py-4">
      <div className="flex  gap-2 px-6 justify-end ">
        <label className="text-sm font-semibold text-gray-500">Select</label>
        <input
          className="w-4 h-4 hover:cursor-pointer rounded ring-2 ring-[#EA590C] "
          type="checkbox"
        />
      </div>
      {/* select button */}
      <div className="flex flex-col w-full ">
        <div className="flex p-4 w-full  h-full ">
          {/* thubnail & button */}
          <div className="desktop2:w-[20%] desktop1:w-[17%] destop0:w-[15%] flex flex-col align-start gap-4">
            <div className="w-[150px] h-[150px] p-2 border-1 border shadow-md">
              <img src={thumbnail} className="w-full h-full object-cover" />
            </div>
            <div className="flex">
              <span>{nationality}</span>
            </div>
            <div className="desktop0:flex hidden justify-between w-[150px] gap-4">
              <div>
                <a href={website}>
                  <FaGlobe
                    size={28}
                    fill={`${website ? "#17A2B8" : "#E5E7EB"} `}
                  />
                </a>
              </div>
              <div>
                <a href={facebook}>
                  <FaFacebookSquare
                    size={30}
                    fill={`${facebook ? "#1B73E8" : "#E5E7EB"}`}
                  />
                </a>
              </div>
              <div>
                <a href={line}>
                  <FaLine size={30} fill={`${line ? "#33C152" : "#E5E7EB"}`} />
                </a>
              </div>
            </div>
          </div>
          {/* details */}
          <div className="desktop0:w-[55%] flex flex-col gap-4 py-1 pl-10 pr-6">
            <h1 className="font-bold text-xl">{name}</h1>
            <div className="text-blue-500 flex gap-1">
              <MdLocationPin size={20} />
              <span>{location}</span>
            </div>
            <p className="max-h-[125px] overflow-hidden">{details}</p>
          </div>
          {/* more images */}
          <div className="w-[25%]  hidden desktop0:flex flex-col justify-center items-center gap-3 ">
            <div className="w-full h-full flex flex-wrap gap-3  ">
              <div className="desktop1:h-[80px] desktop1:w-[47%] desktop2:h-[100px] desktop2:w-[100px]  w-full h-[100px] rounded-md shadow-md overflow-hidden">
                <img src={image1} className="w-full h-full object-cover " />
              </div>
              {image2 && (
                <div className="desktop1:h-[80px] desktop1:w-[47%] desktop2:h-[100px] desktop2:w-[100px]   w-full h-[100px] rounded-md overflow-hidden bg-white">
                  <img src={image2} className="w-full h-full object-cover" />
                </div>
              )}
              {image3 && (
                <div className="desktop1:h-[80px] desktop1:w-[47%] desktop2:h-[100px] desktop2:w-[100px] w-full h-[100px] rounded-md overflow-hidden bg-white">
                  <img src={image3} className="w-full h-full object-cover" />
                </div>
              )}
              {image4 && (
                <div className="desktop1:h-[80px] desktop1:w-[47%] desktop2:h-[100px] desktop2:w-[100px]  w-full h-[100px] rounded-md overflow-hidden bg-white">
                  <img src={image4} className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            <button className=" bg-orange-600 px-4 py-2 w-full rounded-2xl text-white">
              Details
            </button>
          </div>
        </div>
        <div className="px-4">
          <button className=" bg-orange-600 desktop0:hidden px-4 py-2 w-full rounded-2xl text-white">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
