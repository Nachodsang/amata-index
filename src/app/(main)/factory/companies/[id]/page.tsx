import Blogs from "@/components/companyProfile/Blogs";
import Content from "@/components/companyProfile/Content";
import Filter from "@/components/companyProfile/Filter";
import Footer from "@/components/companyProfile/Footer";
import Gallery from "@/components/companyProfile/Gallery";
import Header from "@/components/companyProfile/Header";
import CompanyContextProvider from "@/contexts/CompanyContext";
import Map from "@/components/companyProfile/Map";

const fetchCompany = async (company: string) => {
  const response = await fetch("http://localhost:3000/api/company-setting", {
    cache: "no-store",
    // next: { revalidate: 5 },
  });
  const data = await response.json();

  //
  const thisCompany = data.companySetting.find(
    (i: any) => i?.generalInfo?.profileUrl === company
  );

  return thisCompany;
};

export default async function Page({ params }: { params: { id: string } }) {
  const company = params.id;
  // fetchCompanyProfile

  const companyData = await fetchCompany(company);

  return (
    <CompanyContextProvider companyData={companyData}>
      <meta name="keywords" content={companyData?.seo?.th.join()} />
      <meta
        name="description"
        content={companyData?.details?.fullDescription}
      />

      <Header companyData={companyData} />
      {/* <div className="py-10">
        <div className="mx-auto flex h-[100vh] w-full max-w-[1440px] bg-slate-100">
          <div className="m-auto text-6xl font-bold">Company Content Here</div>
        </div>
      </div> */}
      <Content companyData={companyData} />
      <Gallery />
      <Filter companyData={companyData} />
      <Blogs />
      <Map companyData={companyData} />
      <Footer companyData={companyData} />
    </CompanyContextProvider>
  );
}
