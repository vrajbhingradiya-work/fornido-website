import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Menu({ isShow, scroll }) {
  const router = useRouter();
  const path = router.pathname;

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <ul className="navigation">
        <li className="menu-item-has-children">
          <Link
            className={`${
              path !== "/"
                ? "logo-color-dark"
                : scroll
                ? "logo-color-dark"
                : "logo-color"
            }`}
            href="/"
          >
            Home
          </Link>
          {/* <ul className="sub-menu" >
                        <li><Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/">Home One</Link></li>
                        <li><Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/index-2">Home Two</Link></li>
                        <li><Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/index-3">Home Three</Link></li>
                        <li><Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/index-4">Home Four</Link></li>
                        <li><Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/index-5">Home Five</Link></li>
                        <li><Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/index-6">Home Six</Link></li>
                        <li><Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/index-7">Home Seven</Link></li>
                        <li><Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/index-8">Home Eight</Link></li>
                    </ul> */}
        </li>
        <li className="menu-item-has-children">
          <Link
            className={`${
              path !== "/"
                ? "logo-color-dark"
                : scroll
                ? "logo-color-dark"
                : "logo-color"
            }`}
            href="/about-us"
          >
            About
          </Link>
          {/* <ul className="sub-menu" >
                        <li><Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/overview">Overview</Link></li>
                        <li><Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/mission">Mission</Link></li>
                        <li><Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/team">Our Team</Link></li>
                        <li><Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/team-details">Team Profile</Link></li>
                    </ul> */}
        </li>
        <li className="menu-item-has-children">
          <Link
            className={`${
              path !== "/"
                ? "logo-color-dark"
                : scroll
                ? "logo-color-dark"
                : "logo-color"
            }`}
            href="/#projects"
          >
            Projects
          </Link>
          <ul className="sub-menu">
            {/* <li>
              <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/project">Projects Two Col</Link>
            </li>
            <li>
              <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/project-two">Projects Three Col</Link>
            </li>
            <li>
              <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/project-three">Projects Four Col</Link>
            </li> */}
            <li>
              <Link
                className={`${
                  path !== "/"
                    ? "logo-color-dark"
                    : scroll
                    ? "logo-color-dark"
                    : "logo-color"
                }`}
                href="/project/1"
              >
                Projects One
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  path !== "/"
                    ? "logo-color-dark"
                    : scroll
                    ? "logo-color-dark"
                    : "logo-color"
                }`}
                href="/project/2"
              >
                Projects Two
              </Link>
            </li>
          </ul>
        </li>
        {/* blog-menu-start */}
        {/* <li className="menu-item-has-children">
          <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="#">blog</Link>
          <ul className="sub-menu">
            <li>
              <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/blog">Blog Grid</Link>
            </li>
            <li>
              <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/blog-sidebar">Blog Grid Sidebar</Link>
            </li>
            <li>
              <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/blog-list">Blog Standard</Link>
            </li>
            <li>
              <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/blog/1">Blog Single</Link>
            </li>
          </ul>
        </li> */}
        {/* blog-menu-end */}

        {/* pages-extra-start */}

        {/* <li className="menu-item-has-children">
          <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="#">Pages</Link>
          <ul className="sub-menu">
            <li>
              <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/sirvices">Services</Link>
            </li>
            <li>
              <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/testimonial">Testimonials</Link>
            </li>
            <li>
              <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/faq">Faq</Link>
            </li>
            <li>
              <Link className={`${path==="/" ? "text-white" : "text-dark"}`} href="/404">404 Error</Link>
            </li>
          </ul>
        </li> */}
        {/* pages-extra-end */}
        <li>
          <Link
            className={`${
              path !== "/"
                ? "logo-color-dark"
                : scroll
                ? "logo-color-dark"
                : "logo-color"
            }`}
            href="/contact"
          >
            contact
          </Link>
        </li>
      </ul>
    </>
  );
}
