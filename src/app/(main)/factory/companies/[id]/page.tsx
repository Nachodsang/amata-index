import Footer from "@/components/companyProfile/Footer";
import Header from "@/components/companyProfile/Header";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
