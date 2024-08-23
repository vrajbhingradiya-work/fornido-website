import Link from "next/link";
import Layout from "../components/layout/Layout";

export default function Custom404() {
  return (
    <>
      <Layout headerStyle={6}>
        <section className="error-area">
          <div className="error-shape" />
          <div className="container">
            <div className="row">
              <div className="col-xl-10">
                <div className="error-content">
                  <h2 className="title">
                    The page you are looking for might have been removed or
                    temporarily unavailable
                  </h2>
                  <Link href="/" className="btn">
                    <div className="btn_m">
                      <div className="btn_c">
                        <div className="btn_t1">Back to home</div>
                        <div className="btn_t2">Back to home</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-text">
            <p>
              Copyright © <span>Reland</span> {new Date().getFullYear()}. All
              Rights Reserved
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
