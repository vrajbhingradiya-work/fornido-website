import Link from "next/link";
import { websiteData } from "../../websiteData";

export default function Project4() {
  const projectsSectionData = websiteData.homePage.projectsSection; // Access the relevant data

  return (
    <>
      <section
        id="projects"
        className="project-area project-style-four section-pt-140 project-pb-70"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-title">
                <span className="sub-title">
                  {projectsSectionData.sectionHeading}
                </span>
                <h2 className="title">{projectsSectionData.heading}</h2>
                {/* Uncomment if needed */}
                {/* <Link href="project" className="btn transparent-btn">
                  <div className="btn_m">
                    <div className="btn_c">
                      <div className="btn_t1">{projectsSectionData.buttonTitle}</div>
                      <div className="btn_t2">{projectsSectionData.buttonTitle}</div>
                    </div>
                  </div>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="project-item-wrap">
                <div className="row">
                  {projectsSectionData.projects.map((project, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="project-item">
                        <div className="project-thumb">
                          <Link href={`/project/${index + 1}`}>
                            <img
                              src={project.thumbnail} // Use the dynamic image link
                              alt={project.heading} // Add alt text for accessibility
                            />
                          </Link>
                        </div>
                        <div className="project-content">
                          <h2 className="title">
                            <Link href={`/project/${index + 1}`}>
                              {project.heading}
                            </Link>
                          </h2>
                          <span>{project.shortAddress}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
