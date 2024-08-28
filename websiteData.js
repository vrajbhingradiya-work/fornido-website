import ProjectDetails from "./pages/project/[id]";

export const websiteData = {
  companyProfile: {
    logo: "<link to drive logo folder>",
    contactInformation: {
      contactEmail: "worldofsahilanand@gmail.com",
      contactNumber: "+91-8282820811",
      addressInfo: {
        mainOffice: {
          address: {
            addressLine1: "Sodiem Siolim, Siolim,",
            addressLine2: "Goa - 403517",
          },
          mapLocation: "<link>",
        },
        secondOffice: {
          address: {
            addressLine1: "Sodiem Siolim, Siolim,",
            addressLine2: "Goa - 403517",
          },
          mapLocation: "<link>",
        },
        thirdOffice: {
          address: {
            addressLine1: "Sodiem Siolim, Siolim,",
            addressLine2: "Goa - 403517",
          },
          mapLocation: "<link>",
        },
      },
    },
  },
  footerData: {
    usefulLinks: [
      {
        title: "About Us",
        link: "/about-us",
      },
      {
        title: "Terms & Conditions",
        link: "/terms-and-conditions",
      },
      {
        title: "Privacy Policy",
        link: "/privacy-policy",
      },
    ],
    socials: [
      {
        title: "instagram",
        icon: <i className="fab fa-instagram icon-fill " />,
        link: "/insta",
      },
      {
        title: "facebook",
        icon: <i className="fab fa-facebook-f icon-fill" />,
        link: "/facebook",
      },
      {
        title: "youtube",
        icon: <i className="fab fa-youtube icon-fill" />,
        link: "/youtube",
      },
      {
        title: "twitter",
        icon: <i className="fab fa-twitter icon-fill" />,
        link: "/twitter",
      },
    ],
  },
  homePage: {
    heroSection: {
      heading: "Crearemos el hogar que siempre has soñado",
      bgVideoLink: "<link>",
      button: {
        title: "Learn More",
        link: "/about-us",
      },
    },
    aboutSection: {
      sectionHeading: "Quiénes Somos",
      heading: "treinta años as a trusted leader in the real estate industry",
      text: "For over three decades, FORNIDO has been a cornerstone in the global real estate industry. Our commitment to quality, innovation, and customer satisfaction has solidified our reputation as a trusted leader. From sprawling villas and serene residential parks to bustling shopping malls, we have crafted diverse real estate solutions across the globe. Our portfolio spans multiple countries, offering a wide range of options to suit your lifestyle and investment goals. ",
      button: {
        title: "More About",
        link: "/about-us",
      },
    },
    projectsSection: {
      sectionHeading: "Proyectos Destacados",
      heading: "See What’s New: Ongoing and Completed Projects",
      buttonTitle: "EXPLORE NOW",
      projects: [
        {
          thumbnail: "assets/img/project/h2_project_img01.jpg",
          heading: "New Central Garden",
          shortAddress: "Baltimore, MD",
        },
        {
          thumbnail: "assets/img/project/h2_project_img02.jpg",
          heading: "City Shopping Complex",
          shortAddress: "Charlottesville, VA",
        },
        {
          thumbnail: "assets/img/project/h2_project_img01.jpg",
          heading: "New Central Garden",
          shortAddress: "Baltimore, MD",
        },
        {
          thumbnail: "assets/img/project/h2_project_img02.jpg",
          heading: "City Shopping Complex",
          shortAddress: "Charlottesville, VA",
        },
      ],
    },
    servicesSection: {
      sectionHeading: "¿Qué tal esto?",
      heading:
        "Affordable Living Solutions, Turning Spaces into Affordable Comfort",
      services: [
        {
          image: "/assets/img/project/la-maarca-images/05-compressed.jpeg",
          heading: "Residential Development",
          text: "Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia",
        },
        {
          image: "/assets/img/project/la-maarca-images/06-compressed.jpeg",
          heading: "Commercial Development",
          text: "Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia",
        },
        {
          image: "/assets/img/project/la-maarca-images/07-compressed.jpg",
          heading: "Industrial Development",
          text: "Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia",
        },
      ],
    },
    inquirySection: {
      sectionHeading: "Quick Inquiry",
      heading:
        "If you have any question? we are glad to consult you                          as soon as possible",
    },
  },
  aboutUsPage: {
    aboutSection: {
      thumbnailImage: "/assets/img/images/about_img.jpg",
      sectionHeading: "Quiénes Somos",
      heading: "treinta años as a trusted leader in the real estate industry",
      text: "For over three decades, FORNIDO has been a cornerstone in the global real      estate industry. Our commitment to quality, innovation, and customer satisfaction has solidified our reputation as a trusted leader. From sprawling villas and serene residential parks to bustling shopping malls, we have crafted diverse real estate solutions across the globe. Our portfolio spans multiple countries, offering a wide range of options to suit your lifestyle and investment goals.",
    },
    ourVisionSection: {
      thumbnailImage: "/assets/img/images/vision_img.jpg",
      sectionHeading: "Nuestra Visión",
      heading:
        "We consider ourselves as the catalysts for realizing people's ambitions.",
      text: "Our vision is to lead the real estate industry by crafting iconic developments that exceed global standards and offer diverse, enriching experiences for our clients.",
    },
    ourMissionSection: {
      thumbnailImage: "/assets/img/images/mission_img.jpg",
      sectionHeading: "Nuestra Misión",
      heading: "To become the world's most reliable name in real estate.",
      text: "Our mission is to lead the industry in creating cutting-edge, environmentally conscious luxury housing that exceeds the highest standards of excellence, providing unparalleled value and satisfaction to every customer.",
    },
    contactDetails: {
      email: "worldofsahilanand@gmail.com",
      phoneNumber: "+91-8282820811",
      socialLinks: {
        facebook: "<link>",
        instagram: "<link>",
        twitter: "<link>",
        linkedin: "<link>",
        youtube: "<link>",
      },
    },
  },
  projectPage: {
    aboutProjectSection: {
      sectionHeading: "WHO WE ARE",
      heading: "30 years of leadership in real estate sector",
      text: "<text>",
    },
    projects: [
      {
        id: "1",

        projectDetails: {
          propertyName: "Your Spanish Oasis in Goa",
          heading: " La Maarca",
          text: "La Maarca is a stunning, independent villa showcasing exquisite Spanish design nestled within Goa's verdant landscape. Elevated on a hillside, this villa offers an exclusive living environment characterized by privacy and natural beauty.",
          propertySize: "4187 SQFT",
          priceRange: "<number>",
          type: "Villa",
          flatSize: "2847 SQFT",
          status: "Under Construction",
        },
        projectImages: [
          "/assets/img/project/la-maarca-images/01-compressed.jpg",
          "/assets/img/project/la-maarca-images/02-compressed.jpg",
          "/assets/img/project/la-maarca-images/03-compressed.jpg",
          "/assets/img/project/la-maarca-images/04-compressed.jpg",
          "/assets/img/project/la-maarca-images/05-compressed.jpeg",
          "/assets/img/project/la-maarca-images/06-compressed.jpeg",
          "/assets/img/project/la-maarca-images/07-compressed.jpg",
          "/assets/img/project/la-maarca-images/08-compressed.jpg",
        ],

        projectFeatures: [
          {
            heading: "<heading>",
            text: "<text>",
          },
          {
            heading: "<heading>",
            text: "<text>",
          },
          {
            heading: "<heading>",
            text: "<text>",
          },
          {
            heading: "<heading>",
            text: "<text>",
          },
          {
            heading: "<heading>",
            text: "<text>",
          },
          {
            heading: "<heading>",
            text: "<text>",
          },
        ],

        locationDetails: {
          thumbnailImage:
            "/assets/img/project/la-maarca-images/mapLocation.jpg",
          sectionHeading: "Sodiem, GOA",
          address: "Siolim,Sodiem, Goa",
          locationLink: "https://maps.app.goo.gl/eykJmGYeWmjr7qgi9",
          nearbyAmenities: {
            superMarket: "<text>",
            railwayStation: "<text>",
            airport: "<text>",
            university: "<text>",
            hospital: "<text>",
            park: "<text>",
            busStation: "<text>",
          },
        },
        projectFloorPlans: [
          {
            id: "one",
            title: "Lower Ground",
            image: (
              <img
                className="content-center floor-plans"
                src="/assets/img/project/la-maarca-floor-plans/lower-ground.jpg"
                alt="Lower Ground Plan"
              />
            ),
          },
          {
            id: "two",
            title: "Ground",
            image: (
              <img
                className="content-center floor-plans"
                src="/assets/img/project/la-maarca-floor-plans/ground.jpg"
                alt="Ground Plan"
              />
            ),
          },
          {
            id: "three",
            title: "First",
            image: (
              <img
                className="content-center floor-plans"
                src="/assets/img/project/la-maarca-floor-plans/first.jpg"
                alt="First Floor Plan"
              />
            ),
          },
          {
            id: "four",
            title: "Terrace",
            image: (
              <img
                className="content-center floor-plans"
                src="/assets/img/project/la-maarca-floor-plans/terrace.jpg"
                alt="Terrace"
              />
            ),
          },
        ],
        brochureLink:
          "https://drive.google.com/file/d/1yJj7ywNR5uXz55CLrfnJ8RxqM9U9KiDX/view",
      },
      {
        id: "2",

        projectDetails: {
          propertyName: "Your Spanish Oasis in Goa",
          heading: " La Maarca",
          text: "La Maarca is a stunning, independent villa showcasing exquisite Spanish design nestled within Goa's verdant landscape. Elevated on a hillside, this villa offers an exclusive living environment characterized by privacy and natural beauty.",
          propertySize: "4187 SQFT",
          priceRange: "<number>",
          type: "Villa",
          flatSize: "2847 SQFT",
          status: "Under Construction",
        },
        projectImages: [
          "/assets/img/project/la-maarca-images/01-compressed.jpg",
          "/assets/img/project/la-maarca-images/02-compressed.jpg",
          "/assets/img/project/la-maarca-images/03-compressed.jpg",
          "/assets/img/project/la-maarca-images/04-compressed.jpg",
          "/assets/img/project/la-maarca-images/05-compressed.jpeg",
          "/assets/img/project/la-maarca-images/06-compressed.jpeg",
          "/assets/img/project/la-maarca-images/07-compressed.jpg",
          "/assets/img/project/la-maarca-images/08-compressed.jpg",
        ],

        projectFeatures: [
          {
            heading: "<heading>",
            text: "<text>",
          },
          {
            heading: "<heading>",
            text: "<text>",
          },
          {
            heading: "<heading>",
            text: "<text>",
          },
          {
            heading: "<heading>",
            text: "<text>",
          },
          {
            heading: "<heading>",
            text: "<text>",
          },
          {
            heading: "<heading>",
            text: "<text>",
          },
        ],

        locationDetails: {
          thumbnailImage:
            "/assets/img/project/la-maarca-images/mapLocation.jpg",
          sectionHeading: "Sodiem, Goa",
          address: "Siolim, Sodiem, Goa.",
          locationLink: "https://maps.app.goo.gl/eykJmGYeWmjr7qgi9",
          nearbyAmenities: {
            supermarket: "<text>",
            railwayStation: "<text>",
            airport: "<text>",
            university: "<text>",
            hospital: "<text>",
            park: "<text>",
            busStation: "<text>",
          },
        },
        projectFloorPlans: [
          {
            id: "one",
            title: "Lower Ground",
            image: (
              <img
                className="content-center floor-plans"
                src="/assets/img/project/la-maarca-floor-plans/lower-ground.jpg"
                alt="Lower Ground Plan"
              />
            ),
          },
          {
            id: "two",
            title: "Ground",
            image: (
              <img
                className="content-center floor-plans"
                src="/assets/img/project/la-maarca-floor-plans/ground.jpg"
                alt="Ground Plan"
              />
            ),
          },
          {
            id: "three",
            title: "First",
            image: (
              <img
                className="content-center floor-plans"
                src="/assets/img/project/la-maarca-floor-plans/first.jpg"
                alt="First Floor Plan"
              />
            ),
          },
          {
            id: "four",
            title: "Terrace",
            image: (
              <img
                className="content-center floor-plans"
                src="/assets/img/project/la-maarca-floor-plans/terrace.jpg"
                alt="Terrace"
              />
            ),
          },
        ],
        brochureLink:
          "https://drive.google.com/file/d/1yJj7ywNR5uXz55CLrfnJ8RxqM9U9KiDX/view",
      },
    ],
  },
  contactPage: {
    addresses: [
      {
        address: "Sodiem Siolim, Siolim, Goa - 403517",
        email: "worldofsahilanand@gmail.com",
        phoneNumber: "+91-8282820811",
      },
      // {
      //   address: "<heading>",
      //   email: "<email>",
      //   phoneNumber: "<text>",
      // },
      // {
      //   address: "<heading>",
      //   email: "<email>",
      //   phoneNumber: "<text>",
      // },
    ],
  },
};
