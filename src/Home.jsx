import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import jar from "../src/assets/jar.jpeg";
import jar1 from "./assets/jar1.jpeg";
import jar2 from "./assets/jar2.jpeg";
import jar3 from "./assets/jar3.jpeg";
import jar4 from "./assets/jar4.jpeg";
import logo from './assets/devchulli.png';
const images = [jar, jar1, jar3, jar2, jar4];
console.log(images);
const intervalTime = 4000;
const imageStyles = {
  position: "absolute",
  transition: "opacity 1s ease",
  width: "90%",
  left: "5%",
  top: "50%",
  transform: "translateY(-50%)",
};

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0); // Start fading out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setOpacity(1); // Start fading in
      }, 1000); // Wait for the fade out animation to complete (1s)
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
    setOpacity(1);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <Navbar toggleMenu={toggleMenu} showMenu={showMenu} />
      <div style={containerStyle}>
      
      <div
        className="w-1/2 h-[85vh] mt-[6.8%] flex justify-center items-center"
        style={{
          position: "relative",
          flex: 1,
          maxHeight: "85vh",
          overflow: "hidden",
          marginBottom: 0,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Current Image"
            style={{
              ...imageStyles,
              opacity: index === currentImageIndex ? opacity : 0,
              maxHeight: "85vh",
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        ))}
        {/* <div className="absolute bottom-0 w-full flex justify-center items-center mb-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${
                currentImageIndex === index ? "bg-gray-900" : "bg-pink-700"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div> */}
        <div>
        <img src={logo} alt="Logo" style={{ width: "540px", height: "300px" }}/>
        </div>
      </div>
      <div className="content-container" style={{ flex: 1, padding: "20px" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Welcome to Devchuli Beverage</h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            Devchuli Beverage is a leading beverage company offering a wide
            range of refreshing drinks and water products. Our mission is to
            provide high-quality beverages that enhance the lifestyles of our
            customers.
          </p>
        </div>
    
      </div>
    </div>
  );
};

export default Home;

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
  marginTop: "5%",
};

const contentContainer = {
  flex: 1,
  padding: "20px",
};
