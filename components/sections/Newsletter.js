import { websiteData } from "@/websiteData";
export default function Newsletter() {
  const inquirySection = websiteData.homePage.inquirySection;

  return (
    <>
      <section className="newsletter-area section-pb-140 section-pt-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="newsletter-inner">
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="newsletter-content">
                      <div className="section-title mb-50">
                        <span className="sub-title">
                          {inquirySection.sectionHeading}
                        </span>
                        <h2 className="title">{inquirySection.heading}</h2>
                      </div>
                      <form action="#" className="newsletter-form">
                        <ul className="list-wrap">
                          <li>
                            <input
                              type="text"
                              placeholder="Your name"
                              required="required"
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              placeholder="Phone number"
                              required="required"
                            />
                          </li>
                          <li className="submit-btn">
                            <input type="submit" value="submit" />
                          </li>
                        </ul>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkbox"
                          />
                          <label htmlFor="checkbox">
                            I accept <span>Terms &amp; Conditions</span> for
                            processing personal data
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
