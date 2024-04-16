import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const HomeTemplate = (props) => {
  return (
    <main className="bg-[#34353a]">
      <Header />

      <Outlet />

      <Footer />
    </main>
  );
};

export default HomeTemplate;
