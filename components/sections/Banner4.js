import { websiteData } from "@/websiteData";
import Link from "next/link";

export default function Banner4() {
  const heroSectionData = websiteData.homePage.heroSection;
  return (
    <>
      <section className="banner-area-five banner-bg-four">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="banner-content">
                <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                  {heroSectionData.heading}
                </h2>
                <Link
                  href={heroSectionData.button.link}
                  className="btn transparent-btn wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="btn_m">
                    <div className="btn_c">
                      <div className="btn_t1">
                        {heroSectionData.button.title}
                      </div>
                      <div className="btn_t2">
                        {heroSectionData.button.title}
                      </div>
                    </div>
                  </div>
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
