import React from "react";
import "./Contact.css";
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact Us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.{" "}
            <br />
            {/* We belive a good place to live that can make your life better. */}
          </span>

          <div className="flexColStart contactModes">

{/* first row */}
            <div className="flexStart row">

{/* mode-1 */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Chat Now</span>
                    <span className="secondaryText">+91 81100 08541</span>
                  </div>
                </div>
              </div>

{/* mode-2 */}

             <div className="flexColCenter mode">

                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Call Now</span>
                    <span className="secondaryText">+91 81100 08541</span>
                  </div>
                </div>
              </div>


            </div>

{/* second row */}


            <div className="flexStart row">

{/* mode-3 */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Video now</span>
                    <span className="secondaryText">+91 81100 08541</span>
                  </div>
                </div>
              </div>


{/* mode-4 */}

            <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Message Now</span>
                    <span className="secondaryText">+91 81100 08541</span>
                  </div>
                </div>
              </div>


            </div>



          </div>
        </div>

        {/* right side */}

        <div className="c-right">
          <div className="image-container">
            <img src="./r1.png" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
