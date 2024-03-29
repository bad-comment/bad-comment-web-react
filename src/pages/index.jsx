import Footer from "../components/component/footer";
import Header from "../components/component/header";
import { MainCard } from "../components/component/main-card";

export default function MainPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <MainCard></MainCard>
      <Footer></Footer>
    </div>
  );
}
