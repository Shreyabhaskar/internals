import React from "react";
import { Card } from "react-bootstrap";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#777" />
              </svg> */}
              <img
                src="/1.jpg"
                alt=""
                className="bd-placeholder-img"
                style={{
                  opacity: 0.5,
                }}
              />

              <div className="container">
                <div
                  className="carousel-caption text-start"
                  style={{
                    color: "#000",
                  }}
                >
                  <h1>Knowledge Academy</h1>
                  <p>
                    Knowledge Academy is a premier educational institution
                    dedicated to providing a comprehensive and enriching
                    learning experience. Our mission is to empower students with
                    the knowledge, skills, and values they need to succeed in
                    today's dynamic world.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#777" />
              </svg>

              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>
                    Some representative placeholder content for the second slide
                    of the carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#777" />
              </svg>

              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <img
                src="/2.png"
                alt=""
                className="bd-placeholder-img rounded-circle"
                style={{
                  width: 140,
                  height: 140,
                }}
              />
              <h2>Python</h2>
              <p>
                Python is a high-level, interpreted, interactive and
                object-oriented scripting language. Python is designed to be
                highly readable. It uses English keywords frequently where as
                other languages use punctuation, and it has fewer syntactical
                constructions than other languages.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details &raquo;
                </a>
              </p>
            </div>

            <div className="col-lg-4">
              <img
                src="/3.png"
                alt=""
                className="bd-placeholder-img rounded-circle"
                style={{
                  width: 140,
                  height: 140,
                }}
              />
              <h2>Java</h2>
              <p>
                Java is a high-level programming language developed by Sun
                Microsystems. It was originally designed for developing programs
                for set-top boxes and handheld devices, but later became a
                popular choice for creating web applications.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details &raquo;
                </a>
              </p>
            </div>

            <div className="col-lg-4">
              <img
                src="/4.png"
                alt=""
                className="bd-placeholder-img rounded-circle"
                style={{
                  width: 140,
                  height: 140,
                }}
              />
              <h2>javascript</h2>
              <p>
                JavaScript is a lightweight, interpreted programming language.
                It is designed for creating network-centric applications. It is
                complimentary to and integrated with Java. JavaScript is very
                easy to implement because it is integrated with HTML. It is open
                and cross-platform.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="/2.png"
                alt=""
                className="bd-placeholder-img rounded-circle"
                style={{
                  width: 140,
                  height: 140,
                }}
              />
              <h2>Python</h2>
              <p>
                Python is a high-level, interpreted, interactive and
                object-oriented scripting language. Python is designed to be
                highly readable. It uses English keywords frequently where as
                other languages use punctuation, and it has fewer syntactical
                constructions than other languages.
              </p> 
              <p>
                <a className="btn btn-secondary" href="#">
                  View details &raquo;
                </a>
              </p>gi
            </div>
            <div className="col-lg-4">
              <img
                src="/2.png"
                alt=""
                className="bd-placeholder-img rounded-circle"
                style={{
                  width: 140,
                  height: 140,
                }}
              />
              <h2>Python</h2>
              <p>
                Python is a high-level, interpreted, interactive and
                object-oriented scripting language. Python is designed to be
                highly readable. It uses English keywords frequently where as
                other languages use punctuation, and it has fewer syntactical
                constructions than other languages.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="/2.png"
                alt=""
                className="bd-placeholder-img rounded-circle"
                style={{
                  width: 140,
                  height: 140,
                }}
              />
              <h2>Python</h2>
              <p>
                Python is a high-level, interpreted, interactive and
                object-oriented scripting language. Python is designed to be
                highly readable. It uses English keywords frequently where as
                other languages use punctuation, and it has fewer syntactical
                constructions than other languages.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details &raquo;
                </a>
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />


         



    
        </div>

        <footer className="container">
          <p className="float-end">
            <a href="#">Back to top</a>
          </p>
          <p>
            &copy; 2017–2021 Company, Inc. &middot;
            <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
          </p>
        </footer>
      </main>
      <Footer />
    </>
  );
};

export default Home;
