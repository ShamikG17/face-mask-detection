import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import about from "../../images/about.jpg";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            Offering{" "}
            <span style={{ color: "#E0A42B" }}>innovative solutions</span> in
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

          <button className="dmc-button">Get a Quote</button>
        </div>
      </section>
      <section className="services">
        <h1>
          <div className="line"></div>
          Products
        </h1>
        <main className="page-content">
          <div className="card-wrapper">
            <div className="card">
              <div className="border-left"></div>
              <div className="border-top"></div>
              <div className="border-right"></div>
              <div className="border-bottom"></div>
              <div className="content">
                <h2 className="title">Automation</h2>
                <p className="copy">
                  Check out all of these gorgeous mountain trips with beautiful
                  views of, you guessed it, the mountains
                </p>
                <button className="btn">Catalogue</button>
              </div>
            </div>
            <div className="card-title">Automation</div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="border-left"></div>
              <div className="border-top"></div>
              <div className="border-right"></div>
              <div className="border-bottom"></div>
              <div className="content">
                {/* <h2 className="title">Packaging Machines</h2> */}
                <p className="copy">
                  Plan your next beach trip with these fabulous destinations
                </p>
                <button className="btn">Catalogue</button>
              </div>
            </div>
            <div className="card-title">Packaging Machines</div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="border-left"></div>
              <div className="border-top"></div>
              <div className="border-right"></div>
              <div className="border-bottom"></div>
              <div className="content">
                <h2 className="title">Material Handling Equipments</h2>
                <p className="copy">It's the desert you've always dreamed of</p>
                <button className="btn">Catalogue</button>
              </div>
            </div>
            <div className="card-title">Material Handling Equipments</div>
          </div>
        </main>
      </section>

      <section className="about">
        <div>
          <img className="about-img" src={about} alt="about-img" />
        </div>
        <div className="about-text">
          <h1>ABout section</h1>
        </div>
      </section>
    </>
  );
};

export default Home;
