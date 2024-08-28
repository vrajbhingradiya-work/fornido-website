import Link from "next/link";
import { websiteData } from "../../websiteData";

export default function Services2() {
  const servicesSection = websiteData.homePage.servicesSection;
  return (
    <>
      <section className="services-area-two section-pt-140 section-pb-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="services-img-two text-center">
                <img
                  src={servicesSection.services[0].image}
                  alt={servicesSection.services[0].heading}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-content-two">
                <div className="section-title mb-50">
                  <span className="sub-title">
                    {servicesSection.sectionHeading}
                  </span>
                  <h2 className="title">{servicesSection.heading}</h2>
                </div>
                <div className="services-list">
                  <ul className="list-wrap">
                    {servicesSection.services.map((service, index) => (
                      <li key={index}>
                        <p>{service.heading}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
