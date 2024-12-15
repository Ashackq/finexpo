import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import "./wf.css";
import "../../../../src/App.css";
import downhome from "../../../assets/downhome.jpg";
import CircularCarousel from "../carousel/car";
// import Vector1 from "../../../assets/Vector1.png";
// import Vector2 from "../../../assets/Vector2.png";
// import Vector3 from "../../../assets/Vector3.png";
// import Vector4 from "../../../assets/Vector4.png";


const WhatIsFinxpo = ()=>{

  useEffect(() => {
    const whatsfinxpo = document.querySelector(".outercard");
    const Whatsin = document.querySelector(".whatsin"); 
    const description = document.querySelector(".innercard");
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementOffsetTop = whatsfinxpo.offsetTop;
  
      if (scrollPosition > elementOffsetTop - window.innerHeight / 1.5) {
        whatsfinxpo.style.opacity = 1;
        whatsfinxpo.style.animation = "zoomInOut 1s ease-out forwards"; // Trigger animation
  
        // Delay description animation slightly after the zoom-in effect
        setTimeout(() => {
          description.style.opacity = 1;
          description.style.transform = "translateY(0)";
        }, 1000);
  
        // Delay whatsin animation slightly after the zoom-in effect
        setTimeout(() => {
          Whatsin.style.opacity = 1;
          Whatsin.style.animation = "zoomInOut 1s ease-out forwards"; // Trigger animation
        }, 2000);
  
        window.removeEventListener("scroll", handleScroll);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

    return(
    <>
      <div className="outercard">
        <h1>What's <span className="gradient-text" style={{top:"-100px"}}>Finxpo</span></h1>
        <div className="innercard ">
            <p className="ubuntu-regular">FinXpo is a three-day immersive experience dedicated to the future of finance, exploring the intersection of Web3 and FinTech.
            The event aims to educate, inspire, and connect attendees with industry leaders, offering a unique blend of workshops, competitions, 
            and networking opportunities. From blockchain basics to advanced quantitative finance methods. FinXpo is a three-day immersive experience dedicated to the future of finance, exploring the intersection of Web3 and FinTech.
            The event aims to educate, inspire, and connect attendees with industry leaders, offering a unique blend of workshops, competitions, 
            and networking opportunities. From blockchain basics to advanced quantitative finance methods</p>
        </div>
        <div className="what-is-finxpo-img">
                <img src={downhome} alt="what is finxpo" />
        </div>
      </div>  

        <div className="whatsin">
        <h1> What's In For <span className='gradient-text'>YOU</span></h1>
        <CircularCarousel />
        <div className="what-is-finxpo-img">
                <img src={downhome} alt="what is finxpo" />
        </div>
        {/* <img className="vectors" src={Vector1} alt="Tl" style={{ left: 250 }} /> */}
        
        </div>



    </>
  
    
    );
}

export default WhatIsFinxpo;