"use client";
import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { websiteData } from "@/websiteData";
import { useRouter } from "next/router";
export default function Header5({ handleMobileMenu, scroll }) {
  const companyProfile = websiteData.companyProfile;
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <header className="header-style-four">
        <div className="header-top">
          <div className="container custom-container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="header-top-left">
                  <p>
                    {
                      companyProfile.contactInformation.addressInfo.mainOffice
                        .address.addressLine1
                    }{" "}
                    {
                      companyProfile.contactInformation.addressInfo.mainOffice
                        .address.addressLine2
                    }
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header-top-right">
                  <ul className="list-wrap">
                    <li>
                      <Link
                        href={`mailto:${websiteData.companyProfile.contactInformation.contactEmail}`}
                      >
                        {
                          websiteData.companyProfile.contactInformation
                            .contactEmail
                        }
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`tel:${websiteData.companyProfile.contactInformation.contactNumber.replace(
                          "-",
                          ""
                        )}`}
                      >
                        {
                          websiteData.companyProfile.contactInformation
                            .contactNumber
                        }
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sticky-header"
          className={`menu-area ${path === "/" ? "transparent-header" : ""} ${
            scroll ? "sticky-menu" : ""
          }`}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div
                  className={`mobile-nav-toggler  ${
                    path !== "/"
                      ? "logo-color-dark"
                      : scroll
                      ? "logo-color-dark"
                      : "logo-color"
                  } `}
                  onClick={handleMobileMenu}
                >
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="/">
                        <img
                          className="website-logo"
                          src={
                            path !== "/"
                              ? "/assets/img/logo/logo02-dark.png"
                              : scroll
                              ? "/assets/img/logo/logo02-dark.png"
                              : "/assets/img/logo/logo02.png"
                          }
                          alt="Logo"
                        />
                      </Link>
                    </div>
                    <div
                      className={`navbar-wrap main-menu d-none d-lg-flex ${
                        path !== "/" ? "text-dark" : "text-white"
                      }`}
                    >
                      <Menu />
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/logo02-dark.png"
                          alt="Logo"
                        />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <MobileMenu />
                    </div>
                    {/* <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                  </nav>
                </div>
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
