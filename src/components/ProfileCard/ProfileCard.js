import "./ProfileCard.css";
import React, { useState } from "react";

function ProfileCard() {
  const [slideUp , toggleSlideUp] = useState(false)
    
  return (
    <div className="container">
      <div className="cover">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tPWYMuvPt_XMR3kh-CR3N8oiwRvhwlEv80cS8d4p&s"
          alt="Profile Pic"
        />
      </div>
      <div className={`body ${slideUp && `slideup`}`}>
        <div className="bodyWrapper">
        <img className={`avatar ${slideUp && `slideup`}`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tPWYMuvPt_XMR3kh-CR3N8oiwRvhwlEv80cS8d4p&s" alt="" />
        <div className="profileDetails">
            <section className="profileName">rhombus</section>
            <section className="profileEmail">rhumbusdigital@gmail.com</section>
            <section className="profileLocation">INDIA</section>
            <button  className= "seeMoreButton" onClick={() => {toggleSlideUp(!slideUp)}}>{!slideUp ? 'See More' : 'See Less' }</button>
            <div className="moreDetails">
                <p>I am a Developer, UI/UX Designer , Web Developer and Tecg freak.
                A little bit nerd also :)
                </p>
                <ul className="skillsets">
                    <li>Figma</li>
                    <li>React</li>
                    <li>MongoDb</li>
                    <li>Firebase</li>
                </ul>
            </div>

        </div>


        </div>
        
      </div>
    </div>
  );
}

export default ProfileCard;
