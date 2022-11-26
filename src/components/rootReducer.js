const initState = {
    user : {
        name: "Moses Lule",
        profile: "Front-end developer",
        aboutme: "Am Moses a Front-End Developer from Kampala, Uganda with over 1 year experience of design and development of awesome, responsive and effective UI and UX for websites, web applications and mobile applications using HTML, CSS/SASS, JAVASCRIPT, BOOTSTRAP, REACT and I intend to become a Full-Stack Developer with time and i been developing some databases appication in PHP and MySQL.",
        contact: {
            email : "lulemoses67@gmail.com",
            linkedin : "https://www.linkedin.com/in/lulemoses67",
            instagram : "https://www.instagram.com/lulemoses67",
            github : "https://github.com/lulemoses67"
        },
        services: [
          {   id :0,
              title: "ui/ux design",
              icon: "fa-brush",
              body: "I create interactive programs that enhance a customer's experience with a brand and facilitate an enjoyable experience on the business's website."
          },
          {
              id :1,
              title: "web development",
              icon: "fa-tasks",
              body: "I plan, create and code websites and web pages, many of which combine text with pictures, graphics and video clips."
          },
          {
              id : 2,
              title: "Responsive Design",
              icon: "fa-binoculars",
              body: "Designing engaging and responsive landing pages."
          },
          {
              id : 3,
              title: "Graphics Design",
              icon: "fa-500px",
              body: "I visualize and create graphics including illustrations, logos, layouts and photos. I design most of the graphics i use in my programs."
          },
          {
              id : 4,
              title: "Content Management",
              icon: "fa-edit",
              body: "Building a brand identity and online presence through the creation and sharing of multimedia content online."
          },
          {
              id : 5,
              title: "SEO",
              icon: "fa-search",
              body: "Developing and implementing effective search engine optimization (SEO) strategies. Using Google console and use meta tags"
          }
      ],
      projects: [
        {
            id : 0,
            title: "Hulstrap",
            category: "css-library",
            about: "A css-library used to develop awesome user interface like this site is using. Developed i sass and some javascripts and can be modified and very easy to using by add some classes to html elements. Butttons, grid, cards, forms and more",
            sourceCode: "https://github.com/lulemoses67/fiora-1.0/tree/main/New%20folder",
            link: "./hul.html",
            duration: "2022 - present",
            progLang: [
                "fa-brands fa-css3",
                "fab fa-sass",
                "fa-brands fa-js-square"
            ]
        },
        {
            id : 1,
            title: "Personal Site",
            category: "portfolio",
            about: "An awesome portilio for any professional worker to highlight his or her experience and projects done in certain feilds. Responsive and also developed using Hulstrap my css-library.",
            sourceCode: "https://github.com/lulemoses67/lulemoses.github.io",
            duration: "2021 - present",
            progLang: [
                "fa-brands fa-html5",
                "fa-brands fa-css3",
                "fab fa-sass",
                "fa-brands fa-js-square"
            ]
        },
        {
            id : 2,
            title: "Blog Filter",
            category: "portfolio",
            about: "A simple javascript program that can filter data by search, single bodyed data, display all data in browser and filter data by any object property. Object are displayed using handlebars a simple js templating library.",
            "pen": "https://github.com/lulemoses67/lulemoses.github.io",
            duration: "2022",
            progLang: [
                "fa-brands fa-js-square"
            ]
        },
        {
            id : 3,
            title: "Allianz Soccer",
            category: "E-sports",
            about: "Allianz Soccer Academy is a soccer Academy in Kampala, capital of Uganda. The academy tries so hard to train and instill football skills in young talents and expose them in the football world.(it is a non profitable organization).",
            "preview": "https://lulem.000webhostapp.com/allianzsoccer/index.php",
            duration: "2022(April) - present",
            progLang: [
                "fa-brands fa-html5",
                "fa-brands fa-css3",
                "fab fa-sass",
                "fa-brands fa-js-square"
            ]
        }
    ],
    skills: {
      basics: [
          "html",
          "javascript",
          "css"
      ],
      backend: [
          "php",
          "javascript",
          "reacts"
      ],
      design: [
          "css",
          "scss",
          "bootsrap"
      ],
      others: [
          "jquery",
          "handlebars"
      ],
      databases: [
          "json-server",
          "firebase",
          "mysql"
      ]
    }
    }
  }
  
  
  
  const rootReducer = (state = initState, action) => {
    return state;
  }
  
  export default rootReducer;