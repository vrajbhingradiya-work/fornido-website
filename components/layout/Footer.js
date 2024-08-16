import { websiteData } from "@/websiteData";
import Link from "next/link";

export default function Footer1({}) {
  const footerData = websiteData.footerData;
  const companyProfile = websiteData.companyProfile;
  return (
    <>
      <footer>
        <div className="footer-area footer-bg">
          <div className="container ">
            <div className="footer-top">
              <div className="row ">
                <div className="col-xl-4 col-md-4 col-sm-5">
                  <div className="footer-widget">
                    <div className="footer-logo ">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/logo02.png"
                          className="website-footer-logo"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" col-xl-3 col-md-4 col-sm-7"></div>{" "}
                <div className="col-xl-3 col-md-4 col-sm-7 ">
                  <div className="footer-widget  ">
                    <h2 className="fw-title ">Contact</h2>
                    <div className="footer-contact">
                      <p className="">
                        {
                          companyProfile.contactInformation.addressInfo
                            .mainOffice.address.addressLine1
                        }
                        <br />
                        {
                          companyProfile.contactInformation.addressInfo
                            .mainOffice.address.addressLine2
                        }
                      </p>
                      <ul className="list-wrap">
                        <li>
                          <Link
                            href={`mailto:${companyProfile.contactInformation.contactEmail}`}
                          >
                            {companyProfile.contactInformation.contactEmail}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`tel:${companyProfile.contactInformation.contactNumber.replace(
                              /-/g,
                              ""
                            )}`}
                          >
                            {companyProfile.contactInformation.contactNumber}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-5 ">
                  <div className="footer-widget ">
                    <h2 className="fw-title">Useful links</h2>
                    <div className="footer-link">
                      <ul className="list-wrap ">
                        {footerData?.usefulLinks.map((item, index) => (
                          <li key={index}>
                            <Link href={`${item.link}`}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-3 col-md-5 col-sm-7">
                  <div className="footer-widget">
                    <h2 className="fw-title">newsletter</h2>
                    <div className="footer-newsletter">
                      <form action="#">
                        <input type="email" placeholder="Email address..." />
                        <button type="submit">
                          <i className="fas fa-arrow-right" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-text text-center">
                    <p>
                      Copyright © <span>Fornido</span>{" "}
                      {new Date().getFullYear()}. All Rights Reserved
                    </p>
                  </div>
                  <div className="footer-social">
                    <ul className="list-wrap">
                      {footerData?.socials.map((item, index) => (
                        <li key={index}>
                          <Link href={`${item.link}`}>{item.icon}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
