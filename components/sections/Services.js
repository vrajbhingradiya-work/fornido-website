import Link from "next/link";
import { websiteData } from "@/websiteData";
export default function Services() {
  const { sectionHeading, heading, services } =
    websiteData.homePage.servicesSection;

  return (
    <>
      <section className="services-area section-pt-140 section-pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title text-center mb-55">
                <span className="sub-title">{sectionHeading}</span>
                <h2 className="title">{heading}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6 col-sm-10" key={index}>
                <div className="services-item">
                  <div className="services-thumb">
                    <Link href="#">
                      <img src={service.image} alt={service.heading} />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h2 className="title">
                      <Link href="#">{service.heading}</Link>
                    </h2>
                    <p>{service.text}</p>
                    {/* <Link href="#" className="text-btn">Learn more</Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
