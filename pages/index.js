import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";
import Banner4 from "@/components/sections/Banner4";
import Newsletter from "@/components/sections/Newsletter";
import Parallax from "@/components/sections/Parallax";
import Project3 from "@/components/sections/Project3";
import Project4 from "@/components/sections/Project4";
import Services from "@/components/sections/Services";
import Services2 from "@/components/sections/Services2";
import Slider from "@/components/sections/Slider";
export default function Home5() {
  return (
    <>
      <Layout headerStyle={5}>
        <Banner4 />
        {/* <Video2 />  //remove this video */}
        <About />
        {/* <Brand /> */}
        <div className="section-pb-140"></div>
        <Project3 />
        {/* <Roadmap /> */}
        <div className="section-pb-70"></div>
        <Services2 />
        {/* <Slider /> */}
        {/* <Parallax / */}
        {/* <Team /> */}
        <Newsletter />
        {/* <Blog2 /> */}
      </Layout>
    </>
  );
}
