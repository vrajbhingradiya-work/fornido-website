"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import projectData from "../../util/project.json";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaRulerCombined,
  FaBuilding,
  FaVectorSquare,
  FaTools,
} from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { CiFileOn } from "react-icons/ci";
import BrochureDownloadForm from "../../components/elements/BrochureDownloadForm";
import InquiryForm from "../../components/elements/InquiryForm";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
};

const ProjectDetails = () => {
  let Router = useRouter();
  const [formIsShowing, setFormIsShowing] = useState(false);
  const [activeTab, setActiveTab] = useState("master");

  const renderImage = () => {
    switch (activeTab) {
      case "master":
        return (
          <img
            className="content-center"
            src="/assets/img/images/plan_img01.jpg"
            alt="Master Plan"
          />
        );
      case "tower":
        return (
          <img
            className="content-center"
            src="/assets/img/images/plan_img02.jpg"
            alt="Tower Plan"
          />
        );
      case "double":
        return (
          <img
            className="content-center"
            src="/assets/img/images/plan_img01.jpg"
            alt="Double Height"
          />
        );
      case "penthouse":
        return (
          <img
            className="content-center"
            src="/assets/img/images/plan_img02.jpg"
            alt="Penthouse"
          />
        );
      default:
        return null;
    }
  };

  const [project, setProject] = useState(null);

  const { id } = Router.query;

  useEffect(() => {
    setProject(projectData.find((projectData) => projectData.id == id));
  }, [id]);

  return (
    <>
      {!formIsShowing && (
        <Layout headerStyle={5}>
          {project && (
            <>
              <section className="project-details-area">
                <div className="container">
                  <div className="project-details-top">
                    <div className="row align-items-end">
                      <div className="col-lg-6">
                        <div className="project-details-title">
                          <span>{project.location}</span>
                          <h2 className="title">{project.title}</h2>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="right-side">
                          <p>
                            Nor again is there anyone who loves or pursues or
                            desires to obtain pain of itself, because it is
                            pain, but because occasionally circumstances occur
                            in which toil and pain can procure him some great
                            pleasure. To take a trivial example, which of us
                            ever undertakes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-info-wrap">
                    <ul className="list-wrap">
                      <li className="info-item">
                        <FaRulerCombined className="icon" />
                        <div className="content">
                          <p>
                            Property size <span>174,000 sqft</span>
                          </p>
                        </div>
                      </li>
                      <li className="info-item">
                        <TbMoneybag className="icon" />
                        <div className="content">
                          <p>
                            Price Range <span>$24K - $77K</span>
                          </p>
                        </div>
                      </li>
                      <li className="info-item">
                        <FaBuilding className="icon" />
                        <div className="content">
                          <p>
                            Type<span>{project.type}</span>
                          </p>
                        </div>
                      </li>
                      <li className="info-item">
                        <FaVectorSquare className="icon" />
                        <div className="content">
                          <p>
                            Flat Size <span>100 - 150 Sqft</span>
                          </p>
                        </div>
                      </li>
                      <li className="info-item">
                        <FaTools className="icon" />
                        <div className="content">
                          <p>
                            Status <span>{project.status}</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* project-area-end */}
              {/* gallery-area */}
              <div className="gallery-area section-pb-140">
                <div className="">
                  <div className="row">
                    <div className="col-lg-12">
                      <Swiper {...swiperOptions} className="gallery-active">
                        <SwiperSlide className="gallery-item">
                          <img
                            src="/assets/img/gallery/gallery_img01.jpg"
                            alt=""
                          />
                          <Link
                            href="assets/img/gallery/gallery_img01.jpg"
                            className="photo-gallery popup-image"
                          >
                            Photo gallery
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide className="gallery-item">
                          <img
                            src="/assets/img/gallery/gallery_img02.jpg"
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide className="gallery-item">
                          <div className="apartment-view">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!4v1662100217151!6m8!1m7!1sUtVXSDO2fjmgru0WpZ73jA!2m2!1d40.74810413527912!2d-73.98582572164915!3f108.72567799089525!4f-13.920241031746983!5f0.7820865974627469"
                              allowFullScreen
                              loading="lazy"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="gallery-item">
                          <img
                            src="/assets/img/gallery/gallery_img01.jpg"
                            alt=""
                          />
                          <Link
                            href="assets/img/gallery/gallery_img01.jpg"
                            className="photo-gallery popup-image"
                          >
                            Photo gallery
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide className="gallery-item">
                          <img
                            src="/assets/img/gallery/gallery_img02.jpg"
                            alt=""
                          />
                          {/* <ViodePopup /> */}
                        </SwiperSlide>
                        <SwiperSlide className="gallery-item">
                          <div className="apartment-view">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!4v1662100217151!6m8!1m7!1sUtVXSDO2fjmgru0WpZ73jA!2m2!1d40.74810413527912!2d-73.98582572164915!3f108.72567799089525!4f-13.920241031746983!5f0.7820865974627469"
                              allowFullScreen
                              loading="lazy"
                            />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
              {/* gallery-area-end */}
              {/* features-area */}
              {/* <section className="features-area features-pb-80">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="features-item">
                      <div className="feature-icon">
                        <i className="flaticon-001-sofa" />
                      </div>
                      <div className="feature-content">
                        <h2 className="title">High Quality Products</h2>
                        <p>
                          Magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet sed quia
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="features-item">
                      <div className="feature-icon">
                        <i className="flaticon-002-plants" />
                      </div>
                      <div className="feature-content">
                        <h2 className="title">Green Environment</h2>
                        <p>
                          Magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet sed quia
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="features-item">
                      <div className="feature-icon">
                        <i className="flaticon-003-chandelier" />
                      </div>
                      <div className="feature-content">
                        <h2 className="title">Comprehensive Amenities</h2>
                        <p>
                          Magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet sed quia
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="features-item">
                      <div className="feature-icon">
                        <i className="flaticon-004-headset" />
                      </div>
                      <div className="feature-content">
                        <h2 className="title">Professional Services</h2>
                        <p>
                          Magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet sed quia
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="features-item">
                      <div className="feature-icon">
                        <i className="flaticon-005-leader" />
                      </div>
                      <div className="feature-content">
                        <h2 className="title">Humanitarian Community</h2>
                        <p>
                          Magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet sed quia
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="features-item">
                      <div className="feature-icon">
                        <i className="flaticon-006-shield" />
                      </div>
                      <div className="feature-content">
                        <h2 className="title">Absolute Security</h2>
                        <p>
                          Magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet sed quia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
              {/* features-area-end */}
              {/* direction-area */}
              <section className="direction-area">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="direction-img text-center">
                        <img
                          src="/assets/img/images/direction_img.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="direction-content">
                        <div className="section-title mb-40">
                          <span className="sub-title">Baltimore, MD</span>
                          <h2 className="title">8601 Honeygo Boulevard,</h2>
                        </div>
                        <ul className="list-wrap">
                          <li>
                            Supermarket: <span>200M</span>
                          </li>
                          <li>
                            Railway Station: <span>1,800M</span>
                          </li>
                          <li>
                            Airport: <span>2,790M</span>
                          </li>
                          <li>
                            University: <span>250M</span>
                          </li>
                          <li>
                            Hospital: <span>500M</span>
                          </li>
                          <li>
                            Bus Station: <span>150M</span>
                          </li>
                          <li>
                            Park: <span>1,500M</span>
                          </li>
                        </ul>
                        <Link
                          href="/project/1"
                          className="button-58"
                          data-wow-delay=".4s"
                        >
                          <span className="text button-dark-57">
                            Get Directions
                          </span>
                          <span>Get Directions</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* direction-area-end */}
              {/* plan-area */}
              <div className="plan-area section-py-140">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="plan-wrap">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link ${
                                activeTab === "master" ? "active" : ""
                              }`}
                              id="master-tab"
                              type="button"
                              role="tab"
                              aria-controls="master-tab-pane"
                              aria-selected={activeTab === "master"}
                              onClick={() => setActiveTab("master")}
                            >
                              Master Plan
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link ${
                                activeTab === "tower" ? "active" : ""
                              }`}
                              id="tower-tab"
                              type="button"
                              role="tab"
                              aria-controls="tower-tab-pane"
                              aria-selected={activeTab === "tower"}
                              onClick={() => setActiveTab("tower")}
                            >
                              Tower Plan
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link ${
                                activeTab === "double" ? "active" : ""
                              }`}
                              id="double-tab"
                              type="button"
                              role="tab"
                              aria-controls="double-tab-pane"
                              aria-selected={activeTab === "double"}
                              onClick={() => setActiveTab("double")}
                            >
                              Double Height
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link ${
                                activeTab === "penthouse" ? "active" : ""
                              }`}
                              id="penthouse-tab"
                              type="button"
                              role="tab"
                              aria-controls="penthouse-tab-pane"
                              aria-selected={activeTab === "penthouse"}
                              onClick={() => setActiveTab("penthouse")}
                            >
                              Penthouse
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          {renderImage()}
                        </div>
                      </div>
                      <div className="file-wrap">
                        <ul className="list-wrap">
                          <li>
                            <button
                              // href="assets/img/images/plan_img01.jpg"
                              // download
                              // target="_blank"
                              onClick={() => {
                                setFormIsShowing(!formIsShowing);
                                console.log("button clicked");
                              }}
                            >
                              <CiFileOn className="brochure-icon" />
                              Download Brochure
                            </button>
                          </li>
                          {/* <li>
                            <Link
                              href="assets/img/images/plan_img01.jpg"
                              download
                              target="_blank"
                            >
                              <i className="flaticon-010-pdf" />
                              Payment 4.2 kb
                            </Link>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* plan-area-end */}
              <InquiryForm />
            </>
          )}
        </Layout>
      )}
      {formIsShowing && (
        <BrochureDownloadForm setFormIsShowing={setFormIsShowing} />
      )}
    </>
  );
};

export default ProjectDetails;
