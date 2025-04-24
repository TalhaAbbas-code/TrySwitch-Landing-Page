import Nav from "../component/layouts/Nav";
import Hero from "../component/layouts/Hero";
import Investor from "@/component/layouts/Investor";
import Seller from "@/component/layouts/Seller";
import Community from "@/component/layouts/Community";
import Solutions from "@/component/layouts/Solutions";
import Footer from "@/component/layouts/Footer";
import GetInTouch from "@/component/layouts/GetInTouch";
import WhyTrySwitch from "@/component/layouts/WhyTrySwitch";
import Carousell from "@/component/layouts/Features";

export default function Home() {
  return (
    <div className=" bg-gray-50  flex flex-col  items-center  ">
      <Nav />
      <Hero />
      <WhyTrySwitch />
      <Carousell />
      <Investor />
      <Seller />
      <Community />
      <Solutions />
      <GetInTouch />
      <Footer />
    </div>
  );
}
