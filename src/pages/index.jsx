import Footer from "../components/component/footer";
import Header from "../components/component/header";
import { MainCard } from "../components/component/main-card";
import { useAuth } from "../lib/auth";

export default function MainPage() {
  useAuth();

  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <MainCard></MainCard>
      <Footer></Footer>
    </div>
  );
}
