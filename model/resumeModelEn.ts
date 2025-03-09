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
      badges: ["Python Flask", "OpenAI API", "Next JS(TypeScript)", "Postgre SQL", "Stripe", "Firebase", "Force graph 3d", "MapBox "],
      href: "/",
      logoUrl: "/assets/icon/synapse.jpg",
      company: "Synergy Mad",
      location: "Full remote",
      description:
        "As a Full Stack Web Developer at Synergy Mad, I worked with a team of developers to:<ul className='list-disc'><li className='text-lg font-regular text-justify list-disc'>Develop a chat application with an AI for processing user corpora</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Participate in the development of a 3D biblical simulation application</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Develop an image generation application by AI with Stable Diffusion API</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Integrate landing pages for various websites</li>" +
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
        "As a Python Developer at Quantium, I worked with a team of developers to:<ul className='list-disc'><li className='text-lg font-regular text-justify list-disc'>Program a lead generation script to improve SEO for a website</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Write web scraping scripts for collecting data from potential clients</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Analyze and verify lists of client emails obtained for advertising spam</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Develop a SaaS application for data management in a business</li>" +
        "</ul>"
    },
    {
      title: "Fullstack Developer",
      start: "July 2023 ",
      end: "August 2023",
      badges: ["Python Flask", "Next JS(TypeScript)", "Firebase", "Stripe"],
      href: "https://fanampiana.com",
      logoUrl: "/assets/icon/fpay.jpg",
      company: "Fpay",
      location: "Andohalo, Antananarivo",
      description:
        "As a Fullstack Developer at Fpay, I contributed to projects using Flask for backend and React for frontend:<ul className='list-disc'><li className='text-lg font-regular text-justify list-disc'>Design a crowdfunding platform [Flask, ReactJS, and Firebase], integration of authentication, flat offers from mobile operators, and USSD codes as APIs for mobile transactions like buying internet packages, money transfer via Mobile Money, and payment of Canal+ subscriptions.</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Refactor an agency management application developed in Flask and rewrite it in Next JS to improve user performance.</li>" +
        "</ul>"
    },
    {
      title: "Volunteer in IT Technician and Multimedia",
      start: "September 2021",
      end: "June 2023",
      badges: ["Next JS (TypeScript)","Postgre SQL", "Adobe Premier", "Photoshop", "Figma"],
      href: "/",
      logoUrl: "/assets/icon/shine.jpg",
      company: "Bureau Église Évangélique Shine",
      location: "Andravoahangy, Antananarivo",
      description:
        "For 2 years as a volunteer at Église Évangélique Shine, I undertook several tasks as an IT technician and multimedia:<ul className='list-disc'><li className='text-lg font-regular text-justify list-disc'>Maintenance of IT devices and checking network installations to ensure they functioned properly on worship days</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Video editing of pastor's sermons and creation of DVD jacket covers and stickers for DVDs</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Creation of multimedia supports such as flyers, greeting cards, and Bible covers for religious events</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Development of a QR Code generator for invitations to religious events using AdonisJS to verify the validity of scanned QR codes. <a href='https://github.com/Herman-Riah19/QRCodeGenerate'>Source code</a></li>" +
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
      description:
        "During my internship at the Ministry of Technical Education and Vocational Training, in the information department (INFor), I participated in:<ul className='list-disc'><li className='text-lg font-regular text-justify list-disc'>Development of an online library web application [PHP, MySQL, Bootstrap], integration of Ministry videos via YouTube links, and deployment of the site on a server</li>" +
        "<li className='text-lg font-regular text-justify list-disc'>Installation of a firewall with PfSense and Debian to filter connection on the site, integration of authentication security so only employees could connect to the internet, and blocking certain websites during work hours.</li>" +
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
  