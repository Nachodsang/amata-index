import { FaGlobe, FaFacebookSquare, FaLine } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function CompanyCard() {
  return (
    <div className="w-full  h-[280px] bg-white rounded-xl mb-4">
      {/* select button */}
      <div></div>
      <div className="flex p-4 w-full  h-full ">
        {/* thubnail & button */}
        <div className="w-[20%] flex flex-col align-start gap-4">
          <div className="w-[150px] h-[150px] p-2 border-1 border shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KkX1z0fQ179Ioojn4EwpqJbgr9F-xR0gaA&usqp=CAU"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex">
            <MdLocationPin size={20} />
            <span>Thai Company</span>
          </div>
          <div className="flex justify-between w-[150px] gap-4">
            <div>
              <FaGlobe size={28} />
            </div>
            <div>
              <FaFacebookSquare size={30} />
            </div>
            <div>
              <FaLine size={30} />
            </div>
          </div>
        </div>
        {/* details */}
        <div className="w-[55%] flex flex-col gap-4 py-1">
          <h1 className="font-bold text-xl">Company Name</h1>
          <div className="text-blue-500">Location</div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum
            commodi fugiat id eius consequatur optio atque quae veniam,
            expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt
            porro error fugiat.
          </p>
        </div>
        {/* more images */}
        <div className="w-[25%] flex flex-col justify-center items-center gap-3">
          <div className="w-full h-full flex flex-wrap gap-3  ">
            <div className="h-[100px] w-[100px]  rounded-md shadow-md overflow-hidden">
              <img
                src="/images/roboticFac.jpg"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="h-[100px] w-[100px] rounded-md overflow-hidden bg-white">
              <img
                src="https://www.kuka.com/-/media/kuka-corporate/images/press/virtual-guided-tours/heller-bearbeitungszentrum-kuka.jpg?rev=730ed644e9e84f50acd62b3e62bef28f&w=1900&hash=4B022AFFE0D4072E2DC4BF11189DE7B6"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[100px] w-[100px] rounded-md overflow-hidden bg-white">
              <img
                src="https://d1uzk9o9cg136f.cloudfront.net/f/16783577/rc/2022/03/22/a6b09c94b6d18a44af9e63002a8d208c31a7705c_xlarge.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[100px] w-[100px] rounded-md overflow-hidden bg-white">
              <img
                src="https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <button className=" bg-orange-600 px-4 py-2 w-full rounded-2xl text-white">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
