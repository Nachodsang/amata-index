import InputGroup from "@/components/webpanel/InputGroup/InputGroup";
import Input from "@/components/webpanel/Input/Input";
import DropDown from "@/components/webpanel/DropDown/DropDown";
import GeneralInfo from "@/components/webpanel/GeneralInfo/GeneralInfo";
import FilterInfo from "@/components/webpanel/FilterInfo/FilterInfo";
import DetailsInfo from "@/components/webpanel/DetailsInfo/DetailsInfo";
import GalleryInfo from "@/components/webpanel/GalleryInfo/GalleryInfo";
import SeoInfo from "@/components/webpanel/SeoInfo/SeoInfo";
import ContactInfo from "@/components/webpanel/ContactInfo/ContactInfo";
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
