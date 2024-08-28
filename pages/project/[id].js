"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import projectData from "../../util/project.json";
import { websiteData } from "../../websiteData";

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
  const [activeTab, setActiveTab] = useState("one");

  const [project, setProject] = useState(null);
  const [brochureLink, setBrochureLink] = useState("");

  const { id } = Router.query;

  useEffect(() => {
    console.log(id);
    setProject(
      websiteData.projectPage.projects.find(
        (projectData) => projectData.id == id
      )
    );
  }, [id]);
  console.log(project);

  const projectFloorPlans =
    websiteData.projectPage.projects[id - 1].projectFloorPlans;
  const renderImage = () => {
    const selectedPlan = projectFloorPlans.find(
      (plan) => plan.id === activeTab
    );
    return selectedPlan ? selectedPlan.image : null;
  };
  const projectImages = websiteData.projectPage.projects[id - 1].projectImages;

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
                          <span>{project.projectDetails.propertyName}</span>
                          <h2 className="title">
                            {project.projectDetails.heading}
                          </h2>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="right-side">
                          <p>{project.projectDetails.text}</p>
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
                            Property size{" "}
                            <span>{project.projectDetails.propertySize}</span>
                          </p>
                        </div>
                      </li>
                      <li className="info-item">
                        <TbMoneybag className="icon" />
                        <div className="content">
                          <p>
                            Price Range{" "}
                            <span>{project.projectDetails.priceRange}</span>
                          </p>
                        </div>
                      </li>
                      <li className="info-item">
                        <FaBuilding className="icon" />
                        <div className="content">
                          <p>
                            Type<span>{project.projectDetails.type}</span>
                          </p>
                        </div>
                      </li>
                      <li className="info-item">
                        <FaVectorSquare className="icon" />
                        <div className="content">
                          <p>
                            Flat Size{" "}
                            <span>{project.projectDetails.flatSize}</span>
                          </p>
                        </div>
                      </li>
                      <li className="info-item">
                        <FaTools className="icon" />
                        <div className="content">
                          <p>
                            Status <span>{project.projectDetails.status}</span>
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
                        {projectImages &&
                          projectImages?.map((imageSrc, index) => (
                            <SwiperSlide className="gallery-item" key={index}>
                              <img
                                src={imageSrc}
                                alt={`Gallery image ${index + 1}`}
                              />
                              <a
                                href="#download-brochure"
                                className="photo-gallery popup-image"
                              >
                                View Now
                              </a>
                            </SwiperSlide>
                          ))}
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
                          src={project.locationDetails.thumbnailImage}
                          alt="Location"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="direction-content">
                        <div className="section-title mb-40">
                          <span className="sub-title">
                            {project.locationDetails.sectionHeading}
                          </span>
                          <h2 className="title">
                            {project.locationDetails.address}
                          </h2>
                        </div>
                        <ul className="list-wrap">
                          <li>
                            Supermarket:{" "}
                            <span>
                              {
                                project.locationDetails.nearbyAmenities
                                  .superMarket
                              }
                            </span>
                          </li>
                          <li>
                            Railway Station:{" "}
                            <span>
                              {
                                project.locationDetails.nearbyAmenities
                                  .railwayStation
                              }
                            </span>
                          </li>
                          <li>
                            Airport:{" "}
                            <span>
                              {project.locationDetails.nearbyAmenities.airport}
                            </span>
                          </li>
                          <li>
                            University:{" "}
                            <span>
                              {
                                project.locationDetails.nearbyAmenities
                                  .university
                              }
                            </span>
                          </li>
                          <li>
                            Hospital:{" "}
                            <span>
                              {project.locationDetails.nearbyAmenities.hospital}
                            </span>
                          </li>
                          <li>
                            Bus Station:{" "}
                            <span>
                              {
                                project.locationDetails.nearbyAmenities
                                  .busStation
                              }
                            </span>
                          </li>
                          <li>
                            Park:{" "}
                            <span>
                              1,{project.locationDetails.nearbyAmenities.park}
                            </span>
                          </li>
                        </ul>
                        <Link
                          href={project.locationDetails.locationLink}
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
                                activeTab === "one" ? "active" : ""
                              }`}
                              id="one-tab"
                              type="button"
                              role="tab"
                              aria-controls="one-tab-pane"
                              aria-selected={activeTab === "one"}
                              onClick={() => setActiveTab("one")}
                            >
                              Lower Ground
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link ${
                                activeTab === "two" ? "active" : ""
                              }`}
                              id="two-tab"
                              type="button"
                              role="tab"
                              aria-controls="two-tab-pane"
                              aria-selected={activeTab === "two"}
                              onClick={() => setActiveTab("two")}
                            >
                              Ground
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link ${
                                activeTab === "three" ? "active" : ""
                              }`}
                              id="three-tab"
                              type="button"
                              role="tab"
                              aria-controls="three-tab-pane"
                              aria-selected={activeTab === "three"}
                              onClick={() => setActiveTab("three")}
                            >
                              First
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link ${
                                activeTab === "four" ? "active" : ""
                              }`}
                              id="four-tab"
                              type="button"
                              role="tab"
                              aria-controls="four-tab-pane"
                              aria-selected={activeTab === "four"}
                              onClick={() => setActiveTab("four")}
                            >
                              Terrace
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          {renderImage()}
                        </div>
                      </div>
                      <div id="download-brochure" className="file-wrap">
                        <ul className="list-wrap">
                          <li>
                            <button
                              // href="assets/img/images/plan_img01.jpg"
                              // download
                              // target="_blank"
                              onClick={() => {
                                setFormIsShowing(!formIsShowing);
                                setBrochureLink(project.brochureLink);
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
        <BrochureDownloadForm
          setFormIsShowing={setFormIsShowing}
          brochureLink={brochureLink}
        />
      )}
    </>
  );
};

export default ProjectDetails;
