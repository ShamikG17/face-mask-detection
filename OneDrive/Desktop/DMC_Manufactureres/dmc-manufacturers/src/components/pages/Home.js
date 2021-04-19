import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Typewriter from "typewriter-effect";
import about from "../../images/about.jpg";
import product1 from "../../images/product1.jpg";
import product2 from "../../images/product2.jpeg";
import product3 from "../../images/product3.jpeg";
import { Parallax, Background } from "react-parallax";
import ProjectCarousel from "../ProjectCarousel";
import { ProjectsData } from "../ProjectsData";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            Offering{" "}
            <span style={{ color: "#F6A41D" }}>Innovative Solutions</span> in
          </h1>
          <div className="hero-typewriter">
            <Typewriter
              options={{
                delay: 50,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Automation")
                  .pauseFor(1000)
                  .deleteAll(1)
                  .typeString("Packaging Machines")
                  .pauseFor(1000)
                  .deleteAll(1)
                  .typeString("Material Handling")
                  .pauseFor(1000)
                  .deleteAll(1)
                  .start();
              }}
            />
          </div>
          <div className="sub-text">
            <p>
              Providing creative, efficient and budget friendly solutions <br />
              for your complex engineering requirements.
            </p>
          </div>
          <Link to="#">
            <button className="dmc-button">Get a Quote</button>
          </Link>
        </div>
      </section>

      <section className="products">
        <h1> Our Products </h1>
        <div className="row product-cards">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card-wrapper">
              <div className="card">
                <img src={product1} alt="..." />
                <div className="card-caption">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa ratione earum suscipit, voluptatem in explicabo
                    inventore libero aliquam harum maxime.
                  </p>
                  <br />
                  <button className="card-btn">Read More</button>
                </div>
              </div>
              <h3 className="card-title">Automation</h3>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card-wrapper">
              <div className="card">
                <img src={product2} alt="..." />
                <div className="card-caption">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus minima temporibus et molestias ipsa impedit
                    necessitatibus optio sit adipisci libero!
                  </p>
                  <br />
                  <button className="card-btn">Read More</button>
                </div>
              </div>
              <h3 className="card-title">Packaging Machines</h3>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <div className="card-wrapper">
              <div className="card">
                <img src={product3} alt="..." />
                <div className="card-caption">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                    quos repellendus reprehenderit debitis rerum laborum amet
                    architecto velit alias accusamus.
                  </p>
                  <br />
                  <button className="card-btn">Read More </button>
                </div>
              </div>
              <h3 className="card-title">Material Handling</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="row gx-0">
          <div className="col-12 col-md-6">
            <img className="about-img" src={about} alt="..." />
          </div>

          <div className="col-12 col-md-6 about-text">
            <h1>Who We Are</h1>
            <p>
              DMC Manufacturers is comprised of a group of engineering experts
              who focus on creative solutions for complex engineering projects.
              We’ve accomplished much success with various projects. We strive
              for innovation and work carefully in order to stay within budget
              while providing maximum value for our clients.
            </p>
            <div className="about-btn-wrapper">
              <Link to="#">
                <button className="about-btn">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <h1>Our Projects</h1>
        <ProjectCarousel slides={ProjectsData} />
      </section>
    </>
  );
};

export default Home;
