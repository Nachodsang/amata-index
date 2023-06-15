import InputGroup from "@/components/InputGroup/InputGroup";
import Input from "@/components/Input/Input";
import DropDown from "@/components/DropDown/DropDown";
import GeneralInfo from "@/components/GeneralInfo/GeneralInfo";
import FilterInfo from "@/components/FilterInfo/FilterInfo";
import DetailsInfo from "@/components/DetailsInfo/DetailsInfo";
import GalleryInfo from "@/components/GalleryInfo/GalleryInfo";
import ContactInfo from "@/components/GalleryInfo/GalleryInfo";
import SeoInfo from "@/components/SeoInfo/SeoInfo";


export default function buildCompany() {
  return (
    <div className="">
      <div className="mx-auto max-w-[1440px] min-h-[100vh] rounded-md gap-4 flex flex-col px-4">
        <div>New Company</div>
        {/* general */}

        <GeneralInfo />
        {/* filter */}
        <FilterInfo />
        {/* details */}
        <DetailsInfo />
        {/* gallery */}
        <GalleryInfo />
        {/* contact */}
        <ContactInfo />
        {/* SEO */}
        <SeoInfo />
      </div>
    </div>
  );
}
