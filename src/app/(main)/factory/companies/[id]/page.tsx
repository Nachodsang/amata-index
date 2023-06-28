import Blogs from "@/components/companyProfile/Blogs";
import Filter from "@/components/companyProfile/Filter";
import Footer from "@/components/companyProfile/Footer";
import Gallery from "@/components/companyProfile/Gallery";
import Header from "@/components/companyProfile/Header";
import CompanyContextProvider from "@/contexts/CompanyContext";

export default async function Page({ params }: { params: { id: string } }) {
  const company = params.id;
  // fetchCompanyProfile
  const fetchCompany = async () => {
    const response = await fetch("http://localhost:3000/api/company-setting", {
      cache: "no-store",
      // next: { revalidate: 5 },
    });
    const data = await response.json();
    console.log("fetching setting");
    // console.log(data.companySetting);
    const thisCompany = data.companySetting.find(
      (i: any) => i?.generalInfo?.profileUrl === company
    );
    console.log(thisCompany);

    return thisCompany;
  };

  const companyData = await fetchCompany();

  console.log(companyData);
  return (
    <CompanyContextProvider companyData={companyData}>
      <Header companyData={companyData} />
      <Gallery />
      <Filter companyData={companyData} />
      <Blogs />
      <Footer />
    </CompanyContextProvider>
  );
}
