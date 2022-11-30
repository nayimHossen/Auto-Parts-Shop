import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const LogoSlider = () => {
  const images = [
    {
      _id: 1,
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/opel.png",
    },
    {
      _id: 2,
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/suzuki.png",
    },
    {
      _id: 3,
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/yamaha.png",
    },
    {
      _id: 4,
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/nissan.png",
    },
    {
      _id: 5,
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/volkswagen.png",
    },
    {
      _id: 6,
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/bmw.png",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url("https://klbtheme.com/chakta/wp-content/uploads/2021/01/company-bg.jpg")`,
      }}
    >
      <Slide
        slidesToScroll={1}
        slidesToShow={2}
        indicators={false}
        arrows={false}
        autoplay={true}
        responsive={[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
      >
        {images.map((im) => (
          <div
            key={im._id}
            className="bg-[#ff4545] opacity-90 flex justify-center items-center"
            style={{
              padding: "50px 0",
            }}
          >
            <img src={im.img} alt="logo" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default LogoSlider;
