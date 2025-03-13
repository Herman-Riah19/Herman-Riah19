interface ResumeModel {
    title: string;
    start: string;
    end: string;
    badges: string[];
    href: string;
    logoUrl: string;
    company: string;
    location: string;
    description: string;
  }
  
  const diplomasEn: Array<ResumeModel> = [
    {
      title: "Bachelor's Degree in Computer, Electronics and Telecommunications",
      start: "2017",
      end: "2020",
      badges: [],
      href: "/",
      logoUrl: "/assets/icon/gsi.jpg",
      company: "GSI Madagascar",
      location: "Analakely, Antananarivo",
      description: "Specialized in computer and telecommunications networks, with knowledge in desktop and web application programming. Configuration and troubleshooting of computer networks running on GNU/Linux infrastructures."
    },
    {
      title: "Technical Baccalaureate in Management",
      start: "2016",
      end: "2017",
      badges: [],
      href: "/",
      logoUrl: "/assets/icon/METFP.jpg",
      company: "Institute of Technical Education",
      location: "Amboanjombe, Antananarivo",
      description: "Specialized in business management, finance, and accounting, with the aim of venturing into entrepreneurship and accounting. This course was pursued at the secondary level to enter a higher institute."
    },
    {
      title: "Professional Studies Certificate in Management",
      start: "2015",
      end: "2016",
      badges: [],
      href: "/",
      logoUrl: "/assets/icon/METFP.jpg",
      company: "Institute of Technical Education",
      location: "Amboanjombe, Antananarivo",
      description: "This diploma is equivalent to a Higher Technical Diploma but at the secondary level, focused on basic management and IT (office automation, Word, Excel, PowerPoint). Inter-school training to integrate students into the job market."
    },
  ];
  
  const experiencesEn: Array<ResumeModel> = [
    {
      title: "Full Stack Developer",
      start: "February 2024",
      end: "Now",
      badges: ["Python", "Flask", "OpenAI API", "Next JS", "TypeScript", "Postgre SQL", "Stripe", "Firebase", "Force graph 3d", "MapBox GL", "AWS"],
      href: "/",
      logoUrl: "/assets/icon/synapse.jpg",
      company: "Synergy Mad",
      location: "Full remote",
      description:
        "<ul className='list-disc'><li className='text-lg font-regular text-justify list-disc'>Designing the Didache application, an encyclopedia of the Church, where I integrate a timeline a dynamic map, and a chat interface powered by AI.</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Developing the Gnose IA application, a conversational platform with AI that analyzes user-submitted corpora or PDF files</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Contributing to the development of OpenMyst, a 3D platform that simulates the life of Jesus on a map, incorporating a timeline and a genealogical tree</li>" +
        "</ul>"
    },
    {
      title: "Python Developer",
      start: "August 2023",
      end: "December 2023",
      badges: ["Python", "Beautiful Soap", "Selenium", "Tor"],
      href: "/",
      logoUrl: "/assets/icon/quantium.png",
      company: "Quantium",
      location: "Faravohitra, Antananarivo",
      description:
        "<ul className='list-disc'><li className='text-lg font-regular text-justify list-disc'>Developing a lead generation tool to facilitate prospecting and SEO optimization for Client websites, enhancing their online visibility and outreach.</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Writing web scraping scripts for data collection, enabling automated extraction of relevant information to support business intelligence and marketing strategies</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Analyze and verify lists of client emails obtained for advertising spam</li>" +
        "</ul>"
    },
    {
      title: "Fullstack Developer",
      start: "July 2023 ",
      end: "August 2023",
      badges: ["Python", "Flask", "Next JS", "TypeScript", "Firebase", "Stripe"],
      href: "https://fanampiana.com",
      logoUrl: "/assets/icon/fpay.jpg",
      company: "Fpay",
      location: "Andohalo, Antananarivo",
      description: "<ul className='list-disc'><li className='text-lg font-regular text-justify list-disc'>Contributing to the design of Jupiter, a money transaction platform, ensuring secure and efficient financial operations</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Working on authentication and database structuring, optimizing data integrity and Security to enhance system reliability</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Developing an API to trigger USSD codes for money transfers via mobile money, enabling seamless and accessible financial transactions</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Redesigning an agency management application, improving its architecture, user experience, and operational efficiency.</li>" +
        "</ul>"
    },
    {
      title: "Volunteer in IT Technician and Multimedia",
      start: "September 2021",
      end: "June 2023",
      badges: ["Next JS", "TypeScript","Postgre SQL", "Adobe Premier", "Photoshop", "Figma"],
      href: "/",
      logoUrl: "/assets/icon/shine.jpg",
      company: "Bureau Église Évangélique Shine",
      location: "Andravoahangy, Antananarivo",
      description:
        "<ul className='list-disc'><li className='text-lg font-regular text-justify list-disc'>Developed a web application for generating QR codes for invitations</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Performed maintenance on IT equipment within the organization</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Video editing of pastor's sermons and creation of DVD jacket covers and stickers for DVDs</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Creation of multimedia supports such as flyers, greeting cards, and Bible covers for religious events</li>" +
        "</ul>"
    },
    {
      title: "IT Technician Intern",
      start: "January 2020",
      end: "November 2020",
      badges: ["PHP", "Angular", "TypeScript", "Bootstrap", "MySQL"],
      href: "/",
      logoUrl: "/assets/icon/METFP.jpg",
      company:
        "Ministry of Technical Education and Vocational Training",
      location: "Ampefiloha, Antananarivo",
      description:"<ul className='list-disc'><li className='text-lg font-regular text-justify list-disc'>Developing a web application for an online library, where I integrated a page displaying video courses and a PDF reader within the app to enhance user experience and accessibility.</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Setting up a firewall with employee authentication via Active Directory and connection filtering, ensuring secure access and network protection</li>" +
        "</ul>"
    },
    {
      title: "Domotics Intern",
      start: "March 2019",
      end: "December 2019",
      badges: [],
      href: "/",
      logoUrl: "/assets/icon/stem.jpg",
      company: "STEM for Good",
      location: "Ankorondrano, Antananarivo",
      description:
        "During my internship at STEM for Good, I was trained in developing several home automation projects, including a balancing robot with Arduino and C++, as well as a sound generator with Arduino playing the 'Tia Zaza' music by playing with the sound frequencies."
    },
    {
      title: "Basic Programming Foundation Course",
      start: "2018",
      end: "2019",
      badges: [],
      href: "https://www.sololearn.com/",
      logoUrl: "/assets/icon/Sololearn.png",
      company: "SoloLearn.com",
      location: "Online",
      description: "A distance learning course on the SoloLearn platform, where I deepened my knowledge in Python, C/C++, JavaScript, and Dart, with participation in various challenges and competitions within the community."
    },
  ];
  
  const hobbiesEn: Array<ResumeModel> = [
    {
      title: "Fullstack Developer",
      start: "August 2021",
      end: "October 2023",
      badges: [],
      href: "https://github.com/Herman-Riah19/TryInc",
      logoUrl: "/assets/icon/trinkz.svg",
      company: "Personal Project",
      location: "Imeritsiatosika, Antananarivo",
      description:
        "I used my skills in AdonisJS, React, and Inertia JS to:<ul className='list-disc'>" +
        "<li className='text-lg font-regular text-justify list-disc'>Create a social network for digital designers and AI image generators, showcasing their talent and specialty while protecting their rights. <a href='https://github.com/Herman-Riah19/TryInc'>Source code</a></li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Develop a local photo gallery application. <a href='https://github.com/Herman-Riah19/LoopbackReactProject'>Source code</a></li>" +
        "</ul>"
    },
    {
      title: "React JS Integrator",
      start: "March 2023",
      end: "March 2023",
      badges: [],
      href: "https://dash-dark-game.netlify.app",
      logoUrl: "/assets/icon/nft.png",
      company: "Freelance",
      location: "Andravoahangy, Antananarivo",
      description:
        "During a freelance mission, I integrated a NFT sale application for Japanese video game using ReactJS and Material UI, ensuring the dashboard page of the application according to the client's design details. <a href='https://dash-dark-game.netlify.app'>Site</a>"
    },
    {
      title: "Wordpress Developer",
      start: "August 2021",
      end: "August 2021",
      badges: [],
      href: "https://github.com/Herman-Riah19?tab=repositories",
      logoUrl: "/assets/icon/nft.png",
      company: "Freelance",
      location: "67Ha, Antananarivo",
      description:
        "I developed a multilingual website for a musician using PHP and Wordpress, highlighting his talent in guitar to expand his communication network internationally and obtain an advanced digital signature for his musical career."
    },
    {
      title: "Fullstack Developer",
      start: "September 2020",
      end: "December 2020",
      badges: [],
      href: "https://github.com/Herman-Riah19?tab=repositories",
      logoUrl: "/assets/icon/rainbow.jpg",
      company: "Rainbow MDG By Pass",
      location: "By Pass, Antananarivo",
      description:
        "I was contacted by a women's fashion agency to develop an e-commerce using TypeScript, MySQL, Angular, Express, and NodeJS to enable them to sell their products from their own platform."
    },
    {
      title: "Fullstack Developer",
      start: "2017",
      end: "2020",
      badges: [],
      href: "https://github.com/Herman-Riah19?tab=repositories",
      logoUrl: "/assets/icon/gsi.jpg",
      company: "GSI",
      location: "Analakely, Antananarivo",
      description:
        "During my studies at GSI University, I completed several personal projects to improve my development skills and prepare myself for the professional world. Here are some noteworthy projects:<ul className='list-disc'><li className='text-lg font-regular text-justify list-disc'>Development of a dynamic web application with PHP/MySQL for managing lists of cars for sale, taking into account different categories and prices of cars.</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Development of a static website summarizing the various courses learned at GSI University, as an integration exercise with HTML, CSS, and JavaScript.</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>For my final project, development of a 4G telecommunication network sizing software using C++ and the Qt framework, to calculate and plan frequency capacity and the number of pylons to be installed according to the environment.</li>" +
        "</ul>"
    },
  ];
  
  export { type ResumeModel, diplomasEn , experiencesEn, hobbiesEn };
  