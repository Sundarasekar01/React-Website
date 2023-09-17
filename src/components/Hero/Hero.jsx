import React from "react";
import "../Hero/Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <h1>
              Discover <br />
              most Suitable <br />
              Property
            </h1>
          </div>

          <div className="flexColStart hero-description">
            <span>Find a variety of properties that suits you very easily</span>
            <span>Forget all difficulties in finding a residences for you</span>
          </div>



          <div className="hero-search">


            
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
