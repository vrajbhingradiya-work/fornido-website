import InquiryForm from "../components/elements/InquiryForm";
import Layout from "../components/layout/Layout";
import { websiteData } from "../websiteData";
import Link from "next/link";

export default function Overview() {
  const aboutUsPageData = websiteData.aboutUsPage;
  return (
    <>
      <Layout headerStyle={5}>
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="title">ABOUT US</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/" />
                        Home
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        ABOUT
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* about-area */}
        <section className="about-area-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-img text-center">
                  <img
                    src={aboutUsPageData.aboutSection.thumbnailImage}
                    alt="About Us"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-40">
                    <span className="sub-title">
                      {aboutUsPageData.aboutSection.sectionHeading}
                    </span>
                    <h2 className="title">
                      {aboutUsPageData.aboutSection.heading}
                    </h2>
                  </div>
                  <p>{aboutUsPageData.aboutSection.text}</p>
                  {/* <Link href="overview" className="btn transparent-btn">
        <div className="btn_m">
          <div className="btn_c">
            <div className="btn_t1">learn more</div>
            <div className="btn_t2">learn more</div>
          </div>
        </div>
      </Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-area-end */}
        {/* counter-area */}
        {/* <div className="counter-area section-pt-140 section-pb-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="counter-item-wrap">
                  <div className="row">
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={51} time={1} />
                        <p>
                          Completed <span>projects</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={30} time={1} />
                        <p>
                          under <span>construction</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={17} time={1} />
                        <p>
                          Projects <span>underway</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={45} time={1} />
                        <p>
                          Joint ventures <span>completed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* counter-area-end */}
        {/* vision-area */}
        <section className="vision-area section-pt-140 section-pb-140">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-0 order-lg-2">
                <div className="vision-img text-center">
                  <img
                    src={aboutUsPageData.ourVisionSection.thumbnailImage}
                    alt="Our Vision"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="vision-content">
                  <div className="section-title mb-35">
                    <span className="sub-title">
                      {aboutUsPageData.ourVisionSection.sectionHeading}
                    </span>
                    <h2 className="title">
                      {aboutUsPageData.ourVisionSection.heading}
                    </h2>
                  </div>
                  <p>{aboutUsPageData.ourVisionSection.text}</p>
                  {/* <img src="/assets/img/images/sine.png" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* vision-area-end */}
        {/* mission-area */}

        <section className="mission-area section-pt-140">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mission-img">
                  <img
                    src={aboutUsPageData.ourMissionSection.thumbnailImage}
                    alt="Our Mission"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mission-content">
                  <div className="section-title mb-40">
                    <span className="sub-title">
                      {aboutUsPageData.ourMissionSection.sectionHeading}
                    </span>
                    <h2 className="title">
                      {aboutUsPageData.ourMissionSection.heading}
                    </h2>
                  </div>
                  <p>{aboutUsPageData.ourMissionSection.text}</p>
                  {/* <Link href="mission" className="btn transparent-btn">
            <div className="btn_m">
              <div className="btn_c">
                <div className="btn_t1">learn more</div>
                <div className="btn_t2">learn more</div>
              </div>
            </div>
          </Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* mission-area-end */}

        {/* parallax-img-area */}
        {/* <div className="section-pt-140">
          <Parallax />
        </div> */}
        {/* parallax-img-area-end */}
        {/* roadMap-area */}
        {/* <section className="roadmap-area section-py-140">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-title text-center mb-50">
                  <span className="sub-title">Awards &amp recognition</span>
                  <h2 className="title">The Merits we have earned</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-12">
              <div className="roadmap-wrap">
                <div className="swiper-container roadmap-active">
                  <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2007</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores
                          </p>
                          <span>
                            ET Now Real Estate Awards <br /> Most Promising
                            Delivery
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2010</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores
                          </p>
                          <span>
                            Design &amp Development Awards <br /> Ideal Project
                            Design
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2011</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores
                          </p>
                          <span>
                            National Real Estate Awards <br /> Best Luxury
                            Company
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2014</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores
                          </p>
                          <span>
                            Golden Globe Tiger Awards <br /> Property of the
                            Year
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2019</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores
                          </p>
                          <span>
                            BAM Awards Real Best <br />
                            Creative builder
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2020</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores
                          </p>
                          <span>
                            Design &amp Development Awards <br /> Ideal Project
                            Design
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* roadMap-area-end */}
        {/* team-area */}
        {/* <section className="team-area-two">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7">
                <div className="section-title text-center mb-55">
                  <span className="sub-title">Leadership</span>
                  <h2 className="title">Meet with our amazing team members</h2>
                </div>
              </div>
            </div>
            <div className="team-item-wrap">
              <div className="row justify-content-center">
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img01.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Johan Johnson</Link>
                      </h3>
                      <span>Architect</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img02.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Jacob Jones</Link>
                      </h3>
                      <span>Founder</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img03.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Eleanor Pena</Link>
                      </h3>
                      <span>Head of Design</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img04.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Bessie Cooper</Link>
                      </h3>
                      <span>Product Manager</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img05.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Kim Smith</Link>
                      </h3>
                      <span>Marketer</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img06.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Courtney Henry</Link>
                      </h3>
                      <span>Account Manager</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img07.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Theresa Webb</Link>
                      </h3>
                      <span>Architect</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img08.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Belva Boyd</Link>
                      </h3>
                      <span>Architect</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-more-btn text-center mt-30">
              <Link href="team" className="btn transparent-btn">
                <div className="btn_m">
                  <div className="btn_c">
                    <div className="btn_t1">View all members</div>
                    <div className="btn_t2">View all members</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section> */}
        {/* team-area-end */}

        {/*TODO: add founder's section */}
        {/* founders-section */}

        <div className="section-pt-140">
          <section className="founders-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-9">
                  <div className="team-details-thumb">
                    <img
                      src={aboutUsPageData.contactDetails.thumbnailImage}
                      alt="Founder"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="team-details-content">
                    <span className="sub-title">From the Founder</span>
                    <h2 className="title">Sahil Anand</h2>
                    <div className="td-contact">
                      <ul className="list-wrap">
                        <li>
                          <Link
                            href={`mailto:${aboutUsPageData.contactDetails.email}`}
                          >
                            {aboutUsPageData.contactDetails.email}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`tel:${aboutUsPageData.contactDetails?.phoneNumber.replace(
                              "-",
                              ""
                            )}`}
                          >
                            {aboutUsPageData.contactDetails?.phoneNumber}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="td-social">
              <ul className="list-wrap">
                <li>
                  <Link href={aboutUsPage.contactDetails.socialLinks.facebook}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link href={aboutUsPage.contactDetails.socialLinks.instagram}>
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link href={aboutUsPage.contactDetails.socialLinks.twitter}>
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href={aboutUsPage.contactDetails.socialLinks.linkedin}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li>
                  <Link href={aboutUsPage.contactDetails.socialLinks.youtube}>
                    <i className="fab fa-youtube" />
                  </Link>
                </li>
              </ul>
            </div> */}
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur
                    </p>
                    <p>
                      Denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences
                    </p>
                    {/* <div className="sine-img mt-40">
              <img src="/assets/img/images/sine.png" alt="" />
            </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* founders-section-end */}

        <InquiryForm />
      </Layout>
    </>
  );
}
