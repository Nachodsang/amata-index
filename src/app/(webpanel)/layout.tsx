import "./globals.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
// import MenuColumn from "@/components/MenuColumn/MenuColumn";
import SideNav from "@/components/webpanel/SideNav/SideNav";
import PageSettingProvider from "@/contexts/PageSettingContext";
import AdProvider from "@/contexts/AdContext";
import FilterContextProvider from "@/contexts/FilterContext";
import axios from "axios";
import BannerProvider from "@/contexts/bannerContext";

const TwElementCom = dynamic(
  () => import("@/components/twElementCom/twElementCom"),
  {
    ssr: false,
  }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amata Index",
  description: "Web Directory for Amata Cities",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const filterData = await fetchFilter();
  // const adsData = await fetchAd();
  return (
    <html lang="en" className="light">
      <head>
        {/* <title>Amata Index</title> */}
        <link rel="icon" href="" />
      </head>
      <body className={`${inter.className} `}>
        <BannerProvider>
          <AdProvider>
            <FilterContextProvider>
              <PageSettingProvider>
                {/* {children} */}
                {/* <div className="bg-gray-200 h-[100vh] w-[300px]"> */}
                {/* <MenuColumn /> */}
                <SideNav _children={children} />
                {/* {children} */}
                {/* </div> */}
              </PageSettingProvider>
            </FilterContextProvider>
          </AdProvider>
        </BannerProvider>
        <TwElementCom />
      </body>
    </html>
  );
}
