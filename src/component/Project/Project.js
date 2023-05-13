import React from "react";
import IMG1 from "../../Asset/Screenshot 2023-04-13 140857.jpg";
import IMG2 from "../../Asset/Screenshot 2023-01-20 094519.jpg";
import IMG3 from "../../Asset/Screenshot 2023-01-20 095107.jpg";
import "./Project.css";
//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Movie Website with React.js",
      img: IMG1,
      description:
        "An Movie website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://cozy-raindrop-42ec5b.netlify.app/",
      github: "https://github.com/jahidhasanmozumdar/Disney-clone",
    },
    {
      id: 2,
      title: "Car Selling website",
      img: IMG2,
      description:
        "Including admin panel and new product add, Update, Order Status.",
      technologies: "Html | CSS | Javascript | React Js | Node JS |Express js",
      link: "https://carfinder-b9938.web.app/",
      github: "https://github.com/jahidhasanmozumdar/carfinder-client-site",
    },
    {
      id: 3,
      title: "hero-courses",
      img: IMG3,
      description:
        "This site is a kind of educational platform. You can add course  and post your Course.",
      technologies: "React | Firebase | Tailwind",
      link: "https://glowing-llama-208283.netlify.app/",
      github:
        "https://github.com/jahidhasanmozumdar/hero-courses-client/tree/main/hero-courses",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
