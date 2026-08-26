import Work from "@/app/home/Work";
import Banner from "@/app/home/Banner";
import Career from "@/app/home/Career";
import Instagram from "@/app/home/Instagram";
import MapFooter from "@/app/home/MapFooter";
import Surgery from "@/app/home/Surgery";
import Telemedicine from "@/app/home/Telemedicine";
import Faq from "@/app/home/Faq";

export default function Home() {
  return (
    <>
      <Banner />
      <Work />
      <Surgery />
      <Career />
      <Faq />
      <Instagram />
      <Telemedicine />
      <MapFooter />
    </>
  );
}
