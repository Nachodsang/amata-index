import Blogs from "@/components/companyProfile/Blogs";
import Content from "@/components/companyProfile/Content";
import Filter from "@/components/companyProfile/Filter";
import Footer from "@/components/companyProfile/Footer";
import Gallery from "@/components/companyProfile/Gallery";
import Header from "@/components/companyProfile/Header";
import CompanyContextProvider from "@/contexts/CompanyContext";
import Map from "@/components/companyProfile/Map";
import axios from "axios";
import ShareModal from "@/components/companyProfile/ShareModal";
import TopBarItemPage from "@/components/companyProfile/TopBarItemPage";
import { redirect } from "next/navigation";

const fetchCompany = async (company: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/company-item?id=${company}`,

      {
        cache: "no-store",
        // next: { revalidate: 5 },
      }
    );
    const data = await response.json();

    return data?.companySetting;
  } catch (err) {
    console.log(err);
  }
};

// const fetchAllCompany = async () => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_APP_URL}/api/company-setting`,

//     {
//       cache: "no-store",
//       // next: { revalidate: 5 },
//     }
//   );
//   const data = await response.json();

//   return data?.companySetting;
// };
export default async function Page({ params }: { params: { id: string } }) {
  const envi = process.env.NEXT_PUBLIC_APP_KEY_WORD;
  const company = params.id;
  // fetchCompanyProfile
  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/blogs`
      );
      return response?.data?.blogSetting?.filter(
        (i: any) => i?.status && !i?.deleted
      );
    } catch (err) {
      console.log(err);
    }
  };

  const blogs = await fetchBlog();
  const companyData = await fetchCompany(company);
  if (!companyData || !companyData?.status || companyData?.deleted) {
    redirect("/page");
  }
  // const allCompanyData = await fetchAllCompany();
  const filteredBlogs = blogs
    ?.filter((i: any) => i?.companyID === companyData?._id)
    .map((i: any) => ({
      ...i,
      generalInfo: companyData?.generalInfo,
      companyTitle: companyData?.companyTitle,
    }));
  const showBlogMenu = filteredBlogs.length > 0;

  return (
    <CompanyContextProvider companyData={companyData}>
      {companyData && companyData?.status && !companyData?.deleted ? (
        <div className="mt-10">
          <meta name="keywords" content={companyData?.seo?.th?.join()} />
          <meta
            name="description"
            content={companyData?.details?.fullDescription}
          />
          <TopBarItemPage
            profileType={companyData?.profileType}
            showBlog={showBlogMenu}
          />

          <Header companyData={companyData} />
          {companyData?.profileType === "full" && (
            <>
              <Content companyData={companyData} />
              <Gallery companyData={companyData} />
              <Filter companyData={companyData} />
              <Blogs
                blogList={filteredBlogs}
                company={companyData}
                // allCompanyData={allCompanyData}
              />

              <Map companyData={companyData} />
            </>
          )}
          <Footer companyData={companyData} blogList={blogs} />
        </div>
      ) : (
        <div className="flex  flex-col h-[100vh]">
          <div className="m-auto">
            <h1 className=" font-bold text-4xl text-slate-400">
              Page Not Found
            </h1>
            <span className="text-center text-slate-400">
              Redirecting to our home page
            </span>
          </div>
        </div>
      )}
    </CompanyContextProvider>
  );
}
