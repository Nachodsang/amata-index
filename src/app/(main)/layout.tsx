import "./globals.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import PageSettingProvider from "@/contexts/PageSettingContext";
import AdProvider from "@/contexts/AdContext";
import axios from "axios";
import BannerProvider from "@/contexts/bannerContext";
import CompanyContextProvider from "@/contexts/CompanyContext";
import FilterContextProvider from "@/contexts/FilterContext";
import TopBar from "@/components/index/TopBar/TopBar";
import Footer from "@/components/index/Footer/Footer";
import { Kanit } from "next/font/google";
import LogInContextProvider from "@/contexts/LogInContext";
import LogInModal from "@/components/index/LogInModal/LogInModal";

const roboto = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const TwElementCom = dynamic(
  () => import("@/components/twElementCom/twElementCom"),
  {
    ssr: false,
  }
);

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amata Index",
  description: "Web Directory for Amata Cities",
};

const fetchBanner = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/banner-setting`,
    {
      cache: "no-store",
    }
  );

  const data = await response.json();
  const displayedBanners = data
    .filter((i: any) => i?.status)
    .sort((a: any, b: any) => a.edition - b.edition);
  return displayedBanners;
};

const fetchAdTry = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/ad-setting`,
    {
      cache: "no-store",
    }
  );

  const data = await response.json();
  const displayedAds = data
    .filter((i: any) => i?.status)
    .sort((a: any, b: any) => a.edition - b.edition);
  return displayedAds;
};

const fetchFilter = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/filter-setting`
  );
  return response?.data?.filters;
};

const fetchCompany = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/company-setting`
  );
  return response?.data?.companySetting;
};

const fetchBlog = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/blogs`
  );
  return response?.data?.blogSetting?.filter(
    (i: any) => i?.status && !i?.deleted
  );
};

// fetchPageSetting
export const fetchPageSetting = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/page-setting`
    // , {
    //   cache: "no-store",
    //   // next: { revalidate: 5 },

    // }
  );
  const data = await response.json();

  return data;
};

export default async function RootLayout({
  children,
  result,
}: {
  children: React.ReactNode;
  result: any;
}) {
  const pageSettingData = await fetchPageSetting();
  const adData = await fetchAdTry();
  const bannerData = await fetchBanner();
  const companiesData = await fetchCompany();
  const filtersFromMain = await fetchFilter();
  const blogsData = await fetchBlog();
  const mergeById = (a1: any, a2: any) =>
    a1.map((itm: any) => ({
      ...a2.find((item: any) => item._id === itm.companyID),
      ...itm,
    }));
  const mergedBlogArr = mergeById(blogsData, companiesData);
  // const companyPageData = await fetchCompany();

  return (
    <html lang="en">
      <head>
        {/* <title>Amata Index</title> */}
        <link rel="icon" href="/public/images/apple-icon-180x180.png" />
      </head>
      <body className={roboto.className}>
        <LogInContextProvider>
          <FilterContextProvider filtersFromMain={filtersFromMain}>
            <CompanyContextProvider
              companyData={companiesData}
              blogData={mergedBlogArr}
            >
              <BannerProvider bannerPage={bannerData}>
                <AdProvider adsPage={adData}>
                  <PageSettingProvider
                    pageSetting={pageSettingData?.pageSetting}
                  >
                    <LogInModal />
                    {children}

                    <Footer />
                    <TwElementCom />
                  </PageSettingProvider>
                </AdProvider>
              </BannerProvider>
            </CompanyContextProvider>
          </FilterContextProvider>
        </LogInContextProvider>
      </body>
    </html>
  );
}
