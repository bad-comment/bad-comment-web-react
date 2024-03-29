import Footer from "../components/component/footer";
import Header from "../components/component/header";
import { Me } from "../components/component/me";

export default function MePage() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <Me></Me>
      <Footer></Footer>
    </div>
  );
}
