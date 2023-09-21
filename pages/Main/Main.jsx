import { Link, useLocation } from "react-router-dom";
import React from "react";
import classes from "./Main.module.css";
import imgSrc1 from "../../components/img/nami.jpeg";
import imgSrc2 from "../../components/img/boa-hancock.jpg";
import imgSrc3 from "../../components/img/nico-robin.png";

const Main = () => {
  const location = useLocation();
  return (
    <div className={classes.pictures}>
        <div className={classes.pic}>
        <Link to="/second-page" state={{ from: location.pathname }}>
          <img src={imgSrc1} alt="" />
        </Link>
      </div>
      <div className={classes.pic}>
        <Link to="/second-page" state={{ from: location.pathname }}>
          <img src={imgSrc2} alt="" />
        </Link>
      </div>
      <div className={classes.pic}>
        <Link to="/second-page" state={{ from: location.pathname }}>
          <img src={imgSrc3} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Main;
