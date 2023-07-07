import Header from "../../../components/index/Header/Header";
import Banner from "../../../components/index/Banner/Banner";
import Core from "../../../components/index/Core/Core";
import Blog from "../../../components/index/Blog/Blog";
import AdSection from "@/components/index/AdSection/AdSection";

export default function about() {
  return (
    <div>
      <Header category="machine" />
      <Banner category="machine" />
      <Core category="machine" companyList="" />
      <AdSection />
      <Blog category="machine" />
    </div>
  );
}
