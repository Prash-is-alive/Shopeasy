import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <Tilt gyroscope={true}>
            <h1>SALES</h1>
          </Tilt>
          <p>
            Experience the ease of shopping online with ShopEasy. Start browsing
            today and discover why we are the go-to destination for online
            shopping.
          </p>
          <div className="ctas">
            <div className="banner-cta" onClick={() => navigate("/about")}>
              Read More
            </div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
