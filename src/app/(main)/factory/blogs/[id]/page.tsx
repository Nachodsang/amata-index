import Footer from "@/components/blogPage/Footer";
import BlogBody from "@/components/blogPage/BlogBody";
import Header from "@/components/blogPage/Header";

export default function BlogPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Header />
      <BlogBody />
      <Footer />
    </div>
  );
}
