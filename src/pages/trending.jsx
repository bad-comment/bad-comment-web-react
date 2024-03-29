import Footer from "../components/component/footer";
import Header from "../components/component/header";
import { Trending } from "../components/component/trending";

export default function TrendingPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <Trending></Trending>
      <Footer></Footer>
    </div>
  );
}
