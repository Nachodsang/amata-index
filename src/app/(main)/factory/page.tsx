import Header from "../../../components/index/Header/Header";
import Banner from "../../../components/index/Banner/Banner";
import Core from "../../../components/index/Core/Core";
import Blog from "../../../components/index/Blog/Blog";
import AdSection from "@/components/index/AdSection/AdSection";
import axios from "axios";

export default async function about() {
  const fetchCompany = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/company-setting"
    );
    return response?.data?.companySetting;
  };
  return (
    <div>
      <Header category="factory" />
      <Banner category="factory" />
      <Core category="factory" companyList={await fetchCompany()} />
      <AdSection />
      <Blog category="factory" />
    </div>
  );
}
