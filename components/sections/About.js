import { websiteData } from "../../websiteData";
import Link from "next/link";

export default function About() {
  const aboutSectionData = websiteData.homePage.aboutSection;
  return (
    <>
      <section id="about" className="about-area section-pt-135 section-pb-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-35">
                <span className="sub-title">
                  {aboutSectionData.sectionHeading}
                </span>
                <h2 className="title">{aboutSectionData.heading}</h2>
              </div>
              <div className="about-content text-center">
                <p>{aboutSectionData.text}</p>
                <Link
                  href={aboutSectionData.button.link}
                  className="button-58"
                  data-wow-delay=".4s"
                >
                  <span class="text button-dark-57">
                    {aboutSectionData.button.title}
                  </span>
                  <span>{aboutSectionData.button.title}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
