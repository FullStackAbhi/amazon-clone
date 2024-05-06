import React from "react";
import "./home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id={1234567}
          price={23}
          rating={5}
          title="Experience immersive sound with our premium speakers, delivering crystal-clear audio for your entertainment needs."
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
        <Product
          id={1234433}
          price={456}
          rating={3}
          title="Immerse yourself in stunning visuals with our high-resolution monitors, perfect for work, gaming, and multimedia enjoyment"
          image="./images/quaritsch-photography-m2zuB8DqwyM-unsplash.jpg"
        />{" "}
        <Product
          id={12224242}
          price={298}
          rating={4}
          title="Stay on schedule and in style with our collection of elegant and functional watches, crafted for both fashion and functionality."
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id={6789090}
          price={37}
          rating={2}
          title="Step up your style and comfort with our trendy and durable shoes, designed to keep you on the move with confidence."
          image="./images/domino-studio-164_6wVEHfI-unsplash.jpg"
        />
        <Product
          id={98766543}
          price={623}
          rating={3}
          title="Enhance your productivity with our ergonomic and responsive mice, designed for smooth navigation and precise control"
          image="./images/ryan-putra-j4PqlNVZ4Bc-unsplash.jpg"
        />
      </div>{" "}
      <div className="home_row">
        <Product
          id={97765432}
          price={237}
          rating={4}
          title="Elevate your typing experience with our sleek and efficient keyboards, offering comfort and precision for every keystroke."
          image="./images/clay-banks-PXaQXThG1FY-unsplash.jpg"
        />
      </div>
    </div>
  );
};

export default Home;

