import React, { useState, useEffect } from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";
import { slideImages } from "../Data/Slideshow_path.js";

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const Slideshow = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(slideImages.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {imgsLoaded ? (
          slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div className="section">
                <img
                  className="test"
                  src={slideImage.url}
                  alt="slideshow images not found"
                />
                <div className="text-block">
                  <h1 className="medium">{slideImage.title}</h1>
                  <p className="small">&emsp;{slideImage.caption}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="loading">
            <p></p>
          </div>
        )}
      </Zoom>
    </div>
  );
};

export default Slideshow;
