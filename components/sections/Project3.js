import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { websiteData } from "../../websiteData";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
};
export default function Project3() {
  const projectsSection = websiteData.homePage.projectsSection;

  return (
    <>
      <section className="project-area project-style-three section-pt-140 section-pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section-title mb-50">
                <span className="sub-title">
                  {projectsSection.sectionHeading}
                </span>
                <h2 className="title">{projectsSection.heading}</h2>
                <Link
                  href="/project/1"
                  className="button-58"
                  data-wow-delay=".4s"
                >
                  <span class="text button-dark-57">
                    {projectsSection.buttonTitle}
                  </span>
                  <span>{projectsSection.buttonTitle}</span>
                </Link>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="swiper-container project-active">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="/project/1">
                          <img
                            className="project-section-image"
                            src={
                              websiteData.projectPage.projects[0]
                                .projectImages[0]
                            }
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <Link href="/project/1">
                            {
                              websiteData.projectPage.projects[0].projectDetails
                                .heading
                            }
                          </Link>
                        </h3>
                        <span>
                          {
                            websiteData.projectPage.projects[0].locationDetails
                              .address
                          }
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="/project/2">
                          <img
                            className="project-section-image"
                            src={
                              websiteData.projectPage.projects[1]
                                .projectImages[0]
                            }
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <Link href="/project/2">
                            {
                              websiteData.projectPage.projects[1].projectDetails
                                .heading
                            }
                          </Link>
                        </h3>
                        <span>
                          {
                            websiteData.projectPage.projects[1].locationDetails
                              .address
                          }
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="/project/1">
                          <img
                            src={
                              websiteData.projectPage.projects[0]
                                .projectImages[0]
                            }
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <Link href="/project/1">
                            {
                              websiteData.projectPage.projects[0].projectDetails
                                .heading
                            }
                          </Link>
                        </h3>
                        <span>
                          {
                            websiteData.projectPage.projects[0].locationDetails
                              .address
                          }
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="/project/2">
                          <img
                            src={
                              websiteData.projectPage.projects[1]
                                .projectImages[0]
                            }
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <Link href="/project/2">
                            {
                              websiteData.projectPage.projects[1].projectDetails
                                .heading
                            }
                          </Link>
                        </h3>
                        <span>
                          {
                            websiteData.projectPage.projects[1].locationDetails
                              .address
                          }
                        </span>
                      </div>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
