import { CreateSubject } from "../components/component/create-subject";
import Footer from "../components/component/footer";
import Header from "../components/component/header";

export default function CreateSubjectPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <CreateSubject></CreateSubject>
      <Footer></Footer>
    </div>
  );
}
