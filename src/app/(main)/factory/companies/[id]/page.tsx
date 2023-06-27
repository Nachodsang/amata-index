import Blogs from "@/components/companyProfile/Blogs";
import Filter from "@/components/companyProfile/Filter";
import Footer from "@/components/companyProfile/Footer";
import Gallery from "@/components/companyProfile/Gallery";
import Header from "@/components/companyProfile/Header";

export default function Page({ params }: { params: { id: string } }) {
  const company = params.id;
  return (
    <div>
      <Header />
      <Gallery />
      <Filter />
      <Blogs />
      <Footer />
    </div>
  );
}
