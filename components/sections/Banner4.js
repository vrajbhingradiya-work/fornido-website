import { websiteData } from "@/websiteData";
import Link from "next/link";

export default function Banner4() {
  const heroSectionData = websiteData.homePage.heroSection;
  return (
    <>
      <section className="banner-area-five banner-bg-four">
        {/* Background video */}
        <video className="banner-video" autoPlay loop muted playsInline>
          <source src="/assets/img/banner/banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="banner-content">
                <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                  {heroSectionData.heading}
                </h2>
                <Link
                  href={heroSectionData.button.link}
                  className="button-57"
                  data-wow-delay=".4s"
                >
                  <span className="text">{heroSectionData.button.title}</span>
                  <span>{heroSectionData.button.title}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-scroll-down">
          <Link href={heroSectionData.button.link} className="section-link">
            <span />
            <span />
            <span />
          </Link>
        </div>
      </section>
    </>
  );
}
