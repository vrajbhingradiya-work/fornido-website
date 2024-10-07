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
        link: "https://www.instagram.com/fornido_/",
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
      heading: "Redefiniendo luxury as a trusted leader in real estate.",
      text: "Fornido has been a cornerstone in the luxury real estate industry. Our commitment to quality, innovation, and customer satisfaction has solidified our reputation as a trusted leader. From sprawling villas and serene residential parks to bustling shopping malls, we have crafted diverse real estate solutions. Our portfolio spans multiple projects, offering a wide range of options to suit your lifestyle goals. ",
      button: {
        title: "More About",
        link: "/about-us",
      },
    },
    projectsSection: {
      sectionHeading: "Proyectos Destacados",
      heading: "Ongoing and Completed Projects",
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
          image: "https://i.ibb.co/fqw435k/01.jpg",
          heading: "Residential Development",
          text: "Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia",
        },
        {
          image: "https://i.ibb.co/PjTV9t5/02.jpg",
          heading: "Commercial Development",
          text: "Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia",
        },
        {
          image: "https://i.ibb.co/0sB4fcr/03.jpg",
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
      heading: "Redefiniendo luxury as a trusted leader in real estate.",
      text: "Fornido has been a cornerstone in the luxury real estate industry. Our commitment to quality, innovation, and customer satisfaction has solidified our reputation as a trusted leader. From sprawling villas and serene residential parks to bustling shopping malls, we have crafted diverse real estate solutions. Our portfolio spans multiple projects, offering a wide range of options to suit your lifestyle goals. ",
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
          plotArea: "4187 SQFT",
          priceRange: "<number>",
          type: "Villa",
          carpetSize: "2847 SQFT",
          status: "Under Construction",
        },
        projectImages: [
          "https://i.ibb.co/fqw435k/01.jpg",
          "https://i.ibb.co/PjTV9t5/02.jpg",
          "https://i.ibb.co/0sB4fcr/03.jpg",
          "https://i.ibb.co/Km6Hj7d/04.jpg",
          "https://i.ibb.co/XkVcy7g/05.jpg",
          "https://i.ibb.co/n8zjFfC/06.jpg",
          "https://i.ibb.co/6tBdxBB/07.jpg",
          "https://i.ibb.co/SBGV6QP/08.jpg",
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
          thumbnailImage: "https://i.ibb.co/bdPMp3Z/map-Location.jpg",
          sectionHeading: "Sodiem, GOA",
          address: "Siolim,Sodiem, Goa",
          locationLink: "https://maps.app.goo.gl/eykJmGYeWmjr7qgi9",
          nearbyAmenities: [
            { title: "Mopa Airport", value: "30 mins" },
            { title: "Thalassa Siolim", value: "10 mins" },
            { title: "Assagao", value: "12 mins" },
          ],
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
          heading: " La Bóveda",
          text: "La Bóveda is a stunning, independent villa showcasing exquisite Spanish design nestled within Goa's verdant landscape. Elevated on a hillside, this villa offers an exclusive living environment characterized by privacy and natural beauty.",
          plotArea: "6307 SQFT",
          priceRange: "<number>",
          type: "Villa",
          carpetSize: "3774 SQFT",
          status: "Under Construction",
        },
        projectImages: [
          "https://i.ibb.co/j5NGPnj/01.jpg",
          "https://i.ibb.co/b1pVjv5/02.jpg",
          "https://i.ibb.co/wgjZLsw/03.jpg",
          "https://i.ibb.co/S6PnMvZ/04.jpg",
          "https://i.ibb.co/XkCpvM7/05.jpg",
          "https://i.ibb.co/JcQQBxN/06.jpg",
          "https://i.ibb.co/Pz4YJkJ/07.jpg",
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
          thumbnailImage: "https://i.ibb.co/bdPMp3Z/map-Location.jpg",
          sectionHeading: "Soiolim, Goa",
          address: "Siolim marna, Siolim-Assagao border",
          locationLink: "https://maps.app.goo.gl/jscj4KErGRUcXgJs5?g_st=ic",
          nearbyAmenities: [
            { title: "Assagao", value: "5 mins" },
            { title: "Mopa Airport", value: "35 mins" },
            { title: "Dabolim Airport", value: "65 mins" },
            { title: "Thalassa", value: "7 mins" },
            { title: "Vagator beach", value: "15 mins" },
            { title: "Vinayak Restaurant", value: "10 mins" },
            { title: "Gunpowder", value: "12 mins" },
          ],
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
