import Link from "next/link";

export default function Services2() {
  return (
    <>
      <section className="services-area-two section-pt-140 section-pb-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="services-img-two text-center">
                <img src="assets/img/images/services_04.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-content-two">
                <div className="section-title mb-50">
                  <span className="sub-title">Our services</span>
                  <h2 className="title">Making living spaces affordable</h2>
                </div>
                <div className="services-list">
                  <ul className="list-wrap">
                    <li>
                      <p>High Quality Products</p>
                    </li>
                    <li>
                      <p>Green Environment</p>
                    </li>
                    <li>
                      <p>Comprehensive Amenities</p>
                    </li>
                    <li>
                      <p>Professional Services</p>
                    </li>
                    <li>
                      <p>Humanitarian Community</p>
                    </li>
                    <li>
                      <p>Absolute Security</p>
                    </li>
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
