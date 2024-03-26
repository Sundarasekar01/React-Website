import React from "react";
import "../Hero/Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className=" paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <motion.h1
            initial={{y:'2rem',opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{
duration:2,type:'spring'
            }}
            
            >

  
 Make your <br />
 dream property  <br />
 a reality
            </motion.h1>
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

          <div className="flexCenter stats">
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
          <motion.div 
           initial={{x:'7rem',opacity:0}}
           animate={{x:0,opacity:1}}
           transition={{
duration:2,type:'spring'
           }}
          
          className="image-container">
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
