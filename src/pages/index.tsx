import Applications from "@/component/Applications";
import Career from "@/component/Career";
import Banner from "@/component/common/Banner";
import TopBanner from "@/component/common/TopBanner";
import News from "@/component/News";
import ProductSection from "@/component/ProductSection";
import Slide from "@/component/propduct/Slide";

export default function Home() {
  return (
    <>
      <ProductSection />
      <Applications />
      <News />
      <Career />
    </>
  );
}
