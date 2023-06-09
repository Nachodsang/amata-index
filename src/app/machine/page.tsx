import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Core from "../components/Core/Core";
import Blog from "../components/Blog/Blog";

export default function about() {
  return (
    <div>
      <Header category="machine" />
      <Banner category="machine" />
      <Core category="machine" />
      <Blog category="machine" />
    </div>
  );
}
