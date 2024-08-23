import InquiryForm from "@/components/elements/InquiryForm";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <Layout headerStyle={5}>
        {/* breadcrumb-area */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="title">Contact Us</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* contact-info */}
        <section className="contact-info pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="contact-info-item">
                  <span className="sub-title">Main office</span>
                  <h2 className="title">
                    1940 El Cajon Blvd, San Diego, CA 92104, United States
                  </h2>
                  <ul className="list-wrap">
                    <li>
                      <Link href="mailto:relandgroup@mail.com">
                        relandgroup@mail.com
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:0123456789">+7 495 127 5451</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="contact-info-item">
                  <span className="sub-title">Second office</span>
                  <h2 className="title">
                    1401 S Grand Ave, Los Angeles, CA 90015, United States
                  </h2>
                  <ul className="list-wrap">
                    <li>
                      <Link href="mailto:relandgroup@mail.com">
                        relandgroup@mail.com
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:0123456789">+7 495 127 5451</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="contact-info-item">
                  <span className="sub-title">Third office</span>
                  <h2 className="title">
                    2601 Holme Ave, Philadelphia, PA 19152, United States
                  </h2>
                  <ul className="list-wrap">
                    <li>
                      <Link href="mailto:relandgroup@mail.com">
                        relandgroup@mail.com
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:0123456789">+7 495 127 5451</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-info-end */}
        {/* contact-map */}
        <div className="map-area">
          <div className="container">
            <div id="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96811.54759587669!2d-74.01263924803828!3d40.6880494567041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1636195194646!5m2!1sen!2sbd"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* contact-map-end */}
        {/* contact-form-area */}
        <InquiryForm />
        {/* contact-form-area-end */}
      </Layout>
    </>
  );
}
