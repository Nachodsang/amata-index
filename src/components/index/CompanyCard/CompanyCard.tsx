import { FaGlobe, FaFacebookSquare, FaLine } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function CompanyCard({ props, category }: any) {
  const {
    name,
    thumbnail,
    flag,
    nationality,
    website,
    facebook,
    line,
    location,
    image1,
    image2,
    image3,
    image4,
    details,
  } = props;
  return (
    <div className="w-full   bg-white rounded-xl mb-4 relative py-4">
      <div className="flex  gap-2 px-6 justify-end ">
        <label className="text-sm font-semibold text-gray-500">Select</label>
        <input
          className={`w-4 h-4 checkbox checkbox-accent hover:cursor-pointer rounded ring-2 border-none ${category}-ring `}
          type="checkbox"
        />
      </div>
      {/* select button */}
      <div className="flex flex-col w-full ">
        <div className="flex p-4 w-full  h-full ">
          {/* thubnail & button */}
          <div className="desktop2:w-[20%] desktop1:w-[17%] destop0:w-[15%] flex flex-col align-start gap-4">
            <div className="w-[150px] h-[150px] p-1 border-1 border shadow-md">
              <img src={thumbnail} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-1">
              {flag && (
                <img src={flag} alt="flag" className="w-[25px] h-[25px]" />
              )}

              <span className="font-semibold text-gray-400">{nationality}</span>
            </div>
            <div className="desktop0:flex hidden justify-between w-[150px] gap-4">
              <div>
                {website ? (
                  <a href={website}>
                    {" "}
                    <FaGlobe size={28} fill="#17A2B8" />
                  </a>
                ) : (
                  <a>
                    {" "}
                    <FaGlobe size={28} fill="#E5E7EB" />
                  </a>
                )}
              </div>
              <div>
                {facebook ? (
                  <a href={facebook}>
                    <FaFacebookSquare size={30} fill="#1B73E8" />
                  </a>
                ) : (
                  <a>
                    <FaFacebookSquare size={30} fill="#E5E7EB" />
                  </a>
                )}
              </div>
              <div>
                {line ? (
                  <a>
                    {" "}
                    <FaLine size={30} fill="#33C152" />
                  </a>
                ) : (
                  <a>
                    <FaLine size={30} fill="#E5E7EB" />
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* details */}
          <div className="desktop0:w-[55%] flex flex-col gap-4 py-1 pl-10 pr-6">
            <h1 className="font-bold text-xl text-gray-700">{name}</h1>
            <div className="text-blue-500 flex gap-1">
              <MdLocationPin size={20} />
              <span>{location}</span>
            </div>
            <p className="max-h-[125px] overflow-hidden font-semibold text-gray-500">
              {details}
            </p>
          </div>
          {/* more images */}
          <div className="w-[25%]  hidden desktop0:flex flex-col justify-center items-center gap-3 ">
            <div className="w-full h-full flex flex-wrap desktop2:gap-3 desktop0:gap-2  ">
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

            <button
              className={`${category}-background px-4 py-2 w-full rounded-2xl text-white`}
            >
              Details
            </button>
          </div>
        </div>
        <div className="px-4">
          <button
            className={`${category}-background desktop0:hidden px-4 py-2 w-full rounded-2xl text-white`}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
