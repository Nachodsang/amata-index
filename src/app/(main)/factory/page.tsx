import Header from "../../../components/Header/Header";
import Banner from "../../../components/Banner/Banner";
import Core from "../../../components/Core/Core";
import Blog from "../../../components/Blog/Blog";
import AdSection from "@/components/AdSection/AdSection";

export default function about() {
  return (
    <div>
      <Header category="factory" />
      <Banner category="factory" />
      <Core category="factory" />
      <AdSection />
      <Blog category="factory" />
    </div>
  );
}
