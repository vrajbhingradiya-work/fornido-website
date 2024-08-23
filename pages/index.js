import About from "../components/sections/About";
import Banner4 from "../components/sections/Banner4";
import Project3 from "../components/sections/Project3";
import Services2 from "../components/sections/Services2";
import InquiryForm from "../components/elements/InquiryForm";
import Layout from "../components/layout/Layout";
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
        {/* <Blog2 /> */}
        <InquiryForm />
      </Layout>
    </>
  );
}
