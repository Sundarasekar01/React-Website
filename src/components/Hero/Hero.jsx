import React from "react";
import "../Hero/Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <h1>
              Discover <br />
              most Suitable <br />
              Property
            </h1>
          </div>

          <div className="flexColStart hero-description">
            <span className="secondaryText">Find a variety of properties that suits you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residences for you</span>
          </div>

          <div className="flexCenter hero-search">
            <HiLocationMarker color="var(--blue)" size={25} />

            <input type="text" name="" id="" />

            <button className="button">Search</button>
          </div>

          <div className="flexCenter hero-stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8500} end={9000} duration={10} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={500} end={1300} duration={7} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={8500} end={9000} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
